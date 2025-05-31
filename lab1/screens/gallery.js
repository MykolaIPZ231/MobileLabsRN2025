import { FlatList, TouchableOpacity } from "react-native";
import { galleryStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";

export function GalleryScreen() {
  const navigation = useNavigation();

  const images = Array.from({ length: 50 }, (_, i) => ({ id: (i + 1).toString() }));

  return (
    <FlatList
      data={images}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={() => (
        <TouchableOpacity
          style={galleryStyles.image}
          onPress={() => navigation.navigate("Profile")}
        />
      )}
    />
  );
}
