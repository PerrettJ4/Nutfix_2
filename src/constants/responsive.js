// utils/responsive.js
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024
};

export const isMobile = screenWidth < breakpoints.tablet;
export const isTablet =
  screenWidth >= breakpoints.tablet && screenWidth < breakpoints.desktop;
export const isDesktop = screenWidth >= breakpoints.desktop;

export const getResponsiveFontSize = (small = 12, medium = 14, large = 16) => {
  if (isMobile) return small;
  if (isTablet) return medium;
  return large;
};
