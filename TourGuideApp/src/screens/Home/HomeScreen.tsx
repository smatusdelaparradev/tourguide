import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const userName = 'Juan';
  const pastTrips = [
    { id: '1', destination: 'Paris', date: '2024-01-10' },
    { id: '2', destination: 'New York', date: '2023-12-15' },
    { id: '3', destination: 'Tokyo', date: '2023-11-05' },
  ];

  const renderTrip = ({ item }) => (
    <TouchableOpacity style={styles.tripCard} onPress={() => navigation.navigate('TripDetails', { tripId: item.id })}>
      <Text style={styles.tripDestination}>{item.destination}</Text>
      <Text style={styles.tripDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bienvenido, {userName}!</Text>
      <Text style={styles.sectionTitle}>Tus viajes anteriores:</Text>
      <FlatList
        data={pastTrips}
        renderItem={renderTrip}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.tripList}
        ListEmptyComponent={<Text style={styles.emptyText}>No tienes viajes registrados.</Text>}
      />
      <TouchableOpacity
        style={styles.newItineraryButton}
        onPress={() => navigation.navigate('NewItinerary')}
      >
        <Text style={styles.newItineraryText}>Planificar un nuevo itinerario</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  tripList: {
    marginBottom: 20,
  },
  tripCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tripDestination: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripDate: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 16,
    marginTop: 20,
  },
  newItineraryButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  newItineraryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
