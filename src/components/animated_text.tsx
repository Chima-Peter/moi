import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

type AnimatedTextProps = {
  text: string;
  onComplete?: () => void; // Callback to signal when the animation is complete
};

const AnimatedText = ({ text, onComplete }: AnimatedTextProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2, // Adjust the duration for typing speed
      ease: "linear",
      onUpdate: (latest) => {
        if (Math.round(latest) === text.length && !animationCompleted) {
          setAnimationCompleted(true);
          if (onComplete) onComplete(); // Trigger the callback when animation is complete
        }
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <p className={animationCompleted ? "animation-completed font-sub" : "font-sub"}>- <motion.span>{displayText}</motion.span>
    </p>
  );
}

export default AnimatedText