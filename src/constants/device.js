import { Dimensions, Platform } from 'react-native';

// android
const android = Platform.OS === 'android';

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const web = Platform.OS === 'web';
const windowInfo = Dimensions.get('window');
const { height: dHeight, width: dWidth } = windowInfo;
const aspectRatio = dHeight / dWidth;

let height = dHeight;
let width = dWidth;

// Override with actual viewport size on web
if (Platform.OS === 'web' && typeof window !== 'undefined') {
  height = window.innerHeight;
  width = window.innerWidth;
}

// Known notch devices (portrait orientation dimensions)
const notchDimensions = [
  { width: 375, height: 812 }, // iPhone X, XS, 11 Pro
  { width: 390, height: 844 }, // iPhone 12, 12 Pro, 13, 13 Pro, 14
  { width: 393, height: 852 }, // iPhone 14 Pro
  { width: 414, height: 896 }, // iPhone XR, XS Max, 11, 11 Pro Max
  { width: 428, height: 926 }, // iPhone 12 Pro Max, 13 Pro Max, 14 Plus
  { width: 430, height: 932 } // iPhone 14 Pro Max
];

// Helper: match one of the known sizes
const matchesNotchSize = notchDimensions.some(
  (dim) =>
    (width === dim.width && height === dim.height) ||
    (height === dim.width && width === dim.height) // handle landscape mode
);

// iOS check
const isIOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document);

const iPhoneNotch = isIOS;

// is iPad
const { isPad } = Platform;

export default {
  android,
  aspectRatio,
  height,
  iOS,
  iPhoneNotch,
  isPad,
  web,
  width
};
