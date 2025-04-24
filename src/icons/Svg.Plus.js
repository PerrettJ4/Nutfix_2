import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';
import { StyleSheet, View } from 'react-native';

function SvgPlus({ active, fill, size }) {
  const fillColor = fill ?? (active ? colors.white : colors.inactiveGrey);

  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24" // Updated viewBox
      fill="none"
    >
      <Path
        d="M19 11h-6V5c0-.6-.4-1-1-1s-1 .4-1 1v6H5c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1v-6h6c.6 0 1-.4 1-1s-.4-1-1-1z"
        fill={fillColor}
      />
    </Svg>
  );
}

SvgPlus.defaultProps = {
  active: true,
  fill: null,
  size: 26
};

SvgPlus.propTypes = {
  active: PropTypes.bool,
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgPlus);
