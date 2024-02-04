import { GoTrash } from "react-icons/go";
import { Album } from "../models/album";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store/apis/albumApi";
import PhotosList from "./PhotoList";

interface AlbumListItemProps {
  album: Album;
}

const AlbumListItem = ({ album }: AlbumListItemProps) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album.id!);
  };

  return (
    <ExpandablePanel
      key={album.id}
      header={
        <>
          <Button
            onClick={handleRemoveAlbum}
            className="mr-2"
            loading={results.isLoading}
            variant="danger"
          >
            <GoTrash />
          </Button>
          {album.title}
        </>
      }
    >
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumListItem;
