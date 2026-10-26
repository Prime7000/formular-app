import BackButton from "@/components/BackButton";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const skills = ["Python", "Django", "Flask", "FastAPI", "Pandas"];

export default function Author() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>About Author</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.profile}>
            <View style={styles.portraitFrame}>
              <Image
                source={require("../../assets/images/prime.jpeg")}
                style={styles.portrait}
                resizeMode="cover"
                accessibilityLabel="Portrait of Ofejiro Agbaduta"
              />
            </View>
            <Text style={styles.name}>Ofejiro Agbaduta</Text>
            <Text style={styles.role}>Software Engineer & AI Officer</Text>
            <Text style={styles.location}>Benin City, Nigeria</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>About me</Text>
            <Text style={styles.body}>
              I’m a software engineer based in Benin City, Nigeria. I work as
              an AI Officer at DeeMoat Hub, developing practical solutions using
              software, data and artificial intelligence.
            </Text>
            <Text style={styles.body}>
              I enjoy applying mathematical ideas to real problems and building
              useful applications that simplify everyday tasks.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>What I work with</Text>
            <Text style={styles.body}>
              My work focuses on backend development, machine learning and
              automation.
            </Text>
            <View style={styles.skills}>
              {skills.map((skill) => (
                <View key={skill} style={styles.skill}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.degree}>Bachelor’s degree in Mathematics</Text>
            <Text style={styles.body}>Ambrose Alli University</Text>
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
  profile: {
    alignItems: "center",
    paddingBottom: 12,
  },
  portraitFrame: {
    padding: 6,
    borderRadius: 82,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
    marginBottom: 18,
  },
  portrait: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },
  role: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563EB",
    textAlign: "center",
    marginTop: 8,
  },
  location: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginTop: 6,
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
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skill: {
    backgroundColor: "#EFF6FF",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  skillText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1D4ED8",
  },
  degree: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 23,
    color: "#334155",
  },
});
