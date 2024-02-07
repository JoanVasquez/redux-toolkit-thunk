import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import { User } from "../models/user";
import { removeUser } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumList";
import { useSelector } from "react-redux";

interface UsersListItemProps {
  user: User;
}

const UsersListItem = ({ user }: UsersListItemProps) => {
  const { isLoading } = useSelector((state: any) => state.users);
  const [doRemoveUser] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user.id);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        variant="danger"
        loading={isLoading}
        onClick={handleClick}
      >
        <GoTrash />
      </Button>
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
