import styled from "@emotion/styled";

export const UserCard = styled.div<{ active: boolean }>(
  ({ active }) => `

  cursor: pointer;
  color: active ? white : inherit;
  border: 1px solid #00315d;
  border-radius: 10px;
  ${active && "background-color: #00315d"};
  ${active && "color: white"};

`
);

export const CardHeader = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  fontWeight: "bold",
}));

export const CardContent = styled.div(() => ({
  padding: "1rem",
}));
