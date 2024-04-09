export interface Post {
  id: string;
  createdAt: string;
  user: User;
  description: string;
  image: string;
  numberOfLikes: number;
  numberOfShares: number;
}

interface User {
  id: string;
  image: string;
  name: string;
}
