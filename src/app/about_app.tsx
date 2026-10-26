import BackButton from "@/components/BackButton";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function About_app() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>About App</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "#0F172A",
  },
});
