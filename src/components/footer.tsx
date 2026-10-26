import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={style.container}>
      <Link href="/details" asChild>
        <Pressable style={style.foo} accessibilityRole="link">
          <Ionicons name="home" size={24} color="#2563EB" />
          <Text style={{ color: "#2563EB" }}>Home</Text>
        </Pressable>
      </Link>

      <Link href="/about_app" asChild>
        <Pressable style={style.foo} accessibilityRole="link">
          <Ionicons name="logo-appflow" size={24} color="#2563EB" />
          <Text style={{ color: "#2563EB" }}>About App</Text>
        </Pressable>
      </Link>

      <Link href="/about_author" asChild>
        <Pressable style={style.foo} accessibilityRole="link">
          <Ionicons name="person" size={24} color="#2563EB" />
          <Text style={{ color: "#2563EB" }}>Author</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopColor: "green",
    // flex: 1,
  },
  foo: { flex: 1, justifyContent: "center", alignItems: "center" },
  icon: {},
});
