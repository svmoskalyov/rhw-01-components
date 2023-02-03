import styled from 'styled-components';

export const Title = styled.h2`
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
  border-bottom: 1px solid rgb(225, 220, 220);
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  padding: 10px 0;
  text-align: center;
  background-color: ${p => p.theme.colors.primary};
  border-right: 1px solid rgb(225, 220, 220);

  &:first-child {
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-right: none;
    border-bottom-right-radius: 4px;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 20px;
  color: ${p => p.theme.colors.white};
`;
