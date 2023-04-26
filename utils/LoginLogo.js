import { StyleSheet, Image, Text } from "react-native";

const LoginLogo = () => {
  return (
    <>
      <Image style={styles.logo} source={require("../assets/BigLogo.png")} />
      <Text style={styles.title}>Процесс реєстрації</Text>
    </>
  );
};

export default LoginLogo;

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    fontFamily: "MusticaProSemiBold",
    marginTop: 40,
    alignSelf: "center",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
  },
  logo: {
    marginTop: 76,
    alignSelf: "center",
  },
});
