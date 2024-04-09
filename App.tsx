import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import FeedPost from "./src/components/FeedPost";
import { Post } from "./src/interfaces/post";
import posts from "./assets/data/posts.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={posts as Post[]} renderItem={({ item }) => <FeedPost post={item} />} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
