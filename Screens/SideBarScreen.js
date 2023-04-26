import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Item from "../utils";
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";

function SideBar() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 150 }}>
        <Item.SideBarItem
          screenName="Мій кабінет"
          text="Мій кабінет"
          image={require("../assets/sideBar/User.png")}
        />
        <Item.SideBarItem
          screenName="Талони"
          text="Мої талони"
          image={require("../assets/sideBar/Tallon.png")}
        />
        <Item.SideBarItem
          screenName="Ціни"
          text="Ціни"
          image={require("../assets/sideBar/Price.png")}
        />
        <Item.SideBarItem
          screenName="Акції"
          text="Акції"
          image={require("../assets/sideBar/Procent.png")}
        />
        <Item.SideBarItem
          screenName="Карта"
          text="Карта АЗК"
          image={require("../assets/sideBar/Map.png")}
        />
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>

    // <DrawerContentScrollView {...props} style={styles.container}>
    //   <DrawerItemList {...props} style={styles.text} />
    //   <DrawerItem label="Вийти" onPress={() => console.log(LogOut)} />
    // </DrawerContentScrollView>
  );
}

export default SideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B488",
    paddingHorizontal: 40,
  },
});
