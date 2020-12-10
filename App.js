import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const mapboxAccessToken =
  'pk.eyJ1IjoiZGF2aWR3aW5hbGRhIiwiYSI6ImNraWg1dHhsZDEzMTgyd3F3YTBnN2J4NWoifQ.UxGrdErOGNdkBwUmIKOZbg';
MapboxGL.setAccessToken(mapboxAccessToken);

const App = () => {
  const startingPoint = [3.33624, 6.57901];
  const destinationPoint = [3.3750014, 6.5367877];
  const startDestinationPoints = [startingPoint, destinationPoint];

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={11} centerCoordinate={startingPoint} />
        {startDestinationPoints.map((point, index) => (
          <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: '#00cccc',
                borderRadius: 50,
                borderColor: '#fff',
                borderWidth: 3,
              }}
            />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
