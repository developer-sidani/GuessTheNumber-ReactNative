import React from "react";
import {
  StyleSheet,
  Text,
  Modal,
  View,
  Button,
  ImageBackground,
} from "react-native";
import winGame from "../assets/win.jpg";
import loseGame from "../assets/GameOver.jpg";

const Result = ({ visibility, win, number, restart }) => {
  const outcome = win ? winGame : loseGame;
  const message = win
    ? `Congrats!! The number is: ${number}`
    : `Sorry, The chosen number was: ${number}`;
  return (
    <Modal visible={visibility} animationType="fade">
      <ImageBackground source={outcome} style={styles.image}>
        <View style={styles.Container}>
          <Text style={styles.text}>{message}</Text>
          <View style={styles.buttonContainer}>
            <Button title="restart" onPress={restart} />
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default Result;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#000000a0',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: 'white',

    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  buttonContainer: {
    width: "30%",
    padding: 10,
    marginTop: 30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
