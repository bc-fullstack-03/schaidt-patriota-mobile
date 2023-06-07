import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PostProvider } from "../../context/PostContext";
import { PostList } from "../PostList/Index";
import { CreatePost } from "../CreatePost/Index";
import { PostDetails } from "../../components/PostDetails";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <PostProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: "dark",
        }}
      >
        <Stack.Screen name="PostList" component={PostList} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </PostProvider>
  );
}
