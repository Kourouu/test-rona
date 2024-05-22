import { User } from "../../shared/types";

export const Card = ({ user }: { user: User }) => {
  console.log(user);
  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
    </>
  );
};
