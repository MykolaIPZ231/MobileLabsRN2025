import { Image, Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";

export function HomeItem({ props }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={homeStyles.item}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image source={props.thumbnail} style={homeStyles.itemImage} />
      <View style={homeStyles.itemContent}>
        <Text style={homeStyles.itemTitle}>{props.title}</Text>
        <Text style={homeStyles.itemDate}>{props.date}</Text>
        <Text style={homeStyles.itemShortText}>{props.shortText}</Text>
      </View>
    </TouchableOpacity>
  );
}
