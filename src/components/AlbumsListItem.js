import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumsListItem({ album }) {

  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = (event) => {
    removeAlbum(album)
  };

  const header = <>
    <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
      <GoTrashcan />
    </Button>
    {album.title}
    </>;
  return <ExpandablePanel key={album.id} header={header}>
    <PhotosList album={album}/>
  </ExpandablePanel>
}

export default AlbumsListItem;