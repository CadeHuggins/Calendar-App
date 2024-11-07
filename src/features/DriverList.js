import React from 'react';
import { Alert, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Card = ({ title, description, onPress }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.7}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      );
  };

const DriverList = () => {
    return (
        <View>
            <Card
            title="DD's Name"
            description="123-456-7890"
            onPress={() => 
                Alert.alert(
                    "Do you want to call", // Custom title for the Alert
                    "123-456-7890", // Message in the Alert
                    [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Yes", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false } // This makes the alert non-dismissible outside of the buttons
                )
            }
            />
        </View>
    );
  };

  const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width, 
        alignSelf: 'center', 
        padding: 20,
        backgroundColor: '#fff', 
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10, // Space between title and description
    },
    description: {
        fontSize: 16,
    },
});
  
  export default DriverList;