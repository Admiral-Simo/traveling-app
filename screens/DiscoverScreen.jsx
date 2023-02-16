import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import { Image } from "react-native-animatable";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import ItemCardContainer from "../components/ItemCardContainer";

const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
  params: { query: "benimellal", lang: "en_US", units: "km" },
  headers: {
    "X-RapidAPI-Key": "123ea335a7msh979dc8eea9e603ep1cc954jsn810feadccd1d",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const DiscoverScreen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [type, setType] = useState("locations");
  return (
    <View className="pt-10 flex-1 bg-white relative">
      {/* Top Title and profile */}
      <View className="px-6 flex-row justify-between items-center">
        <View>
          <Text className="text-3xl font-bold text-[#0b545b]">Discover</Text>
          <Text className="text-2xl text-[#527283]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 rounded-md items-center justify-center shadow-xl">
          <Image
            className="w-full rounded-md h-full object-cover"
            source={Avatar}
          />
        </View>
      </View>

      {/* Search */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow mt-4">
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="enter location"
          className="flex-1 py-2"
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-3 mt-8">
          <MenuContainer
            key={"hotel"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"attractions"}
            title="Locations"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2c7379] text-3xl font-bold">Top Tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#abc4c7] text-xl font-bold">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#a0c4c7" />
            </TouchableOpacity>
          </View>

          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            <ItemCardContainer
              key={"101"}
              imageSrc="https://letsenhance.io/static/15912da66660b919112b5dfc9f562f6f/f90fb/SC.jpg"
              title="This is the best place to go to"
              location="Doha"
            />
            <ItemCardContainer
              key={"102"}
              imageSrc="https://miro.medium.com/fit/c/224/224/1*dTtmDyHdakE_7Cx1sQM_Fg.jpeg"
              title="Sample"
              location="Qatar"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoverScreen;

// const mock = {
//     coords: {
//         latitude: 32,
//         longitude:-6
//     }
// }
