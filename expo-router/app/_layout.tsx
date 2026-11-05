import '../global.css';
import { Stack, Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      // style applies to all tabs
      screenOptions={{
        // headerStyle: { backgroundColor: 'crimson' },
        // headerTintColor: 'white',
        // headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: 'crimson',
        tabBarInactiveTintColor: 'teal',
        tabBarStyle: { backgroundColor: '#eee', height: 60 },
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
      }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="About" />
      <Tabs.Screen name="Contact" />
      <Tabs.Screen name="users/[id]" />
    </Tabs>
    // <Stack>
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       headerTitle: 'Home Page',
    //       headerStyle: { backgroundColor: 'crimson' },
    //       headerTintColor: 'white',
    //       headerTitleStyle: {
    //         fontSize: 22,
    //         fontWeight: 'bold',
    //       },
    //       headerTitleAlign: 'center',
    //       headerShadowVisible: false,
    //     }}
    //   />

    //   <Stack.Screen
    //     name="Home"
    //     options={{
    //       headerTitle: 'Extra Home Page',
    //       headerStyle: { backgroundColor: 'blue' },
    //     }}
    //   />
    //   <Stack.Screen
    //     name="About"
    //     options={{
    //       headerTitle: 'About Page',
    //       headerStyle: {
    //         backgroundColor: 'pink',
    //       },
    //     }}
    //   />
    //   <Stack.Screen
    //     name="Contact"
    //     options={{
    //       headerTitle: 'Contact Page',
    //       headerStyle: {
    //         backgroundColor: 'purple',
    //       },
    //     }}
    //   />
    //   <Stack.Screen name="users/[id]" />
    // </Stack>
  );
}
