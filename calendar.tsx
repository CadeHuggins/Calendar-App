import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, Text } from "react-native";
import { Agenda } from 'react-native-calendars';
import { Card } from "react-native-paper";
import Calendar from "../screens/calendar";

interface Item {
  name: string;
  height: number;
  day: string;
}

interface Items {
  [key: string]: Item[];
}

const Schedule: React.FC = () => {
    const [items, setItems] = useState<Items>({});

    const loadItemsForMonth = (day: any) => {
        const newItems: Items = { ...items };

        for (let i = -15; i <= 15; i++) {
            const time = new Date(day.timestamp + i * 24 * 60 * 60 * 1000);
            const strTime = time.toISOString().split('T')[0];

            if (!newItems[strTime]) {
                newItems[strTime] = [];
            }
        }

        if (!newItems['2024-07-29']) {
            newItems['2024-10-16'] = [{ name: 'test 1', height: 150, day: '2024-10-16' },
                                      { name: 'test 2', height: 150, day: '2024-10-16' }];
            newItems['2024-10-18'] = [{ name: 'test 3', height: 150, day: '2024-10-16' }];
        }

        setItems(newItems);
    };

    const renderItem = (item: any) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 25 }}>
                <Card>
                    <Card.Content>
                        <View style={styles.event}>
                            <Text>{item.name}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.agenda}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItemsForMonth}
                renderItem={renderItem}
                theme={{
                    selectedDayTextColor: '#ffffff',
                    selectedDayBackgroundColor: '#7b2f2d',
                    dotColor: '#7b2f2d',
                }}
            />
        </View>
    );
};

export default Schedule;

const styles = StyleSheet.create({
  agenda: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  event: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});