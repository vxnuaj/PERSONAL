import Head from 'next/head';
import { getAllProjsIds, getProjsData } from '../../lib/projs';
import Date from '../../components/date';
import stylesProjs from '../../styles/Proj.module.css';
import Back from '../../components/back';

export async function getStaticProps({ params }) {
  const projsData = await getProjsData(params.id);
  return {
    props: {
      projsData,
    },
  };
}

export function getStaticPaths() {
  const paths = getAllProjsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Projs({ projsData }) {
    return (
      <div className = {stylesProjs.container}>
        <div className = 'backgroundCircle'></div>
        <Head>
        <title>vxnuaj</title>
        <link rel="icon" href="/whiteme.ico"/>
        </Head>
        <main className = {stylesProjs.home}>
        <Back/>
          <div className = {stylesProjs.body}>
              <h1 className = {stylesProjs.headingName}>{projsData.title}</h1>
              <br/>
              <span className = {stylesProjs.projsDate} >
              <Date dateString = {projsData.date}/>
              </span>
              <br/>
              <div className = {stylesProjs.projsMain} dangerouslySetInnerHTML={{ __html: projsData.contentHtml }}/>
          </div>
        </main>
      </div>
    );
  }