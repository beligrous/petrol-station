import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import * as Login from "../../utils";

const DateScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [isDateActive, setIsDateActive] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display: "spinner",
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  nextHandler = () => {
    navigation.navigate("Мій кабінет");
  };

  const toggleCheck = () => {
    if (isCheck) {
      return !isCheck;
    }
    return true;
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsDateActive(false)}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bgimg.png")}
          resizeMode="cover"
          style={styles.bgImg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Login.GoBackButton goToScreen={"ПІБ"} />
            <Login.Logo />
            <Text style={styles.text}>Дата народження</Text>
            <TouchableOpacity
              onPress={() => {
                setIsDateActive(true);
                showDatepicker();
              }}
              style={{
                ...styles.input,
                borderColor: isDateActive ? "#00B488" : "#FCFFFE",
              }}
            >
              <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 110,
              }}
            >
              <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
                Я погоджуюсь з правилами програми
              </Text>
              <CheckBox
                value={isCheck}
                onValueChange={() => setIsCheck(toggleCheck)}
                style={styles.checkbox}
              />
            </View>
            {isCheck && (
              <Login.LoginButton text={"Далі"} handler={nextHandler} />
            )}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DateScreen;

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
  checkbox: {
    alignSelf: "flex-end",
  },
});
