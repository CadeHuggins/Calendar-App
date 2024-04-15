import React, { useState, useEffect } from "react";
import { View, StyleSheet, Appearance, TouchableOpacity, Dimensions, Text } from "react-native";
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import { Card } from "react-native-paper";

interface Item {
  name: string;
  height: number;
  day: string;
}

interface Items {
  [key: string]: Item[];
}

const Schedule: React.FC = () => {
    const [items, setItems] = useState<Items>({
      '2024-04-10': [{name: 'test 1', height: 150, day: '2024-04-10'}],
      '2024-04-11': [
        {name: 'test 2', height: 150, day: '2024-04-11'},
        {name: 'test 3', height: 150, day: '2024-04-11'}],
      '2024-04-13': [{name: 'test 4', height: 150, day: '2024-04-13'}]
    });

      const renderItem = (items: any) => {
        return (
        <TouchableOpacity style={{marginRight: 10, marginTop: 25}}>
          <Card>
            <Card.Content>
              <View style={styles.event}>
                <Text>{items.name}</Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        )
      }

    return <View style={styles.agenda}>
        <Agenda
        items={items}
        renderItem={renderItem}
        theme={{
          selectedDayTextColor: '#ffffff', 
          selectedDayBackgroundColor: '#7b2f2d',
          //todayTextColor: '#7b2f2d',
          dotColor: '#7b2f2d',
        }}
        />
    </View>
};
export default Schedule;


const styles = StyleSheet.create ({
  calendar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  agenda: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  event: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

