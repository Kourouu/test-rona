import styled from "@emotion/styled";

export const UsersContainer = styled.div(() => ({
  width: "100vw",
}));

export const UsersGrid = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 300px)",
  gap: "1rem",
}));
