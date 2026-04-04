"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const heroImages = [
  "/hero.png",
  "/hero-2.png",
  "/hero-3.png",
  "/hero-4.png",
  "/hero-5.png",
];

const slides = [...heroImages, heroImages[0]];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  useEffect(() => {
    if (index === heroImages.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimate(true);
          });
        });
      }, 1000);
    }
  }, [index]);

  return (
    <>
      <div
        className={`absolute inset-0 flex ${animate ? "transition-transform duration-1000 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="min-w-full h-full bg-cover bg-center bg-no-repeat shrink-0"
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/30 z-1" />
    </>
  );
}
