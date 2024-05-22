import { Card } from "../Card/Card";
import { useGetUsers } from "./Users.hooks";

export const Users = () => {
  const query = useGetUsers();
  console.log(query.data);
  return (
    <>
      {query.isLoading && (
        <div>La liste des utilisateurs est en cours de chargement...</div>
      )}
      {query.data?.data.map((user) => (
        <Card user={user} />
      ))}
    </>
  );
};
