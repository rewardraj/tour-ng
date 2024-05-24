import styles from "./Carousel.module.scss";

interface CarouselProps {
  images: { src: string }[];
  currentIndex: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, currentIndex }) => {
  return (
    <div className={styles.Carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          aria-current={currentIndex === index}
          className={`${styles.image} ${
            index === currentIndex ? styles.visible : ""
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;
