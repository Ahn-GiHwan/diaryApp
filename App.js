import React, { useState } from "react";
import Realm from "realm";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator";
import { DBContext } from "./context";

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

const App = () => {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);

  const startLoading = async () => {
    const connection = await Realm.open({
      path: "DiaryDB",
      schema: [FeelingSchema],
    });
    setRealm(connection);
  };

  const onFinish = () => setReady(true);

  if (!ready)
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  return (
    <DBContext.Provider value={realm}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DBContext.Provider>
  );
};

export default App;
