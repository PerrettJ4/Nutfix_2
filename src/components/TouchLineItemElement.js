import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, gStyle } from '../constants';

function TouchLineItemElement({ element, onPress, text }) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.element}>{React.cloneElement(element)}</View>
    </TouchableOpacity>
  );
}

TouchLineItemElement.propTypes = {
  // required
  element: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  text: {
    color: colors.heading,
    ...fonts.regular,
    fontSize: 16
  },
  element: {
    justifyContent: 'center',
    marginRight: 4
  }
});

export default TouchLineItemElement;
