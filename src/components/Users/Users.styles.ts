import styled from "@emotion/styled";

export const UsersContainer = styled.div(() => ({
  width: "100vw",
}));

export const UsersGrid = styled.div(() => ({
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(250px, calc(100vw / 4 - (4rem))))",
  gap: "1rem",
}));
