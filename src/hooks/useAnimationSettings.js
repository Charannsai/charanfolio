import { useReducedMotion } from './useReducedMotion';

export function useAnimationSettings() {
  const prefersReducedMotion = useReducedMotion();

  return {
    enabled: !prefersReducedMotion,
    duration: prefersReducedMotion ? 0 : undefined,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.3,
    }
  };
}