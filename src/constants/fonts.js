import { Platform } from 'react-native';

const bold = Platform.select({
  android: 'sans-serif-condensed',
  ios: 'HelveticaNeue-Bold',
  web: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontWeight: '700'
  }
});

const light = Platform.select({
  android: 'sans-serif-light',
  ios: 'HelveticaNeue-Light',
  web: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontWeight: '300'
  }
});

const medium = Platform.select({
  android: 'sans-serif-medium',
  ios: 'HelveticaNeue-Medium',
  web: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontWeight: '500'
  }
});

const regular = Platform.select({
  android: 'sans-serif',
  ios: 'HelveticaNeue',
  web: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontWeight: '400'
  }
});

export default {
  bold,
  light,
  medium,
  regular
};
