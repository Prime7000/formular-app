import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function BackButton() {
  return (
    <Link href="/home" asChild>
      <Pressable
        style={{
          // backgroundColor: "blue",
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
        accessibilityRole="link"
      >
        <Ionicons name="chevron-back-outline" size={27} color="#0F172A" />
      </Pressable>
    </Link>
  );
}
