import { useEffect, useState } from "react";
import { useThunk } from "../hooks/useThunk";
import { addUser, fetchUsers } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";
import { User } from "../models/user";
import Button from "./Button";
import { faker } from "@faker-js/faker";

const UserList = () => {
  const [doFetchUsers] = useThunk(fetchUsers);
  const [doCreateUser] = useThunk(addUser);
  const { data, isFetching, isLoading, error } = useSelector((state: any) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  let content;
  if (isFetching) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((user: User) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  const handleUserAdd = () => {
    const tmpUser: User = {
      name: faker.name.fullName(),
    };
    doCreateUser(tmpUser);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button variant="primary" loading={isLoading} onClick={handleUserAdd}>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
};

export default UserList;
