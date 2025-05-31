import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { profileStyles } from "../styles";

export function ProfileScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={profileStyles.title}>Реєстрація</Text>

      <Text style={profileStyles.label}>Email</Text>
      <TextInput style={profileStyles.inputField} />

      <Text style={[profileStyles.label, { marginTop: 15 }]}>пароль</Text>
      <TextInput secureTextEntry style={profileStyles.inputField} />

      <Text style={[profileStyles.label, { marginTop: 15 }]}>повторіть пароль</Text>
      <TextInput secureTextEntry style={profileStyles.inputField} />

      <Text style={[profileStyles.label, { marginTop: 30 }]}>ім`я</Text>
      <TextInput style={profileStyles.inputField} />

      <Text style={[profileStyles.label, { marginTop: 15 }]}>прізвище</Text>
      <TextInput style={profileStyles.inputField} />

      <TouchableOpacity style={profileStyles.signUpButton}>
        <Text style={{ color: "#fff" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
