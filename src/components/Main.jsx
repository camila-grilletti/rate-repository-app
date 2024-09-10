import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import React from "react";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
        <AppBar />
        <RepositoryList />
    </View>
  )
}

export default Main;