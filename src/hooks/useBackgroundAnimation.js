import { useAnimationSettings } from './useAnimationSettings';

export function useBackgroundAnimation(initialDuration) {
  const { enabled } = useAnimationSettings();
  
  return {
    style: {
      willChange: 'transform, opacity',
      transform: enabled ? undefined : 'none',
    },
    animate: enabled ? undefined : { transform: 'none' },
    transition: {
      duration: enabled ? initialDuration : 0,
      ease: 'linear',
      repeat: Infinity,
    },
  };
}