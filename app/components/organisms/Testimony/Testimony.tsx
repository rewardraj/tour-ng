import Container from "@app/components/layouts/Container/Container";
import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  AlignItems,
  FlexDirection,
  FlexGap,
  JustifyContent,
} from "@app/shared/Layout/Layout";
import { useEffect, useState } from "react";
import styles from "./Testimony.module.scss";

const Testimony = () => {
  const reviews = [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://picsum.photos/200/300",
      review:
        "John has been a transformative force in our company. His innovative approach and relentless work ethic have propelled our business to new heights. We couldn't have asked for a better CEO. John has been a transformative force in our company. His innovative approach and relentless work ethic have propelled our business to new heights. We couldn't have asked for a better CEO.",
    },
    {
      name: "Jane Doe",
      position: "CTO",
      image: "https://picsum.photos/200/400",
      review:
        "Jane has revolutionized our technology department with her forward-thinking strategies and unparalleled technical expertise. Her leadership has been instrumental in our rapid growth and success. Jane has revolutionized our technology department with her forward-thinking strategies and unparalleled technical expertise. Her leadership has been instrumental in our rapid growth and success.",
    },
    {
      name: "James Doe",
      position: "COO",
      image: "https://picsum.photos/200/500",
      review:
        "James's operational excellence and keen eye for detail have optimized our processes and driven our productivity to unprecedented levels. His dedication and hard work are truly commendable. James's operational excellence and keen eye for detail have optimized our processes and driven our productivity to unprecedented levels. His dedication and hard work are truly commendable.",
    },
  ];

  const [review, setReview] = useState(0);
  const allReviews = [...reviews];

  const handleNext = () => {
    setReview((review + 1) % allReviews.length);
  };

  const handlePrevious = () => {
    setReview((review - 1 + allReviews.length) % allReviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setReview((review + 1) % allReviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [review]);
  return (
    <Container>
      <Flex
        align={AlignItems.CENTER}
        justify={JustifyContent.SPACE_BETWEEN}
        margin="20rem 0"
      >
        {reviews.map((currentReview, index) => {
          if (index !== review) return null;
          return (
            <Flex
              align={AlignItems.START}
              justify={JustifyContent.SPACE_BETWEEN}
              gap={FlexGap.LARGE}
            >
              <Flex align={AlignItems.START} justify={JustifyContent.START}>
                <p className={styles.ReviewText}>{currentReview.review}</p>
              </Flex>
              <Flex
                direction={FlexDirection.COLUMN}
                justify={JustifyContent.END}
                align={AlignItems.END}
              >
                <Flex gap={FlexGap.LARGE}>
                  <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    className={styles.TestimonyImg}
                  />
                  <Flex
                    direction={FlexDirection.COLUMN}
                    align={AlignItems.END}
                    justify={JustifyContent.END}
                    width={250}
                    gap={FlexGap.MEDIUM}
                  >
                    <span className={styles.reviewName}>
                      {currentReview.name}
                    </span>
                    <p className={styles.reviewPosition}>
                      {currentReview.position}
                    </p>
                  </Flex>
                </Flex>
                <Flex gap={FlexGap.LARGE} margin="7rem 0">
                  <button
                    onClick={handlePrevious}
                    disabled={review === 0}
                    aria-label="Show previous reviews"
                    role="button"
                    className={styles.button}
                  >
                    <i className="dripicons dripicons-arrow-thin-left" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={review === allReviews.length - 1}
                    aria-label="Show next reviews"
                    role="button"
                    className={styles.button}
                  >
                    <i className="dripicons dripicons-arrow-thin-right" />
                  </button>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Testimony;
