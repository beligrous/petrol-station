import { TouchableOpacity, Text, StyleSheet } from "react-native";
const LoginBtn = (props) => {
  const { text, handler } = props;
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={handler}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  btn: {
    marginTop: 12,
    backgroundColor: "#00B488",
    height: 58,
    borderRadius: 15,
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "IntroRegular",
    alignSelf: "center",
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: 18,
    color: "#FCFFFE",
  },
});
