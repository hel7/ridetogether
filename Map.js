import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Clipboard from '@react-native-clipboard/clipboard';

const MapScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [manualMarkers, setManualMarkers] = useState([]);

  const handleSearch = async () => {
    try {
      const apiKey = 'AIzaSyAQB8GQ8I2EWwLsJHMbyb4So0BBkaYeOoc';
      const encodedSearchText = encodeURIComponent(searchText);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedSearchText}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.status === 'OK') {
        const results = data.results;
        const formattedResults = results.map((result) => {
          const { place_id, formatted_address, geometry } = result;
          return {
            id: place_id,
            name: formatted_address,
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
          };
        });
        setSearchResults(formattedResults);

        if (formattedResults.length > 0) {
          const firstResult = formattedResults[0];
          handleMarkerPress(firstResult);
        }
      } else {
        console.log('Geocoding API request failed:', data.error_message);
      }
    } catch (error) {
      console.log('Geocoding API request failed:', error);
    }

  };

  const handleMarkerPress = (location) => {
    setSelectedLocation(location);
    setSearchText(location.name);
    setMapRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    if (selectedLocation) {
      setMapRegion({
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [selectedLocation]);

  const handleSelect = () => {
    if (selectedLocation) {
      navigation.navigate('Untitled5', { selectedLocation });
    }
  };
  const handleMapPress = async (event) => {
    const { coordinate } = event.nativeEvent;
    const manualMarker = {
      id: 1, // Use a constant ID for the marker
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    };
    setManualMarkers([manualMarker]); // Replace the manual markers array with the new marker

    try {
      const apiKey = 'AIzaSyAQB8GQ8I2EWwLsJHMbyb4So0BBkaYeOoc';
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude},${coordinate.longitude}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.status === 'OK') {
        const { formatted_address } = data.results[0];
        setSearchText(formatted_address);
        manualMarker.name = formatted_address;
      } else {
        console.log('Reverse Geocoding API request failed:', data.error_message);
      }
    } catch (error) {
      console.log('Reverse Geocoding API request failed:', error);
    }
  };
  
  const handleCopyToClipboard = () => {
    Clipboard.setString(searchText);
  };

  return (
    <View style={{ flex: 1 }}>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        onChangeText={setSearchText}
        value={searchText}
        placeholder="Введіть місце для пошуку"
      />
      <Button title="Пошук" onPress={handleSearch} /> 
      {/* <Button title="Копіювати" onPress={handleCopyToClipboard} /> */}


      <MapView style={{ flex: 1 }} region={mapRegion} onPress={handleMapPress}>

        {searchResults.map((location) => (
         <Marker
         key={location.id}
         coordinate={{
           latitude: location.latitude,
           longitude: location.longitude,
         }}
         onPress={() => handleMarkerPress(location)}
       />
     ))}
        {selectedLocation && (
          <Marker
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
          }}
          pinColor="blue"
        />
      )}

{manualMarkers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          pinColor="green"
        />
      ))}
      </MapView>
    </View>
  );
};

export default MapScreen;