import { useState, useRef } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as Login from "./";

const CodeInput = ({ handler }) => {
  const [value1, setValue1] = useState("");
  const [active1, setActive1] = useState(false);
  const item1Ref = useRef();
  const [value2, setValue2] = useState("");
  const [active2, setActive2] = useState(false);
  const item2Ref = useRef();
  const [value3, setValue3] = useState("");
  const [active3, setActive3] = useState(false);
  const item3Ref = useRef();
  const [value4, setValue4] = useState("");
  const [active4, setActive4] = useState(false);
  const item4Ref = useRef();

  return (
    <View id={"otpInput"}>
      <Text style={styles.text}>Введіть код з SMS</Text>
      <View style={styles.code}>
        <TextInput
          ref={item1Ref}
          value={value1}
          maxLength={1}
          keyboardType="numeric"
          onChange={(value) => {
            setValue1(value);
            item2Ref.current.focus();
            console.log(item2Ref);
          }}
          onFocus={() => setActive1(true)}
          onBlur={() => setActive1(false)}
          style={{
            ...styles.input,
            borderColor: value1 || active1 ? "#00B488" : "#FCFFFE",
          }}
        />
        <TextInput
          ref={item2Ref}
          value={value2}
          maxLength={1}
          keyboardType="numeric"
          onChange={(value) => {
            setValue2(value);
            item3Ref.current.focus();
            console.log(item3Ref);
          }}
          onFocus={() => setActive2(true)}
          onBlur={() => setActive2(false)}
          style={{
            ...styles.input,
            borderColor: value2 || active2 ? "#00B488" : "#FCFFFE",
          }}
        />
        <TextInput
          ref={item3Ref}
          value={value3}
          maxLength={1}
          keyboardType="numeric"
          onChange={(value) => {
            setValue3(value);
            item4Ref.current.focus();
          }}
          onFocus={() => setActive3(true)}
          onBlur={() => setActive3(false)}
          style={{
            ...styles.input,
            borderColor: value3 || active3 ? "#00B488" : "#FCFFFE",
          }}
        />
        <TextInput
          ref={item4Ref}
          value={value4}
          maxLength={1}
          keyboardType="numeric"
          onChange={(value) => setValue4(value)}
          onFocus={() => setActive4(true)}
          onBlur={() => setActive4(false)}
          style={{
            ...styles.input,
            borderColor: value4 || active4 ? "#00B488" : "#FCFFFE",
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("hi");
        }}
      >
        <Text style={{ ...styles.text, alignSelf: "center", marginBottom: 15 }}>
          Надіслати код повторно
        </Text>
      </TouchableOpacity>
      <Login.LoginButton text={"Далі"} handler={handler} />
    </View>
  );
};

export default CodeInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FCFFFE",
    width: 74,
    height: 44,
    borderRadius: 15,
    borderWidth: 1,
    textAlign: "center",
  },
  code: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    marginBottom: 28,
  },
  text: {
    fontFamily: "MusticaProSemiBold",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 15,
  },
});
