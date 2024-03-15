import { StyleSheet } from "react-native";
import Titulo from "./src/components/title/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo></Titulo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12E08E',
    paddingTop: 50,
    borderRadius: 30,
  },
});