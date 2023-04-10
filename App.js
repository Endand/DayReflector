import React, { useState } from "react";
import { View, Text, Button } from "react-native";

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
    setPages([...pages, currentDateTime]);
  };

  return (
    <View>
      {/* Render the pages */}
      {pages.map((page, index) => (
        <View key={index}>
          <Text>{page.substring(0, 10)}</Text>
        </View>
      ))}
      {/* Render the "Add Day" button */}
      <Button title="+Day" onPress={handleAddDay} />
    </View>
  );
};

export default App;
