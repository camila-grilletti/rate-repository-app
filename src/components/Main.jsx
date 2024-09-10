import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import React from "react";

const Main = () => {
  return (
    <View style={{ marginTop: 90, flexGrow: 1 }}>
        <Text>Rate Repository Application</Text>
        <RepositoryList />
    </View>
  )
}

export default Main;