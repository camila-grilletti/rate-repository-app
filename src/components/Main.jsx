import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Text, View } from "react-native";
import { Route, Routes } from "react-router-native";
import LogIn from "../pages/LogIn.jsx";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<LogIn />} />
      </Routes>
    </View>
  );
}

export default Main;
