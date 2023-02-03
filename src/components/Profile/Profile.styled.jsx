import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[2] * 5}px;
  margin: ${p => p.theme.space[0]}px;
  background-color: ${p => p.theme.colors.white};
  border-top-left-radius: ${p => p.theme.space[2]}px;
  border-top-right-radius: ${p => p.theme.space[2]}px;
`;

export const Avatar = styled.img`
  max-width: 45%;
  margin-bottom: ${p => p.theme.space[2] * 5}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 50%;
  box-shadow: 0 0 ${p => p.theme.space[2]}px;
  ${p => p.theme.colors.muted};
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[1] * 5}px;
  color: ${p => p.theme.colors.muted};
`;

export const Location = styled.p`
  margin-bottom: ${p => p.theme.space[2] * 5}px;
  color: ${p => p.theme.colors.muted};
`;

export const Stats = styled.ul`
  display: flex;
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

export const Item = styled.li`
  width: calc(100% / 3);
  padding-top: ${p => p.theme.space[2] * 5}px;
  padding-bottom: ${p => p.theme.space[2] * 5}px;
  background-color: ${p => p.theme.colors.primary};
  border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.while};

  &:first-child {
    border-bottom-left-radius: ${p => p.theme.space[2]}px;
  }

  &:last-child {
    border-right: ${p => p.theme.borders.none};
    border-bottom-right-radius: ${p => p.theme.space[2]}px;
  }
`;

export const Label = styled.span`
  padding-bottom: ${p => p.theme.space[2]}px;
  display: block;
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
