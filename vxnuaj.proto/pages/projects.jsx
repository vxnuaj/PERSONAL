import Head from 'next/head';
import Navbar from '../components/navbar';
import stylesProjs from '../styles/Projects.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';

import { getSortedProjsData } from '../lib/projs';

export async function getStaticProps() {
    const allProjsData = getSortedProjsData();
    return {
      props: {
        allProjsData,
      },
    };
  }

  export default function Projects({allProjsData}) {
    const currentProjs = allProjsData.filter(proj => proj.current);
    const pastProjs = allProjsData.filter(proj => !proj.current);

    const sortByDate = (a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    };
  
    currentProjs.sort(sortByDate);
    pastProjs.sort(sortByDate);  
   
    return (
      <div className={stylesProjs.container}>
        <div className = 'backgroundCircle'></div>
        <Head>
          <title>vxnuaj</title>
          <link rel="icon" href="/whiteme.ico"/>
        </Head>
        < Navbar/>
        <main className = {stylesProjs.home}>
          <div className = {stylesProjs.body}>
            <h1 className = {stylesProjs.headingName}>Projects</h1>
            <p className = {stylesProjs.projLinks}><a href = 'https://github.com/vxnuaj'>Github</a>&nbsp;   ·&nbsp;  <a href = 'https://medium.com/@vxnuaj'>Medium</a> </p>
            <p className = {stylesProjs.headingSub}>What I’ve built, on the path to surpass the edge of technical knowledge. <br/><i>“What I cannot create, I do not understand” - Feynman</i></p>
            <p className = {stylesProjs.currentProjs}>Active</p>
            <ul className = {stylesProjs.activeposts}>
              {currentProjs.map(({date, title, id }) => (
              <Link href= {`/projects/${id}`} >
                <li className = {stylesProjs.postItem}>
                <div className = {stylesProjs.postContent}>
                  <span className = {stylesProjs.postDate}><Date dateString={date}/></span>
                  <span className = {stylesProjs.postTitle}>{title}</span>
                </div>
              </li>
              </Link>
              ))}
            </ul>
            <p className = {stylesProjs.pastProjs}>Previous</p>
            <ul className = {stylesProjs.pastposts}>
            {pastProjs.map(({date, title, id }) => (
              <Link href= {`/projects/${id}`} >
                <li className = {stylesProjs.postItem}>
                <div className = {stylesProjs.postContent}>
                  <span className = {stylesProjs.postDate}><Date dateString={date}/></span>
                  <span className = {stylesProjs.postTitle}>{title}</span>
                </div>
              </li>
              </Link>
              ))}
            </ul>
            

          </div>
        </main>
      </div>
  );
    }