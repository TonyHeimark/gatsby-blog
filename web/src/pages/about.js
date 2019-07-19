import React from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import { responsiveTitle1 } from "../components/typography.module.css";
import styles from "../components/about.module.css";
import Fade from "react-reveal/Fade";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <h1 className={responsiveTitle1}>About</h1>
      <div className={styles.textContainer}>
        <Fade left>
          <div>
            <h2>Me</h2>
            <p>
              Hi, my name is Tony, I'm 25 years old and I study front-end development in Oslo. I
              also work part-time as a freelance front-end developer.
            </p>
            <p>
              One year ago I quit my full-time job as an Audi mechanic to start my studies. I liked
              being a mechanic to some extent, but I always felt that it was a profession that I
              just kind of fell into. With the need for web expertise exploding in recent years I
              decided to make the leap.
            </p>
            <p>
              I knew nothing about web development when I started my studies, but I was determined
              to learn as much as possible in the shortest amount of time. Because of the amazing
              online community of developers, I was able to learn so much and perform really well in
              school.
            </p>
          </div>
        </Fade>
        <div className={styles.imagebg} />
        <Fade right>
          <div>
            <h2>The Blog</h2>
            <p>
              This blog is my way of giving back to the community by sharing what I've learned
              during the past year and what I'm currently learning. Hopefully, I can help someone
              learn something new or overcome a problem whether it's front-end related or not.
            </p>
            <p>
              By writing blog posts about what I've learned I also get the added benefit of learning
              the material better myself. As Einstein said; “If you can't explain it to a
              six-year-old, you don't understand it yourself.”
            </p>
            <p>
              I'm still new to front-end development and I frequently use other blogs to learn new
              things and I probably will for a very long time. The world of web technology is always
              evolving and it would be naive to think that one doesn’t need to learn anymore.
            </p>
          </div>
        </Fade>
      </div>
    </Container>
  </Layout>
);

export default AboutPage;
