import { createStackNavigator } from "@react-navigation/stack";
import PhoneScreen from "./PhoneScreen";
import NameScreen from "./NameScreen";
import DateScreen from "./DateScreen";
const LoginScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Телефон">
      <Stack.Screen
        name="Телефон"
        component={PhoneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ПІБ"
        component={NameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Дата"
        component={DateScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginScreen;
