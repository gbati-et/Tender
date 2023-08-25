import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
import COLORS from "../constants/colors";
import CheckBox from "react-native-check-box";
import { Title } from "react-native-paper";
import Data from "../components/Data.json";



// Ui Component for checkboxes and the name of categories
const RenderItem = ({ category, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 5,
        padding: 5,
      }}
      onPress={() => [handleChecked(category.id), setIsChecked(!isChecked)]}
    >
      <CheckBox
        isChecked={isChecked}
        onClick={() => [handleChecked(category.id), setIsChecked(!isChecked)]}
      />
      <Text>{category.key}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const [ selectedCategories, setSelectedCategories ] = useState([]);

  // Multiselect functionality with adding new categories and removing existing categories
  const handleChecked = (id) => {
    const index = selectedCategories.indexOf(id)
       selectedCategories.includes(id) === true ? (index > -1 ? 
          setSelectedCategories(current => current.filter((item) => item !== id))
          : null) 
          : setSelectedCategories(current => [...current, id])      
 };

//  To see which categories are added
 console.log("selectedCategories", selectedCategories)
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: "20%",
      }}
    >
      {Data.map((category, index) => {
        return <RenderItem {...{ category, handleChecked }} key={index} />;
      })}
    </ScrollView>
  );
};

export default Categories;
