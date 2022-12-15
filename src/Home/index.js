import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';

//import EventCalendar component
import EventCalendar from 'react-native-events-calendar';

//get the size of device
let { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [events, setEvents] = useState([
    {
      start: '2022-12-17 10:00:00',
      end: '2022-12-17 10:45:00',
      title: '9-2 razred',
      summary: 'Biologija - OŠ Travnik',
    },
    {
        start: '2022-12-17 11:00:00',
        end: '2022-12-17 11:45:00',
        title: '9-1 razred',
        summary: 'Biologija - OŠ Travnik',
      },
      {
        start: '2022-12-17 12:00:00',
        end: '2022-12-17 12:45:00',
        title: '9-3 razred',
        summary: 'Biologija - OŠ Travnik',
      },
      {
          start: '2022-12-17 13:00:00',
          end: '2022-12-17 13:45:00',
          title: '9-5 razred',
          summary: 'Biologija - OŠ Travnik',
        },
        {
            start: '2022-12-17 14:00:00',
            end: '2022-12-17 14:45:00',
            title: '9-6 razred',
            summary: 'Biologija - OŠ Travnik',
          },
  ]);

  const eventClicked = (event) => {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  };

  return (
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          events={events}
          width={width}
          size={60}
          initDate={'2022-12-17'}
  
          scrollToFirst
        />
      </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
