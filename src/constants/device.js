import { Dimensions, Platform } from 'react-native';

// android
const android = Platform.OS === 'android';

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

// iOS check
const isIOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document);

// is iPad
const { isPad } = Platform;

console.log({ isIOS, isPad, navigator });

export default {
  android,
  aspectRatio,
  height,
  iOS: isIOS,
  iPhoneNotch: isIOS,
  isPad,
  web,
  width
};
