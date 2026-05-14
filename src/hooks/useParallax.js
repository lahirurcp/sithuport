import { useTransform } from 'framer-motion'

export function useParallax(scrollYProgress, inputRange, outputRange) {
  return useTransform(scrollYProgress, inputRange, outputRange)
}
