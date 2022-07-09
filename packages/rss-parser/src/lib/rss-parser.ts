import { parse } from 'rss-to-json';
import produce from 'immer';

export interface YleRssFeedItem {
  title: string;
  description: string;
  link: string;
  published: number;
  created: number;
  category: string[];
  /**
   * HTML content
   */
  content: string;
  content_encoded: string;
  enclosures: { url: string; type: 'image/jpeg'; length: string }[];
}

export interface YleRssJsonResponse {
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
  items: YleRssFeedItem[];
}

export const getParsedRssContent = async (
  url: string
): Promise<YleRssJsonResponse> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const rssJson: YleRssJsonResponse = await parse(url);
  return rssJson;
};
