import Head from 'next/head';
import Navbar from '../components/navbar';
import stylesWriting from '../styles/Writing.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Writing({allPostsData}) {
    return (
    <div className={stylesWriting.container}>
      <div className = 'backgroundCircle'></div>
      <Head>
        <title>vxnuaj</title>
        <link rel="icon" href="/whiteme.ico"/>
      </Head>
      < Navbar/>
      <main className = {stylesWriting.home}>
        <div className = {stylesWriting.body}>
          <h1 className = {stylesWriting.headingName}>Writing</h1>
          <p className = {stylesWriting.writingLinks}><a href = 'https://vxnuaj.substack.com'>Infinity</a>&nbsp;   ·&nbsp;  <a href = 'https://vxnuaj.substack.com'>Monthly Updates</a>  &nbsp;  · &nbsp; <a href = 'https://medium.com/@vxnuaj'>Medium</a> </p>
          <p className = {stylesWriting.headingSub}>Purely my personal thoughts, reflections, and curiosities. <br/>
          For your benefit, be skeptical of everything.<br/>
          </p>
          <ul className = {stylesWriting.posts}>
            {allPostsData.map(({date, title, id }) => (
            <Link href= {`/writing/${id}`} >
              <li className = {stylesWriting.postItem}> 
              <div className = {stylesWriting.postContent}>
                <span className={stylesWriting.postDate}><Date dateString={date} /></span>
                <span className = {stylesWriting.postTitle}>{title}</span>
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