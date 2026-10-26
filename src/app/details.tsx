import BackButton from "@/components/BackButton";
import formulas from "@/data/formular";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Details() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const formula = formulas.find((item) => item.id === Number(id));

  if (!formula) {
    return (
      <SafeAreaView style={style.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ position: "absolute", top: 0, left: 0 }}>
            <BackButton />
          </View>
          <Text style={{ textAlign: "center", paddingHorizontal: 24 }}>
            Formula not found. Please select a formula from Home.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {/* header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View>
            <BackButton />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#0F172A" }}>
            Formula Details
          </Text>
        </View>
        {/* end of header */}

        {/* start of body */}
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
              paddingLeft: 17,
              color: "#0F172A",
            }}
          >
            {formula.title}
          </Text>
          <Text style={{ paddingLeft: 17, color: "#64748B" }}>
            {formula.description}
          </Text>
          <View
            style={{
              backgroundColor: "#EFF6FF",
              height: 150,
              width: "93%",
              marginLeft: 17,
              marginTop: 30,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "#2563EB", fontWeight: "bold" }}>
              Formular
            </Text>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 25 }}>
                {" "}
                {formula.formula}
              </Text>
            </View>
          </View>

          <ScrollView style={{ paddingLeft: 17 }}>
            <View style={style.card}>
              <Text style={style.sectionTitle}>Note </Text>
              <Text style={style.body}>{formula.note}</Text>
            </View>
          </ScrollView>
        </View>
        {/* end of body */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 20,
    gap: 12,
    marginTop: 17,
    width: "96%",
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    color: "#475569",
  },
});
