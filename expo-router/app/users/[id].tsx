import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const Users = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-slate-100 px-6 py-12">
      <Text className="mt-2 text-3xl font-bold text-slate-900">Users - {id}</Text>

      <Text className="mt-2 text-base text-slate-500">Manage and view your users.</Text>

      <View className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
        <View className="flex-row items-center gap-4">
          <View className="h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <Text className="text-xl font-bold text-blue-600">U</Text>
          </View>

          <View className="flex-1">
            <Text className="text-lg font-bold text-slate-800">User Profile</Text>
            <Text className="mt-1 text-sm text-slate-500">View user information</Text>
          </View>

          <Text className="text-xl text-slate-400">➡️</Text>
        </View>
      </View>

      <View className="mt-5 items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8">
        <Text className="text-3xl">👥</Text>
        <Text className="mt-3 text-base font-semibold text-slate-700">No users to display</Text>
        <Text className="mt-1 text-center text-sm text-slate-500">
          Your user list will appear here.
        </Text>
      </View>

      <Link
        href="/About"
        className="mt-8 self-start rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
        ⬅️Back to About
      </Link>
    </View>
  );
};

export default Users;
