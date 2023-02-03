import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 100%;
  text-align: center;
`;

export const Title = styled.th`
  padding: ${p => p.theme.space[4] - 1}px ${p => p.theme.space[2] + 1}px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  outline: 2px solid ${p => p.theme.colors.muted};
`;

export const Row = styled.tr`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};

  &:nth-child(2n) {
    background-color: ${p => p.theme.colors.white};
  }
`;

export const Data = styled.td`
  outline: 2px solid ${p => p.theme.colors.muted};
  padding: ${p => p.theme.space[4] - 1}px ${p => p.theme.space[2] + 1}px;
`;
