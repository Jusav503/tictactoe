import { StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242D34",
  },
  background: {
    width: "100%",
    height: HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  map: { width: "80%", aspectRatio: 1,},
  row: {flex:1, flexDirection:"row"},
  cell: { flex: 1, width: 100, height: HEIGHT/7.5, marginTop:-15},
  circle: {
    flex:1,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: "white",
    margin:20,
  },
  cross: { flex: 1, margin:15, },
  crossLine: {
    position: "absolute",
    left: "42%",
    width: 10,
    height: HEIGHT,
    backgroundColor: "white",
    borderRadius: 5,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crossLineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});
