import styled from "@emotion/styled";

export const UserCard = styled.div(() => ({
  border: "1px solid #00315d",
  borderRadius: 10,
}));

export const CardHeader = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  fontWeight: "bold",
}));

export const CardContent = styled.div(() => ({
  padding: "1rem",
}));
