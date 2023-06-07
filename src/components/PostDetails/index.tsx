import React from "react";
import { View, Text } from "react-native";
import { Post } from "../../Model/Post";
import { PostItem } from "../../components/PostItem";
import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";

interface PostDetailsProps {
  post: Post;
}

export function PostDetails() {
  const route = useRoute();
  const { post } = route.params as { post: Post };

  return (
    <View style={styles.container}>
      {post && (
        <>
          <PostItem post={post} onPress={() => {}} />
        </>
      )}
    </View>
  );
}














