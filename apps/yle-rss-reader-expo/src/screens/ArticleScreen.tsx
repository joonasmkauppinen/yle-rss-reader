import styled from '@emotion/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RenderArticle } from '../components/RenderArticle/RenderArticle';
import { RootStackParamList } from '../app/App';
import { useStore } from '../store/store';

const ContainerScrollView = styled.ScrollView({
  backgroundColor: 'white',
});

const Text = styled.Text({
  color: 'black',
  fontSize: 16,
  margin: 8,
});

const Title = styled.Text({
  color: 'black',
  fontWeight: 'bold',
  fontSize: 26,
  margin: 8,
  marginTop: 16,
});

const Lead = styled.Text({
  color: 'black',
  fontSize: 19,
  lineHeight: 26,
  marginHorizontal: 8,
  marginBottom: 8,
});

const Image = styled.Image({
  height: 260,
});

export type ArticleScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Article'
>;

export const ArticleScreen = ({ route }: ArticleScreenProps) => {
  const itemIndex = route.params.itemIndex;
  const articleContent = useStore(
    (state) => state.mainNewsFeed?.items[itemIndex].content
  );
  const enclosures = useStore(
    (state) => state.mainNewsFeed?.items[itemIndex].enclosures
  );
  const title = useStore((state) => state.mainNewsFeed?.items[itemIndex].title);
  const description = useStore(
    (state) => state.mainNewsFeed?.items[itemIndex].description
  );
  const mainImageSrc = enclosures && enclosures[0] ? enclosures[0].url : null;

  console.log('mainImageSrc: ', mainImageSrc);

  if (!articleContent) {
    return <Text>No article content.</Text>;
  }

  const articleContentWithFixedSrcPaths = articleContent.replaceAll(
    'src="//',
    'src="https://'
  );

  return (
    <ContainerScrollView contentInset={{ bottom: 80 }}>
      {mainImageSrc && <Image source={{ uri: mainImageSrc }} />}
      <Title>{title}</Title>
      <Lead>{description}</Lead>
      <RenderArticle html={articleContentWithFixedSrcPaths} />
    </ContainerScrollView>
  );
};
