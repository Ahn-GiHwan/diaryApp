import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import Navigator from "./navigator";

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
