"use client";

import React, { useState, useEffect } from "react";

interface MorphingTextProps {
  words: string[];
  className?: string;
  duration?: number;
  transitionDuration?: number;
}

const MorphingText: React.FC<MorphingTextProps> = ({
  words,
  className = "",
  duration = 500,
  transitionDuration = 300,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    const totalWords = words.length;

    const interval = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % totalWords);
        setFadeState("fade-in");
      }, transitionDuration);
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [words, duration, transitionDuration]);

  return (
    <span className={`${className} ${fadeState}`}>
      {words[currentWordIndex]}
    </span>
  );
};

export default MorphingText;
