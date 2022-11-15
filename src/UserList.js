import UserListItem from "./UserListItem";

function UserList({ users }) {
  // console.log(props.users);
  const usersList = users.map(userObj =>
    <UserListItem
      key={userObj.id}
      name={userObj.name}
      tech={userObj.tech}
      color={userObj.color}
    />
  )

  return (
    <ol>
      {usersList}
    </ol>
  );
}

export default UserList;