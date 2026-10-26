import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type props = {
  title: string;
  onPress: () => void;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

export default function Card({ title, onPress, icon }: props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: pressed ? "#EFF6FF" : "#FFFFFF" },
      ]}
    >
      <View style={styles.icon}>
        <Ionicons name={icon} style={{ fontSize: 24, color: "#2563EB" }} />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={{ fontSize: 33, color: "#64748B" }}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F172A",
  },
});
