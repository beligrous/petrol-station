import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const GoBack = (props) => {
  const navigation = useNavigation();
  const { goToScreen } = props;
  return (
    <TouchableOpacity
      style={styles.goBack}
      onPress={() => navigation.navigate(goToScreen)}
    >
      <Image source={require("../assets/goBack.png")} />
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  goBack: {
    position: "absolute",
    left: 20,
    top: 56,
  },
});
