import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { colors, fonts, gStyle } from '../constants';

// icons
import SvgPlay from '../icons/Svg.Play';

function PromotionPlay({
  icon,
  onPress,
  text,
  backgroundColor = colors.white
}) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <View style={styles.icon}>
        {React.cloneElement(icon, {
          fill: backgroundColor !== colors.white ? colors.white : colors.black
        })}
      </View>
      <Text
        style={[
          styles.text,
          {
            color:
              backgroundColor !== colors.white ? colors.white : colors.black
          }
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

PromotionPlay.defaultProps = {
  icon: <SvgPlay />,
  text: 'Play'
};

PromotionPlay.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,

  // optional
  icon: PropTypes.element,
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    paddingVertical: 8
  },
  text: {
    color: colors.black,
    ...fonts.medium,
    fontSize: 18
  },
  icon: {
    justifyContent: 'center'
  }
});

export default PromotionPlay;
