import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  return (
    <TouchableOpacity
      className={`items-center justify-center space-y-2 p-2 rounded-lg ${
        type === title.toLowerCase() && "bg-gray-200"
      }`}
      onPress={() => setType(title.toLowerCase())}
    >
      <View className="w-24 h-24 rounded-full items-center justify-center">
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-primary text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
