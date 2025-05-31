import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Гра-клікер' }} 
      />
      <Stack.Screen 
        name="Tasks" 
        component={TasksScreen} 
        options={{ title: 'Завдання' }} 
      />
    </Stack.Navigator>
  );
}