import { User } from "../../shared/types";

import * as S from "./Card.styles";

export const Card = ({ user }: { user: User }) => {
  return (
    <S.UserCard>
      <S.CardHeader>{user.name}</S.CardHeader>
      <S.CardContent>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.website}</div>
      </S.CardContent>
    </S.UserCard>
  );
};
