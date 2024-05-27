import Head from 'next/head';
import Navbar from '../components/navbar';
import stylesHome from '../styles/Home.module.css';


export default function Home() {
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
        <div className={stylesHome.heading}>
          <h1 className={stylesHome.headingName}>Juan</h1>
          <p className={stylesHome.headingDes}>(handle: vxnuaj)</p>
        <p className = {stylesHome.bodyMain}>I opted out of UC Davis to fly across the country to Silicon <br></br>
          Valley to learn from exceptional founders and engineers.<br></br><br></br>
          Currently, I’m maximizing my skillsets within Deep Learning<br></br>
          with the goal to get to it’s bleeding edge within the year.<br></br><br></br>
          Recently, I’ve been obsessed with neural networks, knowledge<br></br>
          creation & epistemology, and paths to artificial superintelligence.<br></br><br></br>
          Also, I run <span className={stylesHome.bodyMainSmall}>(If you’re reading this, lemme know if you wanna go on a 15 mi. run. No one, besides 1, has been down for it so far!)</span><br></br><br></br>
          If you wanna chat, message me on Twitter or schedule a call!<br></br><br></br>
          Alternatively, if you want to stay updated with what I’ve been working on, <br></br>
          check out my GitHub or subscribe to my Substack.</p>
        </div>
        </div>
        <hr className={stylesHome.bodyHR}></hr>
      </main>
      </div>

  );
}