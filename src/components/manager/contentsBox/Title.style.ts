import styled from "styled-components";
import Image from "next/image";

export const SearchBoxContainer = styled.nav`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`;

export const SearchImageIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

export const SearchInput = styled.input`
  border: none;
  margin-left: 5%;
  width: 90%;
  font-size: 0.875rem;
  color: #808080;
  &::placeholder {
    color: #c0c0c0;
  }
`;

export const Title = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ContentsContainer = styled.nav`
  margin: 2rem 4rem;
`;