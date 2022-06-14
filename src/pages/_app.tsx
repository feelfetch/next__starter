import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import { motion } from 'framer-motion';
import '/public/styles.css';
import '../styles/main/globals.css';


function MyApp({ Component, pageProps, router }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        smoothMobile: true,
      offset: ['3%', 100],
      lerp: 0.09,
      smartphone: {
        smooth: true
      }
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <motion.div
        key={router.route}
        initial="initial"
        transition={{ duration: 1.5, delay: 0.3 }}
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        >
          <Component {...pageProps} />
        </motion.div>
      </div>
    </RLSProvider>
  );
}

export default MyApp;
