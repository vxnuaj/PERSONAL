import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import stylesPost from '../../styles/Post.module.css';
import Back from '../../components/back';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <div className = {stylesPost.container}>
        <div className = 'backgroundCircle'></div>
        <Head>
        <title>vxnuaj</title>
        <link rel="icon" href="/whiteme.ico"/>
        </Head>
        <main className = {stylesPost.home}>
        <Back/>
          <div className = {stylesPost.body}>
              <h1 className = {stylesPost.headingName}>{postData.title}</h1>
              <br/>
              <span className = {stylesPost.postDate} >
              <Date dateString = {postData.date}/>
              </span>
              <br/>
              <div className = {stylesPost.postMain} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
          </div>
        </main>
      </div>
    );
  }