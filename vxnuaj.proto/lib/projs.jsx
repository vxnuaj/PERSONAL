import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projsDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjsData() {

  const fileNames = fs.readdirSync(projsDirectory);
  const allProjsData = fileNames.map((fileName) => {

    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(projsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allProjsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjsIds() {
    const fileNames = fs.readdirSync(projsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

export async function getProjsData(id) {
  const fullPath = path.join(projsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
  