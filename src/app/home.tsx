import Footer from "@/components/footer";
import FormularCard from "@/components/FormularCard";
import Header from "@/components/header";
import formulas from "@/data/formular";
import { router } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {/* <BackButton /> */}
        <Header />
        <ScrollView>
          {formulas.map((formula) => (
            <FormularCard
              key={formula.id}
              title={formula.title}
              icon={formula.icon}
              onPress={() =>
                router.push({
                  pathname: "/details",
                  params: { id: String(formula.id) },
                })
              }
            />
          ))}
        </ScrollView>
        <Footer />
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
});
