import { StyleSheet, Text, View, Appearance, StatusBar, Platform } from 'react-native';
import React from 'react';
import BottomTabs from '../features/Bottomtabs';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
          <BottomTabs />
      </View>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns child to the bottom
    marginBottom: 20, // Optional: adds some margin at the bottom
  },
  bottomItem: {
    // Styles for your bottom item
    alignItems: 'center', // Center the item horizontally
  },
});
