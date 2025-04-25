import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, device, fonts, gStyle, images } from '../constants';

// components
import PromotionPlay from './PromotionPlay';

import { LinearGradient } from 'expo-linear-gradient';

// icons
import SvgCheck from '../icons/Svg.Check';
import SvgPlus from '../icons/Svg.Plus';
import SvgPlay from '../icons/Svg.Play';
import { getResponsiveFontSize } from '../constants/responsive';

function PromotionBanner({ handleTilePress }) {
  // local state
  const [added, setAdded] = React.useState(false);
  const icon = added ? <SvgCheck /> : <SvgPlus />;

  const handlePressInfo = () => {
    handleTilePress({
      id: 'tt0063442',
      title: 'Planet of the Apes',
      image:
        'https://s.abcnews.com/images/Lifestyle/CT_squirrels_on_horse_01_as_160527_4x3_992.jpg',
      description:
        'In 2029, an Air Force astronaut crash-lands on a mysterious planet where evolved, talking apes dominate a race of primitive humans.'
    });
  };

  return (
    <LinearGradient colors={['yellow', '#191919']} style={styles.container}>
      <ImageBackground
        source={images.squirrelsOnHorse}
        style={styles.imageBackground}
      >
        <View style={styles.containerContent}>
          {/* <Image source={images.squirrelsOnHorse} style={styles.image} /> */}
          <Text style={styles.titleText}>Planut of the Squirrels</Text>
          <Text style={styles.subTitleText}>Action • Adventure • Fantasy</Text>

          <View style={gStyle.flexRowSpace}>
            <PromotionPlay onPress={handlePressInfo} />
            <PromotionPlay
              onPress={() => setAdded(!added)}
              icon={icon}
              text="My Stash"
              backgroundColor={colors.castGrey}
            />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const topBannerHeight = device.iOS
  ? getResponsiveFontSize(99 + 44, 103 + 44, 115 + 44)
  : getResponsiveFontSize(99, 103, 115);

const styles = StyleSheet.create({
  container: {
    height: 520 + topBannerHeight,
    width: '100vw'
  },
  imageBackground: {
    marginTop: getResponsiveFontSize(10, 14, 20) + topBannerHeight,
    height: 480,
    width: '94vw',
    left: '3vw',
    borderRadius: getResponsiveFontSize(10, 12, 15),
    overflow: 'hidden'
  },
  containerContent: {
    bottom: 24,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  titleText: {
    alignSelf: 'center',
    color: colors.heading,
    ...fonts.bold,
    fontSize: getResponsiveFontSize(36, 46, 60),
    fontWeight: 900,
    height: getResponsiveFontSize(90, 130, 190),
    marginBottom: 24,
    // marginTop: 16,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    width: getResponsiveFontSize(291, 340, 500)
  },
  subTitleText: {
    alignSelf: 'center',
    color: colors.heading,
    ...fonts.medium,
    fontSize: getResponsiveFontSize(12, 14, 18),
    // height: getResponsiveFontSize(90, 130, 190),
    marginBottom: 24,
    // marginTop: 16,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    width: getResponsiveFontSize(291, 340, 500)
  }
});

export default React.memo(PromotionBanner);
