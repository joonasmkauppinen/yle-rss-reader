import styled from '@emotion/native';

const HeaderTitle = styled.Text({
  color: 'black',
  fontSize: 36,
  fontWeight: 'bold',
  marginBottom: 16,
  marginTop: 50,
  marginHorizontal: 8,
});

interface ListHeaderProps {
  children: string;
}

export const ListHeader = ({ children }: ListHeaderProps) => {
  return <HeaderTitle>{children}</HeaderTitle>;
};
