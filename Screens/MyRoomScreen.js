import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Btn from "../utils";

const MyRoomScreen = ({ navigation }) => {
  const menuHandler = () => {
    navigation.toggleDrawer();
  };

  const goBackHandler = () => {
    navigation.jumpTo("Головна");
  };

  const btnHandler = () => {
    navigation.navigate("Реєстрація");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bgimg.png")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.goBack}
          onPress={goBackHandler}
        >
          <Image source={require("../assets/goBack.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Мій кабінет</Text>
        <TouchableOpacity
          style={styles.menu}
          activeOpacity={0.7}
          onPress={menuHandler}
        >
          <Image source={require("../assets/Menu.png")} />
        </TouchableOpacity>
        <View style={styles.area}>
          <Text style={{ ...styles.text, marginBottom: 32 }}>
            Зареєструйтесь для створення власного кабінету
          </Text>
          <Btn.LoginButton text={"Зареєструватись"} handler={btnHandler} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bgImg: {
    flex: 1,
  },
  area: {
    flex: 1,
    backgroundColor: "#FCFFFE",
    marginTop: 40,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: "MusticaProSemiBold",
    marginTop: 87,
    alignSelf: "center",
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 25,
  },
  text: {
    fontFamily: "MusticaProSemiBold",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 57,
    fontWeight: 600,
    fontSize: 18,
  },
  btnText: {
    alignSelf: "center",
    fontWeight: 600,
    fontSize: 18,
    color: "#FCFFFE",
  },
  goBack: {
    position: "absolute",
    left: 22,
    top: 87,
  },
  menu: {
    position: "absolute",
    right: 22,
    top: 87,
  },
});
