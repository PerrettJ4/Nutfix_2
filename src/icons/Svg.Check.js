import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgCheck({ active, size }) {
  const fillColor = active ? colors.white : colors.inactiveGrey;

  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.7 5.3c-.4-.4-1-.4-1.4 0L9 15.6l-4.3-4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5 5c.2.2.4.3.7.3s.5-.1.7-.3l11-11c.4-.4.4-1 0-1.4z"
        fill={fillColor}
      />
    </Svg>
  );
}

SvgCheck.defaultProps = {
  active: true,
  size: 24
};

SvgCheck.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.number
};

export default React.memo(SvgCheck);
