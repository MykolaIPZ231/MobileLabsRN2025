import { Image, Text, View } from "react-native";
import { styles } from "../styles";

export function Footer() {
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <Image
        resizeMode="contain"
        style={{ width: 130, height: 40 }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B8.png/800px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B8.png"
        }}
        onError={() => console.warn("err")}
      />

      <View style={styles.center}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>mobile lab1</Text>
      </View>
    </View>
  );
}
