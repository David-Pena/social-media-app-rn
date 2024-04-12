import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <FontAwesome
                onPress={() => navigation.navigate("Profile")}
                name="user"
                size={24}
                color="gray"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
