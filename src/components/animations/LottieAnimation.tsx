'use client';

import { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieAnimationProps {
  animationData?: any;
  animationPath?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function LottieAnimation({
  animationData,
  animationPath,
  loop = true,
  autoplay = true,
  className = '',
  style = {}
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (animationPath && !animationData) {
      // Load animation from path
      fetch(animationPath)
        .then(response => response.json())
        .then(data => {
          if (lottieRef.current) {
            lottieRef.current.loadAnimation(data);
          }
        })
        .catch(error => {
          console.error('Error loading Lottie animation:', error);
        });
    }
  }, [animationPath, animationData]);

  if (animationData) {
    return (
      <Lottie
        ref={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        className={className}
        style={style}
      />
    );
  }

  if (animationPath) {
    return (
      <div className={className} style={style}>
        <Lottie
          ref={lottieRef}
          loop={loop}
          autoplay={autoplay}
          className="w-full h-full"
        />
      </div>
    );
  }

  return null;
}

