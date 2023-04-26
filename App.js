import { StyleSheet, View } from "react-native";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import * as Screen from "./Screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Головна"
            drawerContent={Screen.SideBar}
            screenOptions={{ drawerPosition: "right" }}
          >
            <Drawer.Screen
              name="Головна"
              component={Screen.Main}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Мій кабінет"
              component={Screen.MyRoom}
              options={{ headerShown: false }}
            />
            <Drawer.Screen name="Талони" component={Screen.Discount} />
            <Drawer.Screen name="Ціни" component={Screen.Price} />
            <Drawer.Screen name="Акції" component={Screen.Sale} />
            <Drawer.Screen name="Карта" component={Screen.Map} />
            <Drawer.Screen
              name="Реєстрація"
              component={Screen.Login}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
