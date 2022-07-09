import produce from 'immer';
import { getParsedRssContent, YleRssJsonResponse } from 'rss-parser';
import create from 'zustand';
import { MAIN_NEWS_RSS_FEED } from '../static/feedUrls';

export interface AppState {
  mainNewsFeed: YleRssJsonResponse | null;
  fetchMainFeed: () => void;
}

export const useStore = create<AppState>((set) => ({
  mainNewsFeed: null,
  fetchMainFeed: async () => {
    const rssJson = await getParsedRssContent(MAIN_NEWS_RSS_FEED);
    set({ mainNewsFeed: rssJson });
  },
}));

export const initializeStore = () => {
  useStore.getState().fetchMainFeed();
};
