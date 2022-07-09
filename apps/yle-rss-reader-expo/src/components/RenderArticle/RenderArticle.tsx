import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

interface RenderArticleProps {
  html: string;
}

const headingStyle = {
  fontSize: 20,
  marginHorizontal: 8,
  marginBottom: 10,
  marginTop: 16,
};

const tagsStyles = {
  a: {
    color: 'black',
    textDecorationColor: 'black',
  },
  p: {
    fontSize: 17,
    lineHeight: '1.5em',
    marginHorizontal: 8,
    marginBottom: 8,
    marginTop: 0,
  },
  figcaption: {
    textAlign: 'left',
    lineHeight: '1.25em',
    fontSize: 15,
    fontStyle: 'normal',
    marginTop: 8,
    color: '#4a4a4a',
  },
  figure: {
    marginHorizontal: 8,
    marginTop: 20,
    marginBottom: 24,
  },
  blockquote: {
    lineHeight: '1.7em',
    fontSize: 20,
    fontStyle: 'italic',
    color: '#2b2b2b',
  },
  h1: headingStyle,
  h2: headingStyle,
  h3: headingStyle,
  h4: headingStyle,
  h5: headingStyle,
  h6: headingStyle,
};

export const RenderArticle = ({ html }: RenderArticleProps) => {
  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      emSize={16}
      source={{ html }}
      contentWidth={width}
      // @ts-ignore
      tagsStyles={tagsStyles}
    />
  );
};
