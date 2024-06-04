import React, { useState } from "react";
import styles from "./Memories.module.scss";
import Grid from "@app/components/layouts/Grid/Grid";
import Container from "@app/components/layouts/Container/Container";
import { ArrowButton } from "@app/components/atoms/IconButton/ArrowButton";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { FlexDirection, FlexGap } from "@app/shared/Layout/Layout";

interface BlogProps {
  date: string;
  title: string;
  subtitle: string;
  imgSrc: string;
}

const blogPosts = [
  {
    date: "Nov 14 2021",
    title: "Travel Trends for 2023 You Must Know",
    subtitle:
      "2023 showed that travel plans change. Here are trends we expect to see.",
    imgSrc: "https://picsum.photos/900/300",
  },
  {
    date: "Nov 18 2021",
    title: "Jeep Adventure: A New Way to Explore",
    subtitle: "Jeep adventures are the best for exploring the world uniquely.",
    imgSrc: "https://picsum.photos/800/400",
  },
  {
    date: "Nov 20 2021",
    title: "Experience the World from Native Views",
    subtitle: "Seeing the world through natives' eyes is truly unique.",
    imgSrc: "https://picsum.photos/900/200",
  },
  {
    date: "Nov 22 2021",
    title: "Top Travel Destinations to Visit in 2023",
    subtitle:
      "Here are the best places to visit in 2023. Get ready to explore.",
    imgSrc: "https://picsum.photos/800/700",
  },
  {
    date: "Nov 24 2021",
    title: "Mountains: The Ultimate Travel Experience",
    subtitle: "Mountains offer unmatched travel experiences. Explore them.",
    imgSrc: "https://picsum.photos/900/500",
  },
  {
    date: "Nov 26 2021",
    title: "Taste the Best Foods to Try in 2023",
    subtitle: "Discover the best foods to try in 2023. Explore global tastes.",
    imgSrc: "https://picsum.photos/800/700",
  },
];

export const BlogCard: React.FC<BlogProps> = ({
  title,
  imgSrc,
  date,
  subtitle,
}) => (
  <article className={styles.Blog} aria-label={`Project: ${title}`}>
    <div className={styles.BlogImage}>
      <img
        src={imgSrc}
        alt={`Image of ${title}`}
        className={styles.imgResponsive}
      />
    </div>
    <div className={styles.BlogInfo}>
      <span className={styles.BlogDate}>{date}</span>
      <h3 className={styles.BlogTitle}>{title}</h3>
      <p className={styles.BlogSubtitle} title={subtitle}>
        {subtitle}
      </p>
    </div>
  </article>
);

const Memories = () => {
  const [currentPost, setCurrentPost] = useState(0);
  const allPosts = [...blogPosts];

  const showNext = () => {
    setCurrentPost((currentPost + 1) % allPosts.length);
  };

  const showPrevious = () => {
    setCurrentPost((currentPost - 1 + allPosts.length) % allPosts.length);
  };
  return (
    <Container>
      <Flex
        direction={FlexDirection.COLUMN}
        gap={FlexGap.MEDIUM}
        margin="3rem 0"
      >
        <span className={styles.subtitle}>Our Blog</span>
        <span className={styles.title}>Our Travel Memories</span>
      </Flex>
      <Grid desktopColumns={2} tabletColumns={2}>
        {allPosts.slice(currentPost, currentPost + 2).map((project, index) => (
          <BlogCard key={index} {...project} />
        ))}
      </Grid>
      <Flex gap={FlexGap.LARGE} margin="4rem 0">
        <ArrowButton
          direction="left"
          onClick={showPrevious}
          disabled={currentPost === 0}
          ariaLabel="Show previous places"
        />
        <ArrowButton
          direction="right"
          onClick={showNext}
          disabled={currentPost === allPosts.length - 3}
          ariaLabel="Show next projects"
        />
      </Flex>
    </Container>
  );
};

export default Memories;
