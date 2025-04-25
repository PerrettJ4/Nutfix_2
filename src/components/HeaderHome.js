import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, device, fonts, gStyle, images } from '../constants';

// components
import TouchText from './TouchText';
import ChipScroll from './ChipScroll';
import SvgCast from '../icons/Svg.Cast';
import SvgSearch from '../icons/Svg.Search';

import globalStyles from '../constants/globalStyles';
import { getResponsiveFontSize } from '../constants/responsive';

function HeaderHome({ all, show }) {
  const navigation = useNavigation();

  const [isActive, setActive] = React.useState(false);

  // local state
  const top = React.useRef(new Animated.Value(0)).current;

  const topBannerHeight = device.iOS
    ? getResponsiveFontSize(99 + 44, 103 + 44, 115 + 44)
    : getResponsiveFontSize(99, 103, 115);

  React.useEffect(() => {
    if (show) {
      Animated.timing(top, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(top, {
        duration: 200,
        toValue: -topBannerHeight,
        useNativeDriver: false
      }).start();
    }
  }, [show]);

  const handleFilterPress = (item) => {
    setActive(item);
  };
  const resetFilters = () => {
    setActive(false);
  };

  return (
    <Animated.View style={[styles.container, { top }]}>
      <View style={styles.logoMenu}>
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={images.netflixTransparent} style={styles.logo} />
        </TouchableOpacity>

        <View style={[globalStyles.flexRowAlignCenter, { gap: '3vw' }]}>
          <SvgCast />
          <SvgSearch fill={colors.white60} size={28} />
          <Image source={images.robot} style={styles.avatar} />
        </View>
      </View>

      <View style={styles.containerMenu}>
        {all && (
          <ChipScroll
            itemArray={['TV Shows', 'Movies', 'My Stash']}
            isActive={isActive}
            handleFilterPress={handleFilterPress}
            resetFilters={resetFilters}
          />
        )}
      </View>
    </Animated.View>
  );
}

HeaderHome.defaultProps = {
  all: true
};

HeaderHome.propTypes = {
  // required
  show: PropTypes.bool.isRequired,

  // optional
  all: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.black50,
    flexDirection: 'column',
    paddingBottom: 10,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 54 : 10,
    position: 'absolute',
    width: '100vw',
    zIndex: 10,
    gap: 10
  },
  logo: {
    height: 35,
    marginRight: 48,
    width: 40,
    resizeMode: 'contain'
  },
  logoMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    height: 35,
    justifyContent: 'space-between',
    width: '91vw'
  },
  containerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    height: 35,
    overflow: 'visible'
  },
  text: {
    color: colors.white,
    ...fonts.medium,
    marginRight: 24
  },
  avatar: {
    height: 28,
    width: 28,
    resizeMode: 'contain'
  }
});

export default HeaderHome;
