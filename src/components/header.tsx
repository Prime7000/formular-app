import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={style.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#0F172A" }}>
        Prime Formula App
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
});
