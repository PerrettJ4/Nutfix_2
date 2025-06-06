import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, gStyle } from '../constants';

// icons
import SvgArrowRight from '../icons/Svg.ArrowRight';

function TouchLineItemApp({ iconSize, onPress, showArrow, tagline, text }) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.containerText}>
        <Text style={styles.text}>{text}</Text>
        {tagline && <Text style={styles.tagline}>{tagline}</Text>}
      </View>
      {showArrow && (
        <View style={styles.arrow}>
          <SvgArrowRight size={iconSize} />
        </View>
      )}
    </TouchableOpacity>
  );
}

TouchLineItemApp.defaultProps = {
  iconSize: 20,
  showArrow: true,
  tagline: null
};

TouchLineItemApp.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  iconSize: PropTypes.number,
  showArrow: PropTypes.bool,
  tagline: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  tagline: {
    color: colors.moreSectionText,
    ...fonts.regular,
    fontSize: 12,
    marginTop: 4
  },
  text: {
    color: colors.heading,
    ...fonts.regular,
    fontSize: 16
  },
  arrow: {
    justifyContent: 'center'
  }
});

export default TouchLineItemApp;
