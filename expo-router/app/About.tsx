import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const About = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-6">
      <View className="w-full rounded-2xl bg-white p-8 shadow-sm">
        <Text className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Who We Are
        </Text>

        <Text className="mt-3 text-3xl font-bold text-slate-900">About Screen</Text>

        <Text className="mt-3 leading-6 text-slate-500">
          Get to know more about this application and what it has to offer.
        </Text>

        <Link
          href="/"
          className="mt-8 rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white">
          ⬅️ Back to Index
        </Link>

        <Link
          href="/users/100"
          className="mt-4 rounded-xl bg-green-600 px-5 py-4 text-center font-semibold text-white">
          Go to Adrian's Profile ➡️
        </Link>
      </View>
    </View>
  );
};

export default About;
