import { StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242D34",
  },
  background: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  map: { 
    width: WIDTH-70, 
    aspectRatio: 1, 
    // borderWidth: 1, 
    // borderColor: "red",
    marginTop: 35,
  },

  row: { 
    flex: 1, 
    flexDirection: "row",
  },
  cell: { 
    flex: 1,
    // borderColor:"green", 
    // borderWidth: 1
  },

  circle: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: "white",
    margin: 20,
  },
  cross: { flex: 1, margin: 20 },
  crossLine: {
    position: "absolute",
    left: "42%",
    width: 10,
    height: "100%",
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
