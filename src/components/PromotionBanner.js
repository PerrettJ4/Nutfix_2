import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, gStyle, images } from '../constants';

// components
import PromotionPlay from './PromotionPlay';
import TouchTextIcon from './TouchTextIcon';

// icons
import SvgCheck from '../icons/Svg.Check';
import SvgInfo from '../icons/Svg.Info';
import SvgPlus from '../icons/Svg.Plus';

function PromotionBanner() {
  // local state
  const [added, setAdded] = React.useState(false);
  const icon = added ? <SvgCheck /> : <SvgPlus />;

  return (
    <ImageBackground
      source={images.squirrelsOnHorse}
      style={styles.imageBackground}
    >
      <View style={styles.containerContent}>
        {/* <Image source={images.squirrelsOnHorse} style={styles.image} /> */}
        <Text style={styles.titleText}>Planut of the Squirrels</Text>

        <View style={gStyle.flexRowSpace}>
          <TouchTextIcon
            icon={icon}
            onPress={() => setAdded(!added)}
            text="My Stash"
          />

          <PromotionPlay onPress={() => null} />

          <TouchTextIcon icon={<SvgInfo />} onPress={() => null} text="Info" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 480,
    width: '100vw'
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
    fontFamily: fonts.bold,
    fontSize: 36,
    fontWeight: 900,
    height: 90,
    marginBottom: 24,
    // marginTop: 16,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    width: 291
  }
});

export default React.memo(PromotionBanner);
