import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Text,
  TextInput,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import OtpInput from "react-otp-input";
import PhoneInput from "react-native-phone-input";
import * as Login from "../../utils";
import { authSignIn } from "../../redux/auth/operations";

const PhoneScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isCodeItem, setIsCodeItem] = useState(false);
  const otpInput = useRef("null");
  const dispatch = useDispatch();

  const nextHandler = () => {
    setIsCodeItem(true);
    // dispatch(authSignIn(phone));
  };

  const codeNextHandler = () => {
    navigation.navigate("ПІБ");
    setIsCodeItem(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsKeyboard(false);
        setIsInputActive(false);
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
            <Login.Logo />
            <Text style={{ ...styles.text, marginTop: 38 }}>
              Ваш номер телефону
            </Text>
            <PhoneInput
              ref={(ref) => setPhone(ref)}
              initialCountry={"ua"}
              style={{
                ...styles.input,
                borderColor: isInputActive ? "#00B488" : "#FCFFFE",
                marginBottom: isCodeItem ? 24 : 154,
              }}
            />
            {isCodeItem ? (
              <OtpInput
                value={otp}
                onChange={(value) => setOtp(value)}
                numInputs={4}
                renderSeparator={<Text>-</Text>}
                renderInput={(props) => <TextInput {...props} />}
              />
            ) : (
              // <Login.Code handler={codeNextHandler} />
              phone && <Login.LoginButton text={"Далі"} handler={nextHandler} />
            )}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneScreen;

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
    borderRadius: 15,
    padding: 16,
    marginTop: 12,
  },
});
