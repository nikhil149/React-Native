import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);
  const textInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    console.log(enteredGoal);
    setGoalList((prevState) => [...prevState, enteredGoal]);
    setEnteredGoal("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          value={enteredGoal}
          onChangeText={textInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalList.map((goal, id) => (
          <View key={id} style={styles.goalItem}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 5,
    padding: 5,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginBottom: 8,
    padding: 8,
    elevation: 2,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
  goalText: {
    color: "white",
  },
});
