import { useState } from "react";
import { User } from "../../shared/types";

import * as S from "./Card.styles";

export const Card = ({ user }: { user: User }) => {
  const [active, setActive] = useState(false);
  return (
    <S.UserCard onClick={() => setActive(!active)} active={active}>
      <S.CardHeader>{user.name}</S.CardHeader>
      <S.CardContent>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.website}</div>
      </S.CardContent>
    </S.UserCard>
  );
};
