import React, { useState } from "react";
import Carousel from "react-simply-carousel";

const animalFacts = [
  { fact: "A group of flamingos is called a 'flamboyance'." },
  { fact: "The heart of a shrimp is located in its head." },
  { fact: "A snail can sleep for three years." },
  { fact: "Elephants are the only animal that can't jump." },
  { fact: "A rhinoceros's horn is made of hair." }
];

function AnimalFactsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div style={styles.container}>
      <Carousel
        containerProps={{
          style: {
            ...styles.carouselContainer,
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: styles.activeSlide
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: styles.navButton
        }}
        backwardBtnProps={{
          children: "<",
          style: styles.navButton
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: styles.dot
          },
          activeItemBtnProps: {
            style: styles.activeDot
          }
        }}
        itemsToShow={1}
        speed={400}
        centerMode
      >
        {animalFacts.map((item, index) => (
          <div
            style={{
              ...styles.slide,
              transform: `rotateY(${index * 36}deg)`
            }}
            key={index}
          >
            {item.fact}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px"
  },
  carouselContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  activeSlide: {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease"
  },
  navButton: {
    width: 40,
    height: 40,
    minWidth: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: "50%",
    backgroundColor: "#ddd",
    border: "none",
    margin: "0 4px",
    cursor: "pointer"
  },
  activeDot: {
    height: 12,
    width: 12,
    borderRadius: "50%",
    backgroundColor: "#007BFF",
    border: "none"
  },
  slide: {
    background: "#f0f0f0",
    width: 300,
    height: 300,
    border: "10px solid white",
    textAlign: "center",
    lineHeight: "280px",
    boxSizing: "border-box",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.5s ease"
  }
};

export default AnimalFactsCarousel;
