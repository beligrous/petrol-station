import { useState } from "react";
import {
  Text,
  TextInput,
  ImageBackground,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import * as Login from "../../utils";

const NameScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isSurNameActive, setIsSurNameActive] = useState(false);

  nextHandler = () => {
    navigation.navigate("Дата");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsKeyboard(false);
        setIsNameActive(false);
        setIsSurNameActive(false);
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bgimg.png")}
          resizeMode="cover"
          style={styles.bgImg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Login.GoBackButton goToScreen={"Телефон"} />
            <Login.Logo />
            <Text style={styles.text}>Ваше ім'я</Text>
            <TextInput
              value={name}
              onChangeText={(value) => setName(value)}
              placeholder="ім'я"
              onFocus={() => {
                setIsKeyboard(true);
                setIsNameActive(true);
              }}
              onBlur={() => setIsNameActive(false)}
              style={{
                ...styles.input,
                borderColor: isNameActive ? "#00B488" : "#FCFFFE",
              }}
            />
            <Text style={{ ...styles.text, marginTop: 24 }}>Ваше прізвище</Text>
            <TextInput
              value={surname}
              onChangeText={(value) => setSurname(value)}
              placeholder="прізвище"
              onFocus={() => {
                setIsKeyboard(true);
                setIsSurNameActive(true);
              }}
              onBlur={() => setIsSurNameActive(false)}
              style={{
                ...styles.input,
                borderColor: isSurNameActive ? "#00B488" : "#FCFFFE",
                marginBottom: isKeyboard ? 10 : 71,
              }}
            />
            {name && surname && (
              <Login.LoginButton text={"Далі"} handler={nextHandler} />
            )}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bgImg: {
    flex: 1,
    paddingHorizontal: 30,
  },
  text: {
    fontFamily: "MusticaProSemiBold",
    marginTop: 38,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 15,
  },
  input: {
    fontFamily: "MusticaProSemiBold",
    fontSize: 14,
    height: 50,
    backgroundColor: "#FCFFFE",
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginTop: 12,
    paddingLeft: 45,
  },
});
