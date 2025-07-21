"use client"
import { motion, useAnimation, Variants, DOMMotionComponents } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: keyof DOMMotionComponents;
  animationType?: "letters" | "words";
  staggerSpeed?: number;
  viewportMargin?: string;
  children?: ReactNode;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: i },
  }),
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const AnimatedText = ({
  text,
  className,
  as = "h2",
  animationType = "letters",
  staggerSpeed = 0.05,
  viewportMargin = "-20%",
  children,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: viewportMargin,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const MotionComponent = motion[as as keyof typeof motion] as React.ElementType;

  const textElements =
    animationType === "letters"
      ? text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))
      : text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ));

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={defaultVariants}
      initial="hidden"
      animate={controls}
      custom={staggerSpeed}
    >
      {textElements}
      {children}
    </MotionComponent>
  );
};
