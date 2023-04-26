import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import MapView from "react-native-maps";

function MainScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    MusticaProSemiBold: require("../assets/fonts/MusticaProSemiBold.ttf"),
    IntroRegular: require("../assets/fonts/IntroRegular.ttf"),
  });

  const data = [
    { uri: require("../assets/promo.png"), id: "1" },
    { uri: require("../assets/promo.png"), id: "2" },
    { uri: require("../assets/promo.png"), id: "3" },
  ];

  const menuHandler = () => {
    navigation.toggleDrawer();
  };

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          borderTopWidth: 2,
          borderColor: "#F6F6F6",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/bgimg.png")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.logoImg}
            source={require("../assets/Logo.png")}
          />
          <TouchableOpacity
            onPress={menuHandler}
            activeOpacity={0.7}
            style={styles.menu}
          >
            <Image source={require("../assets/Menu.png")} />
          </TouchableOpacity>
          <View style={{ height: 166, marginTop: 23 }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={true}
              renderItem={({ item }) => (
                <View style={styles.promoImgWrap}>
                  <Image source={item.uri} />
                </View>
              )}
            />
          </View>
          <Text style={styles.title}>Слідкуй за знижками</Text>
          <Pressable
            style={{ ...styles.saleBtn, padding: 18 }}
            onPress={() => {
              navigation.navigate("Акції");
            }}
          >
            <Image source={require("../assets/procentLogo.png")} />
            <Text style={styles.btnText}>Отримати персональну знижку</Text>
          </Pressable>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Pressable
              style={{ ...styles.saleBtn, width: 165, padding: 18 }}
              onPress={() => {
                navigation.navigate("Талони");
              }}
            >
              <Image source={require("../assets/fiscaleLogo.png")} />
              <Text style={styles.btnText}>Придбати {"\n"} пальне</Text>
            </Pressable>
            <Pressable
              style={{ ...styles.saleBtn, width: 165 }}
              onPress={() => {
                navigation.navigate("Ціни");
              }}
            >
              <Image source={require("../assets/gasolineStationLogo.png")} />
              <Text style={styles.btnText}>Ціни на {"\n"} пальне</Text>
            </Pressable>
          </View>
          <Text style={styles.title}>Паливна карта</Text>
          <View>
            <Pressable
              style={{
                ...styles.saleBtn,
                justifyContent: "space-evenly",
                paddiing: 14,
              }}
              onPress={() => {
                navigation.navigate("Мій кабінет");
              }}
            >
              <Image source={require("../assets/Card.png")} />
              <Text style={styles.numberTitle}>0.00 грн</Text>
              <Image source={require("../assets/qr-code.png")} />
            </Pressable>
          </View>
          <View>
            <Text style={styles.title}>Карта АЗК САН</Text>
            <View style={{ borderRadius: 15 }}>
              <MapView
                style={{ height: 200, marginTop: 18 }}
                initialRegion={{
                  latitude: 50.487481,
                  longitude: 30.479576,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.001,
                }}
              ></MapView>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bgImg: {
    flex: 1,
    paddingHorizontal: 22,
  },
  logoImg: {
    marginTop: 60,
    alignSelf: "center",
  },
  promoImgWrap: {
    height: 166,
    borderWidth: 2,
    borderColor: "#ffffff",
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: 16,
  },
  title: {
    fontFamily: "MusticaProSemiBold",
    textAlign: "center",
    alignSelf: "flex-start",
    marginTop: 18,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
  },
  numberTitle: {
    fontFamily: "MusticaProSemiBold",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 19,
  },
  btnText: {
    fontFamily: "MusticaProSemiBold",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
  },
  saleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    gap: 12,
    borderWidth: 1,
    borderColor: "#FCFFFE",
    padding: 23,
    borderRadius: 15,
    boxShadow:
      "0px 4px 10px rgba(38, 38, 38, 0.07), inset 0px 2px 4px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#FCFFFE",
  },
  menu: {
    position: "absolute",
    right: 23,
    top: 90,
  },
});
