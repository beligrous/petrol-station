import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.487481,
          longitude: 30.479576,
          latitudeDelta: 0.05,
          longitudeDelta: 0.001,
        }}
      ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MapScreen;
