import '../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Home Page',
          headerStyle: { backgroundColor: 'crimson' },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="Home"
        options={{
          headerTitle: 'Extra Home Page',
          headerStyle: { backgroundColor: 'blue' },
        }}
      />
      <Stack.Screen
        name="About"
        options={{
          headerTitle: 'About Page',
          headerStyle: {
            backgroundColor: 'pink',
          },
        }}
      />
      <Stack.Screen
        name="Contact"
        options={{
          headerTitle: 'Contact Page',
          headerStyle: {
            backgroundColor: 'purple',
          },
        }}
      />
      <Stack.Screen name="users/[id]" />
    </Stack>
  );

  // return <Stack screenOptions={{ headerShown: false }} />;
}
