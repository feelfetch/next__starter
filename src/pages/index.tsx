import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import styles from '../styles/main/main.module.css';

const Home: NextPage = () => {

  const { scroll } = useLocomotiveScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>WRDLSS NEXT LOCOMOTION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={[styles.main, ""].join(' ')}>
        <div data-scroll-section>

          <section id="firstSection" className={[styles.hero, "vh-100 dt w-100 bg-white relative z-0"].join(' ')} data-scroll data-scroll-speed="-8">
            <div className={[styles.heroContainer, "dtc v-mid tc black ph3 ph4-l"].join(' ')}>
              <h1 className={[styles.heroHeadingText, "f6 f2-m f-subheadline-l fw6 tc"].join(' ')}>WRDLSS NEXT LOCOMOTION</h1>
            </div>
          </section>

          <section id="secondSection" className={[styles.hero, "vh-100 dt w-100 bg-black relative z-1"].join(' ')} data-scroll data-scroll-speed="0">
            <div className={[styles.heroContainer, "dtc v-mid tc white ph3 ph4-l"].join(' ')}>
              <h1 className={[styles.heroHeadingText, "f6 f2-m f-subheadline-l fw6 tc"].join(' ')}>NEXTJS, TYPESCRIPT, SASS, GULP, TACHYONS, LOCOMOTIVE SCROLL, FRAMER MOTION</h1>
            </div>
          </section>

          <section id="thirdSection" className={[styles.hero, "vh-100 dt w-100 bg-gray relative z-0"].join(' ')} data-scroll data-scroll-speed="-8">
            <div className={[styles.heroContainer, "dtc v-mid tc black ph3 ph4-l"].join(' ')}>
              <h1 className={[styles.heroHeadingText, "f6 f2-m f-subheadline-l fw6 tc"].join(' ')}>STARTER TEMPLATE</h1>
            </div>
          </section>

          <section id="secondSection" className={[styles.hero, "vh-100 dt w-100 bg-black relative z-1"].join(' ')} data-scroll data-scroll-speed="0">
            <div className={[styles.heroContainer, "dtc v-mid tc white ph3 ph4-l"].join(' ')}>
              <h1 className={[styles.heroHeadingText, "f6 f2-m f-subheadline-l fw6 tc"].join(' ')}>
                <Link href="/about">PAGE</Link>
              </h1>
            </div>
          </section>

          <footer id="footerSection" data-scroll data-scroll-speed="0">
            <div className={[styles.footer, "vh-25 dt w-100 bg-white relative z-0"].join(' ')}>
              <div className={[styles.footerContainer, "dtc v-mid tc black ph3 ph4-l"].join(' ')}>
                <h1 className={[styles.footerText, "f6 tc"].join(' ')}>@WRDLSS.CLUB</h1>
              </div>
            </div>
          </footer>

        </div>
      </main>
         

    </div>
  );
};

export default Home;
