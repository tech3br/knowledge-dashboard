import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small};
`;
