import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../app/App';
import { ArticleScreenProps } from '../../screens/ArticleScreen';

const Container = styled.Pressable({
  marginHorizontal: 8,
});

const Title = styled.Text({
  color: 'black',
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
});

const Description = styled.Text({
  color: 'black',
  fontSize: 16,
  fontWeight: 'normal',
});

const Divider = styled.View({
  backgroundColor: '#e8e8e8',
  alignSelf: 'stretch',
  height: 1,
  marginTop: 24,
  marginBottom: 24,
});

interface ListItemProps {
  title: string;
  description: string;
  itemIndex: number;
}

export const ListItem = ({ title, description, itemIndex }: ListItemProps) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Article', { itemIndex })}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Divider />
    </Container>
  );
};
