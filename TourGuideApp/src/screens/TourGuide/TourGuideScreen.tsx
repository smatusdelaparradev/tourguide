import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '../../theme/styled';

const Container = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const InfoText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const TourGuideScreen = () => {
  // Aquí podríamos mostrar información del destino actual basada en geolocalización
  // Por ejemplo: Horarios de museos cercanos, eventos, etc.
  
  return (
    <Container>
      <InfoText>Información útil sobre tu ubicación actual:</InfoText>
      <InfoText>- Museo X: Abierto de 9am a 5pm</InfoText>
      <InfoText>- Evento Y: Concierto a las 20:00 en la Plaza Principal</InfoText>
    </Container>
  );
};

export default TourGuideScreen;
