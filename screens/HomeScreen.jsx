import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { HeroImage } from "../assets";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="pt-10 bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row items-center px-6 mt-3 space-x-2">
        <View className="rounded-full p-3 bg-black">
          <Text className="text-primary font-semibold text-3xl">Go</Text>
        </View>
        <Text className="text-3xl font-semibold text-secondary">Travel</Text>
      </View>
      {/* second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-4xl text-[#3c6072]">Enjoy the trip with</Text>
        <Text className="text-primary font-bold text-4xl">Good Moments</Text>
        <Text className="text-[#3c6072] font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iure
          necessitatibus quas voluptate beatae consequuntur, quisquam optio.
        </Text>
      </View>
      {/* Circle Section */}
      <View className="w-80 h-80 bg-primary rounded-full absolute bottom-20 -right-36"></View>
      <View className="w-80 h-80 bg-[#e99265] rounded-full absolute bottom-5 -left-36"></View>
      {/* Image Container */}
      <View className="flex-1 relative items-center justify-center -mt-6">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        {/* Button Container */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          style={{ borderRadius: 50 }}
          className="absolute bottom-16 w-24 h-24 border-l-2 border-r-2 border-t-4 border-primary items-center justify-center"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 justify-center items-center rounded-full bg-primary"
          >
            <Text className="text-4xl text-gray-50 font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
