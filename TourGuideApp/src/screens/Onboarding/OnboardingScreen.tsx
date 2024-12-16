import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styled } from '../../theme/styled';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const Container = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const OnboardingScreen = () => {
  const navigation = useNavigation();
  
  const [preferredDestinations, setPreferredDestinations] = useState('');
  const [interests, setInterests] = useState('');

  const handleNext = () => {
    // Guardar las preferencias en contexto o async storage
    navigation.navigate('Main');
  };

  return (
    <Container>
      <ScrollView>
        <Title>¡Bienvenido! Cuéntanos tus preferencias</Title>
        
        <Input 
          label="Destinos preferidos" 
          placeholder="Ej: Playa, Montaña, Ciudades Europeas..." 
          value={preferredDestinations} 
          onChangeText={setPreferredDestinations}
        />

        <Input 
          label="Intereses" 
          placeholder="Ej: Museos, Deportes extremos, Gastronomía..." 
          value={interests} 
          onChangeText={setInterests}
        />

        <Button onPress={handleNext} title="Continuar" />
      </ScrollView>
    </Container>
  );
};

export default OnboardingScreen;
