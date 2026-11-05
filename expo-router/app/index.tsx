import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-slate-100 px-6 py-16">
      <Text className="text-sm font-semibold uppercase tracking-widest text-blue-600">My App</Text>

      <Text className="mt-3 text-4xl font-bold text-slate-900">Welcome!</Text>

      <Text className="mt-2 text-base text-slate-500">Choose a page to explore.</Text>

      <View className="mt-10 gap-4">
        <Link href="/Home" className="rounded-2xl bg-white p-5 shadow-sm">
          <Text className="text-lg font-bold text-slate-800">Home</Text>
          <Text className="mt-1 text-sm text-slate-500">Visit the home screen ➡️</Text>
        </Link>

        <Link href="/About" className="rounded-2xl bg-white p-5 shadow-sm">
          <Text className="text-lg font-bold text-slate-800">About</Text>
          <Text className="mt-1 text-sm text-slate-500">Learn more about us ➡️</Text>
        </Link>

        <Link href="/Contact" className="rounded-2xl bg-white p-5 shadow-sm ">
          <Text className="text-lg font-bold text-slate-800">Contact</Text>
          <Text className="mt-1  text-sm text-slate-500">Get in touch ➡️</Text>
        </Link>
      </View>
    </View>
  );
}
