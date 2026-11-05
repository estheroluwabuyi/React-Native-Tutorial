import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Contact = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-6">
      <View className="w-full rounded-2xl bg-white p-8 shadow-sm">
        <Text className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Say Hello
        </Text>

        <Text className="mt-3 text-3xl font-bold text-slate-900">Contact Screen</Text>

        <Text className="mt-3 leading-6 text-slate-500">
          Have a question? We&apos;d love to hear from you.
        </Text>

        <Link
          href="/"
          className="mt-8 rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white">
          ⬅️ Back to Index
        </Link>
      </View>
    </View>
  );
};

export default Contact;
