import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useTheme } from 'styled-components/native';

const GOOGLE_API_KEY = 'AIzaSyAVEwT8mG3sBtL8elUfLKbm4yTHq8_weZc';

const SearchPlacesInput = ({ onSelectDestination }) => {
  const theme = useTheme();

  return (
    <GooglePlacesAutocomplete
      placeholder="Buscar destinos"
      onPress={(data, details = null) => {
        // 'data' contiene la información del lugar seleccionado
        // 'details' contiene detalles adicionales sobre el lugar (si está habilitado)
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: 'es', // Idioma de los resultados
      }}
      fetchDetails={true} // Obtiene detalles del lugar seleccionado
      styles={{
        textInput: {
          ...styles.textInput,
          borderColor: theme.colors.secondary,
        }
      }}
      debounce={300} // Retraso en ms para evitar múltiples llamadas
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16
  },
});

export default SearchPlacesInput;
