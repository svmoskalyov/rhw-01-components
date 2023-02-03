import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[1] * 5}px;
  padding: ${p => p.theme.space[2] * 5}px 0;
  border-radius: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0 0 ${p => p.theme.space[2]}px ${p => p.theme.colors.muted};
`;

export const Status = styled.span`
  display: inline-block;
  margin: 0 ${p => p.theme.space[4]}px;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  ${p =>
    p.isOnline
      ? `background-color: ${p.theme.colors.online};`
      : `background-color: ${p.theme.colors.offline};`}
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.space[2] * 5}px;
`;
