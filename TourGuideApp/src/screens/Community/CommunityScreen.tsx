import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styled } from '../../theme/styled';

const Container = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const UserCard = styled(TouchableOpacity)`
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const UserName = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

const CommunityScreen = () => {
  const [travelers, setTravelers] = useState([
    { id: '1', name: 'Viajer@1', destination: 'París' },
    { id: '2', name: 'Viajer@2', destination: 'París' }
  ]);

  // Podrías cargar esta info desde una API
  // useEffect(() => { fetchTravelers(); }, []);

  return (
    <Container>
      <Text style={{ fontSize: 20, marginBottom: 16, fontWeight: 'bold' }}>
        Otros viajeros en tu destino
      </Text>
      <FlatList
        data={travelers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard onPress={() => {}}>
            <UserName>{item.name}</UserName>
            <Text>Destino: {item.destination}</Text>
          </UserCard>
        )}
      />
    </Container>
  );
};

export default CommunityScreen;
