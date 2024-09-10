import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Text, View } from "react-native";
import { Route, Routes } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<Text>wip</Text>} />
      </Routes>
    </View>
  );
}

export default Main;
