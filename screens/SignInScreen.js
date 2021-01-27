import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import Colors from "../constants/Colors";

const SignIn = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Please Sign In</Text>
      <TextInput placeholder="your email" />
      <TextInput placeholder="password" />
      <Button
        title="SingIn"
        onPress={() => {
          // props.navigation.navigate("Contack");
        }}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "SignIn",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "white",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
