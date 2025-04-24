/* eslint-disable react-native/no-unused-styles */
import PropTypes from 'prop-types';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { colors, fonts, gStyle } from '../constants';

import { nuttify } from '../functions/nutify';
import { squirrelfy } from '../functions/squirrelfy';

function ShowScroller({ dataset, type }) {
  return (
    <FlatList
      contentContainerStyle={gStyle.pHHalf}
      data={dataset}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        let renderItem = <View style={styles[type]} />;

        if (item.image && item.title) {
          renderItem = (
            <ImageBackground style={styles[`${type}Image`]} source={item.image}>
              <Text style={styles.filmText}>
                {nuttify(squirrelfy(item.title))}
              </Text>
            </ImageBackground>
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
  type: 'rectangle'
};

ShowScroller.propTypes = {
  // optional
  dataset: PropTypes.array,
  type: PropTypes.string
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: 131,
    marginRight: 8,
    width: 91
  },
  rectangleImage: {
    alignItems: 'flex-start',
    display: 'flex',
    height: 131,
    justifyContent: 'flex-end',
    marginRight: 8,
    resizeMode: 'cover',
    width: 91
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
    fontFamily: fonts.medium,
    fontSize: 12,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    backgroundColor: colors.bgGrey + 'aa'
  }
});

export default ShowScroller;
