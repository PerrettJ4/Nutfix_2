import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text
} from 'react-native';
import squirrelfy from '../functions/squirrelfy';
import { colors, fonts } from '../constants';
import { getResponsiveFontSize } from '../constants/responsive';

const screenWidth = Dimensions.get('window').width;
const tileWidth = screenWidth > 600 ? screenWidth * 0.15 : screenWidth * 0.29; // example: smaller for mobile
const tileHeight = tileWidth * 1.44; // keep same aspect ratio

const FilmTile = ({ item, handlePress, type }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const shrink = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97, // shrink by 3%
      useNativeDriver: true
    }).start();
  };

  const expand = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };
  return (
    <Pressable onPress={handlePress} onPressIn={shrink} onPressOut={expand}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <ImageBackground style={styles[`${type}Image`]} source={item.image}>
          <Text style={styles.filmText}>{squirrelfy(item.title)}</Text>
        </ImageBackground>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: tileHeight,
    marginRight: 8,
    width: tileWidth
  },
  rectangleImage: {
    borderRadius: getResponsiveFontSize(4, 6, 8),
    alignItems: 'flex-start',
    cursor: 'pointer',
    display: 'flex',
    height: tileHeight,
    justifyContent: 'flex-end',
    marginRight: getResponsiveFontSize(10, 14, 18),
    resizeMode: 'cover',
    width: tileWidth,
    overflow: 'hidden'
  },
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  },
  roundImage: {
    height: 96,
    marginRight: 8,
    resizeMode: 'contain',
    width: 96
  },
  filmText: {
    color: colors.heading,
    ...fonts.medium,
    fontSize: getResponsiveFontSize(12, 13, 18),
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    // eslint-disable-next-line react-native/sort-styles
    backgroundColor: `${colors.bgGrey}aa`, // cleaner template literal
    paddingHorizontal: 4, // optional: adds breathing room inside bg
    paddingVertical: 2, // optional: improves readability
    borderRadius: 4, // softens the background box edges,
    userSelect: 'none'
  }
});

export default FilmTile;
