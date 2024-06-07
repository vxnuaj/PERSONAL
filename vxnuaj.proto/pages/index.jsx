import Head from 'next/head';
import Navbar from '../components/navbar';
import stylesHome from '../styles/Home.module.css';
import Link from 'next/link'
import Image from 'next/image';
import Date from '../components/date';


import { getSortedProjsData } from '../lib/projs';

export async function getStaticProps() {
  const allProjsData = getSortedProjsData();
  const limitedProjsData = allProjsData.slice(0, 3);
  return {
    props: {
      allProjsData: limitedProjsData,
    },
  };
}

export default function Home({allProjsData}) {
  return (
    <div className={stylesHome.container}>
      <div className = 'backgroundCircle'></div>
      <Head>
        <title>vxnuaj</title>
        <link rel="icon" href="/whiteme.ico"/>
      </Head>
      < Navbar/>
      <main className={stylesHome.home}>
        <div className = {stylesHome.body}>
          <h1 className={stylesHome.headingName}>Juan</h1>
        <p className={stylesHome.headingDes}>(handle: vxnuaj)</p>
        <p className = {stylesHome.bodyMain}>I opted out of UC Davis to fly across the country to Silicon Valley to learn <br></br>
          from exceptional founders and engineers.<br></br><br></br>
          Currently, I’m <a href = 'https://github.com/vxnuaj/LABS'>maximizing my skillsets within Deep Learning</a> with the goal<br></br>
          to get to it’s bleeding edge within the year.<br></br><br></br>
          Recently, I’ve been obsessed with neural networks, knowledge creation & <br></br>
          epistemology, and paths to artificial superintelligence.<br></br><br></br>
          Also, I run <span className={stylesHome.bodyMainSmall}>(If you’re reading this, lemme know if you wanna go on a 15 mi. run. No one, besides 1, has been down for it so far!)</span><br></br><br></br>
          If you wanna chat, message me on <a href = 'https://x.com/vxnuaj'>Twitter</a> or <a href = 'https://cal.com/vxnuaj'>schedule a call!</a><br></br><br></br>
          Alternatively, if you want to stay updated with what I’ve been working on, <br></br>
          check out my <a href = 'https://github.com/vxnuaj'>GitHub</a> or subscribe to my <a href = 'https://vxnuaj.substack.com'>Substack.</a></p>
          <ul className = {stylesHome.posts}>
            {allProjsData.map(({date, title, id }) => (
            <Link href= {`/projects/${id}`} >
              <li className = {stylesHome.postItem}> 
              <div className = {stylesHome.postContent}>
                <span className={stylesHome.postDate}><Date dateString={date} /></span>
                <span className = {stylesHome.postTitle}>{title}</span>
              </div>
            </li>
            </Link>
            ))}
          </ul>
          <div className = {stylesHome.socialLinks}>
            <Link href = 'https://x.com/vxnuaj'>
            <Image className = {stylesHome.linkArrow} src = '/linkarrow.svg' width = {20} height = {20}/>
            <span className = {stylesHome.socialName}>Twitter</span>
            </Link>
            <Link href = 'https://github.com/vxnuaj'>
            <Image className = {stylesHome.linkArrow} src = '/linkarrow.svg' width = {20} height = {20}/>
            <span className = {stylesHome.socialName}>Github</span>
            </Link>
            <Link href = 'https://vxnuaj.substack.com'>
            <Image className = {stylesHome.linkArrow} src = '/linkarrow.svg' width = {20} height = {20}/>
            <span className = {stylesHome.socialName}>Substack</span>
            </Link>
          </div>
        </div>
      </main>
      </div>

  );
}