import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Accordion from "../components/Accordion";
import AccordionTwo from "../components/AccordionTwo";
import AccordionItemTwo from "../components/AccordionItemTwo";
import AccordionThree from "../components/AccordionThree";

import useTranslation from "next-translate/useTranslation";

import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import lottie from "lottie-web";
// import json1 from "../data/lottie-1.json";
// import json2 from "../data/lottie-2.json";
// import json3 from "../data/lottie-3.json";
// import json4 from "../data/lottie-4.json";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { t } = useTranslation("common");

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

  // Draw a path
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const lineStyles = {
    strokeWidth: "5px",
    strokeLinecap: "round",
    fill: "transparent",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} id="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="#section">
          <a>To section!</a>
        </Link>

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

        <h2>Using lines in framer motion...</h2>
        <button onClick={() => setIsOpen((prevState) => !prevState)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && (
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
          >
            <motion.line
              x1="150"
              y1="20"
              x2="50"
              y2="20"
              stroke="#00cc88"
              variants={draw}
              custom={0}
              style={lineStyles}
            />
            <motion.line
              x1="50"
              y1="20"
              x2="50"
              y2="100"
              stroke="#00cc88"
              variants={draw}
              custom={1.5}
              style={lineStyles}
            />
            <motion.line
              x1="50"
              y1="100"
              x2="0"
              y2="100"
              stroke="#00cc88"
              variants={draw}
              custom={2.5}
              style={lineStyles}
            />
          </motion.svg>
        )}

        <h2>Accordion</h2>

        <h3>Accordion One</h3>
        <Accordion />

        <h3>Accordion Two</h3>
        <AccordionTwo
          defaultIndex="1"
          onItemClick={(item) => console.log(item)}
        >
          <AccordionItemTwo label="Blockchain consulting" index="1">
            Do you need help with starting your own token? Are you looking for
            information on how to build, market and manage your crypto project?
            Get in touch with us and we can provide you with answers coming from
            our own rich experience.
          </AccordionItemTwo>
          <AccordionItemTwo label="Full-stack development" index="2">
            We have a multi-disciplinary team that has experience with building
            Node-based backend systems with databases and frontend developers
            that can bridge any type of functionality into your project using
            the latest technologies.
          </AccordionItemTwo>
        </AccordionTwo>

        <h3>Accordion Three</h3>
        <AccordionThree />

        <h2>Carousel</h2>
        {/* https://github.com/vercel/next.js/discussions/17443 */}
        {mounted && (
          <div
            style={{
              backgroundColor: "lightblue",
              width: "100%",
              height: "400px",
            }}
          >
            <Swiper
              // install Swiper modules
              // modules={[Navigation, Pagination, Scrollbar, A11y]}
              // spaceBetween={50}
              // slidesPerView={3}
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView="1"
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div>
                  <h3>Title 1</h3>
                  <p>Subtitle</p>
                  <span>Stars...</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Unde ad minima magni sed aspernatur nobis, totam mollitia
                    tempore optio modi explicabo hic! Similique saepe non
                    consectetur ad voluptates maiores est.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h3>Title 2</h3>
                  <p>Subtitle</p>
                  <span>Stars...</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Unde ad minima magni sed aspernatur nobis, totam mollitia
                    tempore optio modi explicabo hic! Similique saepe non
                    consectetur ad voluptates maiores est.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h3>Title 3</h3>
                  <p>Subtitle</p>
                  <span>Stars...</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Unde ad minima magni sed aspernatur nobis, totam mollitia
                    tempore optio modi explicabo hic! Similique saepe non
                    consectetur ad voluptates maiores est.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h3>Title 4</h3>
                  <p>Subtitle</p>
                  <span>Stars...</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Unde ad minima magni sed aspernatur nobis, totam mollitia
                    tempore optio modi explicabo hic! Similique saepe non
                    consectetur ad voluptates maiores est.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ position: "relative" }}>
                  {/* <p
                  style={{
                    position: "absolute",
                    top: "-50px",
                    right: "45%",
                    zIndex: 10,
                  }}
                >
                  IMAGE
                </p> */}
                  <div>
                    <h3>Title 5</h3>
                    <p>Subtitle</p>
                    <span>Stars...</span>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Unde ad minima magni sed aspernatur nobis, totam mollitia
                      tempore optio modi explicabo hic! Similique saepe non
                      consectetur ad voluptates maiores est.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        {/* Multilanguage usage */}
        {/* https://medium.com/flycode/step-by-step-how-to-internationalize-your-nextjs-app-with-next-translate-3c8b13b87fc4 */}
        <div>
          <h2>Multilanguage</h2>
          <a href="https://github.com/vinissimus/next-translate">
            https://github.com/vinissimus/next-translate
          </a>
          <div>
            <h1>{t("title")}!</h1>
            <p className={styles.description}>{t("description")}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "150px",
              }}
            >
              <Link href="/" locale="en">
                <a>Anglais</a>
              </Link>
              <Link href="/" locale="fr">
                <a>Fran??ais</a>
              </Link>
            </div>
          </div>
        </div>

        {/* https://chriswrightdesign.com/experiments/accordion-transitional/ */}

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
              viewport={{ once: true }}
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
          id="section"
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

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "backInOut" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <form
            name="contact"
            action="/success"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              {/* <input type="text" name="firstname" id="firstname" /> */}
              <label htmlFor="yourname">Your Name:</label> <br />
              <input type="text" name="name" id="yourname" />
            </p>
            <p>
              <label htmlFor="youremail">Your Email:</label> <br />
              <input type="email" name="email" id="youremail" />
            </p>
            <p>
              <label htmlFor="yourmessage">Message:</label> <br />
              <textarea name="message" id="yourmessage"></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
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
        <Link href="/">
          <a>Back to top</a>
        </Link>
      </footer>
    </div>
  );
}

// A guide on how to create and use forms with Netlify and Next.js
// https://css-tricks.com/how-to-create-a-contact-form-with-next-js-and-netlify/
