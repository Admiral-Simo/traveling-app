import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className='rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-72 my-2'>
      <Image source={{uri: imageSrc}} className='w-full h-40 rounded-md object-cover' />

      <Text className='text-[#42b288] text-[18px] font-bold'>
        {title?.length > 25 ? `${title.slice(0,25)}...` : title}
      </Text>

      <View className='flex-row items-center space-x-1'>
      <FontAwesome name="map-marker" size={20} color="#8597a2" />
      <Text className="text-[#42b288] text-[14px] font-bold">
        {location?.length > 18 ? `${title.slice(0,18)}...` : location}
      </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
