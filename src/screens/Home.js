import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import DriverList from '../features/DriverList';
import Emergencies from './Emergencies';
import { useNavigate } from "react-router-dom";

export default function Home() {
    return (
        <View style={styles.container}>
            <DriverList />
            <Pressable style={styles.button}
            onPress={() =>
              navigate("/Emergencies")
            }
            >
                <Text style={styles.buttonText}>Press Me</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the view takes up the full screen height
  },
  button: {
    backgroundColor: '#841584',
    alignItems: 'center',
    width: Dimensions.get('window').width, // Full width of screen
    padding: 15,
    borderRadius: 5,
    position: 'absolute',
    bottom: 5, 
  },
  buttonText: {  // Corrected casing
    color: '#fff',
    fontSize: 16,
  },
});