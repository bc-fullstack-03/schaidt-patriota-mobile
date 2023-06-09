import { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Post } from "../../Model/Post";
import { Chat, Heart, UserCircle } from "phosphor-react-native";
import { Spacer } from "../Spacer";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as PostContext } from "../../context/PostContext";

interface PostItemProps {
  post: Post;
  onPress: (post: Post) => void;
}

export function PostItem({ post, onPress }: PostItemProps) {
  const { profile } = useContext(AuthContext);
  const { likePost, unlikePost } = useContext(PostContext);

  function handleLike() {
    if (post.likes.includes(profile)) {
      unlikePost({ postId: post._id });
    } else {
      likePost({ postId: post._id });
    }
  }

  function navigateToPostDetails() {
    onPress(post);
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <UserCircle color="white" size={48} />
        <Text style={styles.profileName}>{post.profile.name}</Text>
      </View>
      <TouchableOpacity onPress={navigateToPostDetails}>
        <Text style={styles.postTitle}>{post.title}</Text>
      </TouchableOpacity>
      <Spacer>
        {post.image ? (
          <Image
            source={{
              uri: post.description,
            }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.description}>{post.description}</Text>
        )}
      </Spacer>
      <View style={styles.footer}>
        <Chat size={24} color="white" weight="thin" />
        <Text style={styles.number}>{post.comments.length}</Text>
        <TouchableOpacity onPress={handleLike}>
          {post.likes.includes(profile) ? (
            <Heart size={24} color="red" weight="fill" />
          ) : (
            <Heart size={24} color="white" weight="thin" />
          )}
        </TouchableOpacity>
        <Text style={styles.number}>{post.likes.length}</Text>
      </View>
    </View>
  );
}

