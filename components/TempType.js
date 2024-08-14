import { Text, View } from "react-native";

const TempType = ({ type }) => {
  return (
    <View className=" flex items-center justify-center flex-row ">
      <Text className=" pb-5 block   text-black font-normal font-Inter400 text-[16px] ">
        O
      </Text>
      <Text className="h-[39px] block  text-black font-normal font-Inter400 text-[32px]">
        {type ? `${type}` : "C"}{" "}
      </Text>
    </View>
  );
};

export default TempType;
