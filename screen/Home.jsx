import React, { useEffect, useState } from "react";
import colors from "../color";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useDB } from "../context";
import { FlatList, LayoutAnimation, TouchableOpacity } from "react-native";

const View = styled.View`
  flex: 1;
  padding: 0 30px;
  padding-top: 100px;
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
  elevation: 5;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

const BtnText = styled.Text`
  color: white;
`;

const Recored = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${colors.cardColor};
`;

const Emotion = styled.Text`
  font-size: 24px;
  margin-right: 10px;
`;
const Message = styled.Text`
  font-size: 18px;
`;

const Separator = styled.View`
  height: 10px;
`;

const Home = ({ navigation: { navigate } }) => {
  const realm = useDB();
  const [feelings, setFeelings] = useState([]);

  useEffect(() => {
    const feelings = realm.objects("Feeling");
    setFeelings(feelings);
    feelings.addListener((feelings, changes) => {
      LayoutAnimation.spring();
      setFeelings(feelings.sorted("_id", true));
    });
    return () => {
      feelings.removeAllListeners();
    };
  }, []);

  const onPress = (id) => {
    realm.write(() => {
      const feeling = realm.objectForPrimaryKey("Feeling", id);
      realm.delete(feeling);
    });
  };

  return (
    <View>
      <Title>My journal</Title>
      <FlatList
        data={feelings}
        keyExtractor={(feeling) => String(feeling._id)}
        contentContainerStyle={{ paddingVertical: 10 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item._id)}>
            <Recored>
              <Emotion>{item.emotion}</Emotion>
              <Message>{item.message}</Message>
            </Recored>
          </TouchableOpacity>
        )}
      />
      <Btn onPress={() => navigate("Write")}>
        <BtnText>
          <Ionicons name="add" color="white" size={36} />
        </BtnText>
      </Btn>
    </View>
  );
};

export default Home;
