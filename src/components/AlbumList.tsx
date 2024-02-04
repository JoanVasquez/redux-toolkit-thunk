import { User } from "../models/user";

interface AlbumsListProps {
  user: User;
}

function AlbumsList({ user }: AlbumsListProps) {
  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
