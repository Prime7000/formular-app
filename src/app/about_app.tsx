import BackButton from "@/components/BackButton";
import formulas from "@/data/formular";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AboutApp() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>About App</Text>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
          <View style={styles.intro}>
            <Image
              source={require("../../assets/images/Prime Formarlar App logo.png")}
              style={styles.logo}
              resizeMode="contain"
              accessibilityLabel="Prime Formula App logo"
            />
            <Text style={styles.name}>Prime Formula App</Text>
            <Text style={styles.tagline}>
              Find the formula. Understand the idea.
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {formulas.length} formulas with explanations
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>The story behind the app</Text>
            <Text style={styles.body}>
              You’re working through a problem. You know what you need to find,
              but the formula slips your mind. A quick search gives you an
              equation, then another question: what do the symbols mean, and
              when should you use it?
            </Text>
            <Text style={styles.body}>
              That familiar gap between remembering a formula and understanding
              it is the problem Prime Formula App aims to help with. It brings
              common formulas, plain-language descriptions and worked examples
              together in one place.
            </Text>
            <Text style={styles.body}>
              Created by Ofejiro Agbaduta, whose background combines mathematics
              and software engineering, the app connects mathematical ideas with
              a practical tool for learning and everyday reference.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>More than an equation</Text>
            <Text style={styles.body}>
              Explore geometry, algebra, interest, probability and everyday
              measurements. Each formula includes a description and a note
              explaining its variables, units, conditions and an example.
            </Text>
            <View style={styles.topics}>
              {["Geometry", "Algebra", "Interest", "Probability"].map(
                (topic) => (
                  <View key={topic} style={styles.topic}>
                    <Text style={styles.topicText}>{topic}</Text>
                  </View>
                ),
              )}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>
              Make it part of your practice
            </Text>
            <Text style={styles.body}>
              Choose a formula from Home to open its details. Read what each
              symbol stands for, check the units and follow the example. Then
              try the formula with your own values on paper or in a calculator.
            </Text>
          </View>

          <View style={styles.message}>
            <Text style={styles.messageTitle}>
              Build understanding, one formula at a time.
            </Text>
            <Text style={styles.messageBody}>
              A handy companion for study, revision and a quick refresher.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  title: {
    flex: 1,
    fontWeight: "700",
    fontSize: 20,
    color: "#0F172A",
  },
  content: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 32,
    gap: 16,
  },
  intro: {
    alignItems: "center",
    paddingBottom: 12,
  },
  logo: {
    width: 180,
    height: 120,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },
  tagline: {
    fontSize: 16,
    lineHeight: 24,
    color: "#64748B",
    textAlign: "center",
    marginTop: 8,
  },
  badge: {
    backgroundColor: "#EFF6FF",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: 16,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1D4ED8",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 20,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    color: "#475569",
  },
  topics: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  topic: {
    backgroundColor: "#EFF6FF",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  topicText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1D4ED8",
  },
  message: {
    backgroundColor: "#EFF6FF",
    borderRadius: 18,
    padding: 20,
    gap: 8,
  },
  messageTitle: {
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "700",
    color: "#1E40AF",
  },
  messageBody: {
    fontSize: 14,
    lineHeight: 22,
    color: "#475569",
  },
});
