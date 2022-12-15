import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View } from "react-native";
import HomeScreen from "../Home";
import LoginScreen from "../Login";
import { storage } from "../utils/storage";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function AppDrawerContent(props){
  return (
     <DrawerContentScrollView {...props} contentContainerStyle={{flex:1}}>
       {/*all of the drawer items*/}
       <DrawerItemList {...props}  style={{borderWidth:1}}/>
       <View style={{flex:1}}>
         {/* here's where you put your logout drawer item*/}
         <DrawerItem 
           label="Odjavi se"
           style={{flex:1,justifyContent:'flex-end', marginBottom: 20}}
         />
       </View>
     </DrawerContentScrollView>
   );
 }

const HomeStackNavigator = ({ route }) => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props=><AppDrawerContent {...props} />} screenOptions={{ headerShadowVisible: false }} >
        <Drawer.Screen name="Tabler" component={HomeScreen} />
        <Drawer.Screen name="Profil" component={HomeScreen} />
      </Drawer.Navigator>
    )
  }

export default function Navigator({ loggedIn, setLoggedIn }) {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        {!loggedIn ? <Stack.Screen initialParams={{ loggedIn, setLoggedIn }} name="Login" component={LoginScreen}options={{ headerShown: false}} />  : 
        <Stack.Screen initialParams={{ loggedIn, setLoggedIn }} name="Pocetna" component={HomeStackNavigator} options={{ headerShown: false, headerShadowVisible: false}}/>}
        </Stack.Navigator>
    </NavigationContainer>
  );
}