import { Album } from "../models/album";
import { User } from "../models/user";
import {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
} from "../store/apis/albumApi";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

interface AlbumsListProps {
  user: User;
}

function AlbumsList({ user }: AlbumsListProps) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album: Album) => (
      <AlbumListItem key={album.id} album={album} />
    ));
  }
  return (
    <div>
      <div className="m2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          className="mr-2"
          loading={results.isLoading}
          onClick={handleAddAlbum}
          variant="primary"
        >
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
