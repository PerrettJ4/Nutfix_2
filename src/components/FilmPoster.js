import React from 'react';
import {
  Image,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PropTypes from 'prop-types';
import { colors } from '../constants';
import squirrelfy from '../functions/squirrelfy';
import PromotionPlay from './PromotionPlay';

import { getResponsiveFontSize } from '../constants/responsive';
import SvgArrowLeft from '../icons/Svg.ArrowLeft';
import SvgInfo from '../icons/Svg.Info';

FilmPoster.propTypes = {
  film: PropTypes.shape({
    primaryImage: PropTypes.string,
    primaryTitle: PropTypes.string,
    description: PropTypes.string,
    averageRating: PropTypes.number,
    numVotes: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        fullName: PropTypes.string
      })
    ),
    directors: PropTypes.arrayOf(
      PropTypes.shape({
        fullName: PropTypes.string
      })
    ),
    startYear: PropTypes.number,
    runtimeMinutes: PropTypes.number,
    productionCompanies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    ),
    contentRating: PropTypes.string,
    trailer: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  closeFilmModal: PropTypes.func
};

function FilmPoster({ film, closeFilmModal }) {
  const openIMDB = () => Linking.openURL(film.url);
  const openTrailer = () => film.trailer && Linking.openURL(film.trailer);

  const castList = film.cast
    ?.slice(0, 5)
    .map((member) => member.fullName)
    .join(', ');
  const genres = film.genres?.join(', ');
  const production = film.productionCompanies?.map((p) => p.name).join(', ');

  return (
    <View style={styles.container}>
      <Modal
        visible={film}
        animationType="slide"
        transparent
        onRequestClose={closeFilmModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView
              contentContainerStyle={styles.modalScrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  position: 'absolute',
                  top: getResponsiveFontSize(10, 20, 30),
                  zIndex: 999,
                  top: 0,
                  left: 0
                }}
              >
                <PromotionPlay
                  onPress={closeFilmModal}
                  text=""
                  icon={<SvgArrowLeft />}
                  backgroundColor={colors.brandPrimary}
                />
              </View>

              <Image
                source={{ uri: film.primaryImage }}
                style={styles.poster}
              />
              <Text style={styles.title}>{squirrelfy(film.primaryTitle)}</Text>
              <Text style={styles.description}>
                {squirrelfy(film.description)}
              </Text>

              <Text style={styles.details}>
                <Text style={styles.bold}>Rating:</Text> {film.averageRating}{' '}
                <Text>
                  {Array.from({ length: Math.floor(film.averageRating) })
                    .map(() => '🌰')
                    .join('')}
                </Text>
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Votes:</Text>{' '}
                {film.numVotes.toLocaleString()}
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Genre:</Text> {squirrelfy(genres)}
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Cast:</Text> {squirrelfy(castList)}
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Director:</Text>{' '}
                {squirrelfy(film.directors?.map((d) => d.fullName).join(', '))}
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Release Year:</Text> {film.startYear}
              </Text>
              {film.runtimeMinutes && (
                <Text style={styles.details}>
                  <Text style={styles.bold}>Runtime:</Text>{' '}
                  {film.runtimeMinutes} min
                </Text>
              )}
              <Text style={styles.details}>
                <Text style={styles.bold}>Production:</Text>{' '}
                {squirrelfy(production)}
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Content Rating:</Text>{' '}
                {squirrelfy(film.contentRating)}
              </Text>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonsContainer2}>
                  {film.trailer && (
                    <PromotionPlay onPress={openTrailer} text="Watch Trailer" />
                  )}
                  <PromotionPlay
                    onPress={openIMDB}
                    text="View on IMDb"
                    icon={<SvgInfo />}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  // eslint-disable-next-line react-native/no-unused-styles
  posterThumbnail: {
    borderRadius: 10,
    height: 225,
    resizeMode: 'cover',
    width: 150
  },
  modalOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: colors.bgGrey,
    borderRadius: 10,
    maxHeight: '90%',
    padding: 15,
    width: '90%'
  },
  modalScrollContent: {
    paddingBottom: 20
  },
  poster: {
    borderRadius: 10,
    height: 300,
    resizeMode: 'contain',
    width: '100%'
  },
  title: {
    color: colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  description: {
    color: colors.white,
    fontSize: 16,
    marginVertical: 10
  },
  details: {
    color: colors.white,
    fontSize: 16,
    marginVertical: 6
  },
  bold: {
    fontWeight: 'bold'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginVertical: getResponsiveFontSize(10, 20, 30)
  },
  buttonsContainer2: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6
  }
});

export default FilmPoster;
