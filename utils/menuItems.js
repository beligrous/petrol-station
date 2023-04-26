import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuItem = (props) => {
  const navigation = useNavigation();
  const { screenName, text, image } = props;
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => {
        navigation.navigate(screenName);
      }}
    >
      <Image source={image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
const styles = StyleSheet.create({
  text: {
    fontFamily: "MusticaPro",
    color: "#FCFFFE",
    fontWeight: 600,
    fontSize: 18,
  },
  menuItem: {
    marginBottom: 28,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});
