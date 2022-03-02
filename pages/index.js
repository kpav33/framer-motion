import React, { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

// import lottie from "lottie-web";
// import json1 from "../data/lottie-1.json";
// import json2 from "../data/lottie-2.json";
// import json3 from "../data/lottie-3.json";
// import json4 from "../data/lottie-4.json";

export default function Home() {
  // Use lottie animations
  // Use ref instead of query selector?
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#lottie"),
  //     animationData: json1,
  //     loop: false,
  //   });
  //   lottie.loadAnimation({
  //     container: document.querySelector("#lottie-1"),
  //     animationData: json2,
  //     loop: false,
  //   });
  //   lottie.loadAnimation({
  //     container: document.querySelector("#lottie-2"),
  //     animationData: json3,
  //     loop: false,
  //   });
  //   lottie.loadAnimation({
  //     container: document.querySelector("#lottie-3"),
  //     animationData: json4,
  //     loop: true,
  //   });
  // }, []);

  // Framer motion staggerChildren for staggered fade in animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const itemStyle = {
    height: "100px",
    width: "auto",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {/* <motion.div
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 90,
          }}
          style={{ fontSize: "40px" }}
        >
          Heyo
        </motion.div> */}

        {/* <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          style={{ height: "auto", width: "400px" }}
        >
          <h1>
            Unlock your digital potential with a bespoke blockchain development
            company.
          </h1>
          <p>
            Dekrypt connects clients and their vision with an experienced and
            multi-talented blockchain &amp; application development team to
            create highly personalized solutions that stand out from the crowd.
          </p>
          <button>Get Started</button>
        </motion.section> */}

        <p className={styles.description}>Hello Netlify!</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        {/* <section style={{ height: "auto" }}>
          This is a section
          <div id="lottie" style={{ width: "100%" }}></div>
        </section> */}

        {/* Mobile version below */}

        {/* <section style={{ height: "auto" }}>
          This is a section
          <div id="lottie-1" style={{ width: "100%" }}></div>
        </section> */}

        {/* <section style={{ height: "auto", width: "100%" }}>
          This is a section
          <div id="lottie-2" style={{ width: "100%", height: "500px" }}></div>
        </section> */}

        {/* <section style={{ height: "auto" }}>
          This is a section
          <div id="lottie-3" style={{ width: "100%", height: "50%" }}></div>
        </section> */}

        {/* <div class="lottie-wrapper lottie-1">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_zermauuu.json"
            background="transparent"
            speed="1"
            style="width: 100%; height: 100%; margin: 0 auto"
            autoplay=""
          ></lottie-player>
        </div>
        <div class="lottie-wrapper lottie-1-mob">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_k8wlafhn.json"
            background="transparent"
            speed="1"
            style="width: 100%; height: 100%; margin: 0 auto"
            autoplay=""
            loop
          ></lottie-player>
        </div> */}

        <section style={{ height: "200px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -300 },
              }}
            >
              Hello framer motion!
            </motion.h2>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              // Dont use viewport if you want the animation to appear everytime the user scrolls around the page
              // viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 300 },
              }}
            >
              Hello framer motion!
            </motion.h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{
              display: "flex",
              width: "400px",
              justifyContent: "space-evenly",
            }}
          >
            <motion.div variants={item} style={itemStyle}>
              Dank
            </motion.div>
            <motion.div variants={item} style={itemStyle}>
              Memes
            </motion.div>
            <motion.div variants={item} style={itemStyle}>
              For
            </motion.div>
            <motion.div variants={item} style={itemStyle}>
              Everyone
            </motion.div>
            <motion.div variants={item} style={itemStyle}>
              Willing
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "backInOut" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          style={{ height: "auto", width: "400px" }}
        >
          <h1>
            Unlock your digital potential with a bespoke blockchain development
            company.
          </h1>
          <p>
            Dekrypt connects clients and their vision with an experienced and
            multi-talented blockchain &amp; application development team to
            create highly personalized solutions that stand out from the crowd.
          </p>
          <button>Get Started</button>
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            HELLLO
          </motion.div> */}
        </motion.section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
