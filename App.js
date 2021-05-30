import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToastAndroid,
  ImageBackground,
} from "react-native";
import Result from "./components/Result";
import image from "./assets/image(2).jpg";

const App = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  const [enteredNumber, setEnteredNumber] = useState();
  const [round, setRound] = useState(1);
  const [visibility, setVisibility] = useState(false);
  const [win, setWin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const check = () => {
    if (enteredNumber == number) {
      setWin(true);
      setIsDisabled(true);
      setTimeout(() => {
        setVisibility(true);
      }, 1000);
    } else {
      if (round >= 5) {
        setWin(false);
        setTimeout(() => {
          setVisibility(true);
          setRound(1);
        }, 1000);
      } else {
        ToastAndroid.show("TRY AGAIN!", ToastAndroid.SHORT);
        setTimeout(() => {
          setRound(round + 1);
          setEnteredNumber();
          setIsDisabled(true);
        }, 1200);
      }
    }
  };

  const restartGame = () => {
    setVisibility(false);
    setEnteredNumber();
    setRound(1);
    setWin(false);
    setNumber(Math.floor(Math.random() * 101));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.screen}>
          <Text style={styles.title}>Guess The Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter a Number"
              maxLength={3}
              keyboardType="phone-pad"
              onChangeText={(e) => {
                if (e.length > 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setEnteredNumber(e);
              }}
              defaultValue={enteredNumber}
            />
            <Result
              visibility={visibility}
              win={win}
              number={number}
              restart={restartGame}
            />
            <View style={styles.button}>
              <Button title="Go" onPress={check} disabled={isDisabled} />
            </View>
          </View>
          <Text style={styles.message}>{round} out of 5</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: '#000000a0',
    height: '100%'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#000000a0',
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    paddingVertical: 20,
    marginTop: 30,
  },
  inputContainer: {
    paddingVertical: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    marginVertical: 40,
    padding: 10,
    backgroundColor: "white",
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    width: "30%",
  },
  message: {
    borderColor: "red",
    color: "white",
    textAlign: "center",
    color: "#f1c40f",
    fontSize: 19,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
