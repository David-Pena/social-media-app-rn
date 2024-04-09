import { StyleSheet, FlatList } from "react-native";
import React from "react";
import FeedPost from "../../src/components/FeedPost";
import { Post } from "../../src/interfaces/post";
import posts from "../../assets/data/posts.json";

const FeedScreen = () => {
  return (
    <FlatList data={posts as Post[]} renderItem={({ item }) => <FeedPost post={item} />} />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
