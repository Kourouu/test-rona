import { Card } from "../Card/Card";
import { useGetUsers } from "./Users.hooks";

import * as S from "./Users.styles";

export const Users = () => {
  const query = useGetUsers();
  return (
    <S.UsersContainer>
      {query.isLoading && (
        <div>La liste des utilisateurs est en cours de chargement...</div>
      )}
      {query.data && (
        <S.UsersGrid>
          {query.data.data.map((user) => (
            <Card key={user.name} user={user} />
          ))}
        </S.UsersGrid>
      )}
    </S.UsersContainer>
  );
};
