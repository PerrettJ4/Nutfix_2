import { useScrollToTop } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';
import useTopFilms from '../hooks/useFetchTopFilms';
import mockData from '../mockdata/data';
import useFilmById from '../hooks/useFetchFilmById';
import FilmPoster from '../components/FilmPoster';

function Home() {
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // local state
  const [showHeader, setShowHeader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);
  const [id, setId] = React.useState(null);

  const {
    filmData,
    loading: filmDataLoading,
    error: filmDataError,
    closeFilmModal
  } = useFilmById(id);

  const { films: topFilms, loading, error } = useTopFilms(200);

  const onScroll = (event) => {
    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < offset;

    if (show !== showHeader || offset <= 0) {
      // account for negative value with "bounce" offset
      if (offset <= 0) show = true;

      setShowHeader(show);
    }

    setOffset(currentOffset);
  };

  const handleTilePress = (film) => {
    console.log('press', film);
    setId(film);
  };

  return (
    <View style={gStyle.container}>
      {filmData && (
        <FilmPoster film={filmData} closeFilmModal={closeFilmModal} />
      )}
      <HeaderHome show={showHeader} />

      <ScrollView
        ref={ref}
        bounces
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <PromotionBanner handleTilePress={handleTilePress} />
        {/* <Text style={gStyle.heading}>Previews</Text>
        <ShowScroller dataset="previews" type="round" /> */}
        <Text style={gStyle.scrollHeading}>My Stash</Text>
        <ShowScroller
          dataset={Object.values(mockData.myList)}
          handleTilePress={handleTilePress}
        />
        <Text style={gStyle.scrollHeading}>Popular on Nutflix</Text>
        <ShowScroller dataset={topFilms} handleTilePress={handleTilePress} />
        <Text style={gStyle.scrollHeading}>Films we are nutty about</Text>

        <ShowScroller
          handleTilePress={handleTilePress}
          dataset={Object.values(mockData.nuttyAbout)}
        />
        <Text style={gStyle.scrollHeading}>Watch It Again</Text>
        <ShowScroller
          handleTilePress={handleTilePress}
          dataset={Object.values(mockData.watchItAgain)}
        />
        <Text style={gStyle.scrollHeading}>NUTFLIX ORIGINALS</Text>
        <ShowScroller
          handleTilePress={handleTilePress}
          dataset={Object.values(mockData.topSeries)}
        />
        <Text style={gStyle.scrollHeading}>Docusquirrelies</Text>
        <ShowScroller
          handleTilePress={handleTilePress}
          dataset={Object.values(mockData.docusquirrelies)}
        />
        <View style={gStyle.spacer3} />
      </ScrollView>
    </View>
  );
}

export default Home;
