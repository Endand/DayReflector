import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";

const App = () => {
  const [pages, setPages] = useState([]);

  // Function to create a new page with current date as title
  const handleAddDay = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month index to get correct month (0 - 11)
    const day = String(currentDate.getDate()).padStart(2, "0"); // Pad day with leading zero if needed
    const hours = String(currentDate.getHours()).padStart(2, "0"); // Pad hours with leading zero if needed
    const minutes = String(currentDate.getMinutes()).padStart(2, "0"); // Pad minutes with leading zero if needed
    const seconds = String(currentDate.getSeconds()).padStart(2, "0"); // Pad seconds with leading zero if needed
    const milliseconds = String(currentDate.getMilliseconds()).padStart(3, "0"); // Pad milliseconds with leading zeros if needed

    const currentDateTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    setPages([currentDateTime, ...pages]); // Add new page to the beginning of the pages array
  };

  const handlePageLongPress = (page) => {
    Alert.alert(
      "Delete Page",
      `Are you sure you want to delete this page: ${page.substring(0, 10)}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            // Remove the specific page from pages array
            const updatedPages = pages.filter((p) => p !== page);
            setPages(updatedPages);
          },
        },
      ],
      //enable cancel with back button on phone
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Render the pages */}
        {pages.map((page, index) => (
          <TouchableOpacity
            key={index}
            style={styles.pageBox}
            onPress={() => alert(`Page clicked: ${page}`)}
            onLongPress={() => handlePageLongPress(page)}
          >
            <Text>{page.substring(0, 10)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Render the "Add Day" button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddDay}>
        <Text style={styles.addButtonText}>+Day</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add paddingTop for Android devices since SafeAreaView only affects IOS
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
  },
  pageBox: {
    backgroundColor: "lightcyan",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Add flex property to allow the boxes to expand and fill the ScrollView
    alignSelf: "stretch", // Add alignSelf property to stretch the boxes horizontally
  },
});

export default App;
