import React, { useState } from 'react';
import { View, Text, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { styled } from '../../theme/styled';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useAIItinerary from '../../hooks/useAIItinerary';
import SearchPlacesInput from '../../components/SearchPlacesInput/SearchPlacesInput';

const Container = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: flex-start;`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const ItineraryScreen = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const { loading, getItinerary, itinerary } = useAIItinerary();

  const handleGetItinerary = () => {
    getItinerary(destination, dates);
  };

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='padding'>
      <Container>
        <Title>Planifica tu viaje</Title>
        <SearchPlacesInput onSelectDestination={handleDestinationSelect}/>

        <Input 
          label="Fechassss" 
          placeholder="Ej: 10/02/2024 - 17/02/2024" 
          value={dates} 
          onChangeText={setDates}
        />
        
        {loading ? (
          <ActivityIndicator size="large" color="#FFD100" />
        ) : (
          <Button onPress={handleGetItinerary} title="Generar Itinerario" />
        )}

        {itinerary && (
          <View style={{ marginTop: 20 }}>
            <Text style={{fontWeight: 'bold'}}>Itinerario Sugerido:</Text>
            <Text>{itinerary}</Text>
          </View>
        )}
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ItineraryScreen;