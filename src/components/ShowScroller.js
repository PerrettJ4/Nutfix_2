/* eslint-disable react-native/no-unused-styles */
import PropTypes from 'prop-types';
import * as React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';

import { colors, fonts, gStyle } from '../constants';

import { getResponsiveFontSize } from '../constants/responsive';
import FilmTile from './FilmTile';

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
            <FilmTile item={item} handlePress={handlePress} type={type} />
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
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  }
});

export default ShowScroller;
