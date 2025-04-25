import React, { useEffect, useRef, useState } from 'react';

import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import SvgPlay from '../icons/Svg.Plus';
import { colors, device, fonts } from '../constants';
import { getResponsiveFontSize } from '../constants/responsive';

const ChipScroll = ({
  itemArray,
  isActive,
  handleFilterPress,
  resetFilters
}) => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0
      // viewOffset: normalize(7),
    });
  }, [index]);

  const handlePress = (isOpaque, isSportActive, item, index) => {
    if (!isOpaque && !isSportActive) {
      handleFilterPress(item, index);
      setIndex(index);
    }
  };

  const handleReset = () => {
    setIndex(0);
    resetFilters();
  };

  const translucentBackground = colors.black20;

  return (
    <View style={styles.chipRow}>
      {isActive && (
        <Pressable
          style={[styles.closeButton, { borderColor: colors.white60 }]}
          onPress={handleReset}
        >
          <SvgPlay />
        </Pressable>
      )}
      <FlatList
        style={[{ flexGrow: 0 }, device.iOS && { overflow: 'visible' }]}
        ref={ref}
        initialScrollIndex={0}
        contentContainerStyle={{ paddingRight: '100vw' }}
        data={itemArray}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const isSportActive = isActive === item;
          const isOpaque = isActive && !isSportActive;
          const handleChipPress = () =>
            handlePress(isOpaque, isSportActive, item, index);
          return (
            <Pressable
              onPress={handleChipPress}
              style={[
                styles.pressable4,
                {
                  backgroundColor:
                    item === 'Players'
                      ? colors.brandPrimary
                      : isSportActive
                      ? translucentBackground
                      : null,
                  opacity: isOpaque ? 0 : 1,
                  borderColor: colors.white60
                }
              ]}
            >
              <Text style={[styles.chipText, { color: colors.strongBlack }]}>
                {item}
              </Text>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  chipText: {
    color: colors.white,
    ...fonts.medium,
    fontSize: getResponsiveFontSize(14, 16, 18)
  },
  closeButton: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3vw',
    height: getResponsiveFontSize(30, 36, 50),
    width: getResponsiveFontSize(30, 36, 50),
    backgroundColor: 'transparent'
  },
  chipRow: {
    // marginLeft: SCREEN_WIDTH * 0.02,
    marginRight: '3vw',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  pressable4: {
    borderRadius: getResponsiveFontSize(20, 30, 40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: getResponsiveFontSize(30, 36, 50),
    paddingVertical: getResponsiveFontSize(16, 18, 20),
    paddingHorizontal: '3vw',
    borderWidth: 1,
    borderColor: colors.black,
    zIndex: 999,
    minWidth: getResponsiveFontSize(40, 50, 60),
    marginRight: '3vw'
  }
});

export default ChipScroll;
