import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import colors from "../color";

const View = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: ${colors.bgColor};
`;

const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

const TextInput = styled.TextInput.attrs({
  placeholder: "Write your feelings...",
})`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
`;

const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.btnColor};
`;

const BtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Emotion = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-width: 2px;
  border-color: ${(props) => (props.selected ? "rgba(0,0,0,0.5)" : "white")};
`;

const EmotionText = styled.Text`
  font-size: 24px;
`;

const emotions = ["😀", "😂", "😍", "😡", "🤮", "🤧"];

const Write = () => {
  const [selectedEmotion, setEmotion] = useState(null);
  const [feelings, setFeelings] = useState("");

  const onEmotionPress = (face) => setEmotion(face);

  const onSubmit = () => {
    if (feelings === "" || selectedEmotion === null) {
      Alert.alert("Pleace complete form.");
    }
    console.log("submit");
  };

  return (
    <View>
      <Title>How do you feel today?</Title>
      <Emotions>
        {emotions.map((emotion, i) => (
          <Emotion
            key={i}
            onPress={() => onEmotionPress(emotion)}
            selected={selectedEmotion === emotion}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        value={feelings}
        onChangeText={setFeelings}
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;
