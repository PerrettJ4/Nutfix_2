import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';

function FilmPoster({ film }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Image source={{ uri: film.image }} style={styles.posterThumbnail} />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.modalScrollContent}>
              <Image source={{ uri: film.image }} style={styles.poster} />
              <Text style={styles.title}>{film.title}</Text>
              <Text style={styles.description}>{film.description}</Text>

              <Text style={styles.details}>
                <Text style={styles.bold}>Rating: </Text>
                {film.rating}%
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Actors: </Text>
                {film.actors}
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Year: </Text>
                {film.year}
              </Text>
              <Text style={styles.details}>
                <Text style={styles.bold}>Genre: </Text>
                {film.genre}
              </Text>

              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  posterThumbnail: {
    width: 150,
    height: 225,
    resizeMode: 'cover',
    borderRadius: 10
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxHeight: '90%'
  },
  modalScrollContent: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify'
  },
  details: {
    fontSize: 16,
    marginVertical: 5
  },
  bold: {
    fontWeight: 'bold'
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  closeText: {
    color: 'white',
    fontSize: 16
  }
});

export default FilmPoster;
