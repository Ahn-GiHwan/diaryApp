import React from "react";
import colors from "../color";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const View = styled.View`
  flex: 1;
  padding: 0px 50px;
  padding-top: 100px;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: ${colors.bgColor};
`;

const Title = styled.Text`
  margin-bottom: 100px;
  color: ${colors.textColor};
  font-size: 38px;
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
`;

const BtnText = styled.Text`
  color: white;
`;

const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Title>My journal</Title>
      <Btn onPress={() => navigate("Write")}>
        <BtnText>
          <Ionicons name="add" color="white" size={36} />
        </BtnText>
      </Btn>
    </View>
  );
};

export default Home;
