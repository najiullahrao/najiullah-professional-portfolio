'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData?: object;
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
  const [loadedAnimationData, setLoadedAnimationData] = useState<object | null>(null);

  useEffect(() => {
    if (animationPath && !animationData) {
      // Load animation from path
      fetch(animationPath)
        .then(response => response.json())
        .then(data => {
          setLoadedAnimationData(data);
        })
        .catch(error => {
          console.error('Error loading Lottie animation:', error);
        });
    }
  }, [animationPath, animationData]);

  // Use either provided animationData or dynamically loaded data
  const currentAnimationData = animationData || loadedAnimationData;

  if (currentAnimationData) {
    return (
      <Lottie
        animationData={currentAnimationData}
        loop={loop}
        autoplay={autoplay}
        className={className}
        style={style}
      />
    );
  }

  // Show loading state while fetching animation data
  if (animationPath && !loadedAnimationData) {
    return (
      <div className={className} style={style}>
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return null;
}

