import { FlatList, Text, View } from "react-native";
import { homeStyles } from "../styles";
import { HomeItem } from "../components/homeI";

export function HomeScreen() {
  const items = Array.from({ length: 50 }, (_, i) => ({
    id: (i + 1).toString(),
    thumbnail: {
      uri: "https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png",
    },
    title: "qwe",
    date: "01 01 2025",
    shortText: "qwerty",
  }));

  return (
    <View>
      <FlatList
        style={homeStyles.list}
        data={items}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={homeStyles.title}>News</Text>}
        renderItem={({ item }) => <HomeItem props={item} />}
      />
    </View>
  );
}
