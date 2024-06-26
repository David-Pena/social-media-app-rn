import { Pressable, StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Entypo, AntDesign, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Post } from "../interfaces/post";
import { useNavigation } from "@react-navigation/native";

const FeedPost = ({ post }: { post: Post }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      {/* Header */}
      <Pressable onPress={() => navigation.navigate("Profile")} style={styles.header}>
        <Image source={{ uri: post.user.image }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post.user.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={18} color="gray" style={styles.icon} />
      </Pressable>

      {/* Body */}
      {post.description && <Text style={styles.description}>{post.description}</Text>}
      {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <Image source={require("../../assets/images/like.png")} style={styles.likeIcon} />
          <Text style={styles.likedBy}>Elon Musk and {post.numberOfLikes} others</Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>
        <View style={styles.buttonsRow}>
          <View style={styles.iconButton}>
            <AntDesign name="like2" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Like</Text>
          </View>
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={16} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>
          <View style={styles.iconButton}>
            <MaterialCommunityIcons name="share-outline" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fff",
  },

  // Header
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },

  // Body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },

  // Footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  },
});
