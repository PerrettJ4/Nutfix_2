/* eslint-disable react-native/no-unused-styles */
import PropTypes from 'prop-types';
import * as React from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable
} from 'react-native';
import { ImageBackground } from 'react-native-web';

import { colors, fonts, gStyle } from '../constants';

import squirrelfy from '../functions/squirrelfy';

import { getResponsiveFontSize } from '../constants/responsive';

const screenWidth = Dimensions.get('window').width;
const tileWidth = screenWidth > 600 ? screenWidth * 0.15 : screenWidth * 0.27; // example: smaller for mobile
const tileHeight = tileWidth * 1.44; // keep same aspect ratio

function ShowScroller({ dataset, type, handleTilePress }) {
  return (
    <FlatList
      contentContainerStyle={gStyle.pHHalf}
      data={dataset}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        let renderItem = <View style={styles[type]} />;
        const handlePress = () => handleTilePress(item);
        if (item.image && item.title) {
          renderItem = (
            <Pressable onPress={handlePress}>
              <ImageBackground
                style={styles[`${type}Image`]}
                source={item.image}
              >
                <Text style={styles.filmText}>{squirrelfy(item.title)}</Text>
              </ImageBackground>
            </Pressable>
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

ShowScroller.defaultProps = {
  dataset: [],
  type: 'rectangle',
  handleTilePress: () => {}
};

ShowScroller.propTypes = {
  // optional
  dataset: PropTypes.array,
  type: PropTypes.string,
  handleTilePress: PropTypes.func
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

export default ShowScroller;
