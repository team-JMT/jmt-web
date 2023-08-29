import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import OtherProfile from '@pages/OtherProfile';
import SearchResult from '@pages/SearchResult';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PlaceDetail from '../pages/PlaceDetail';
import Report from '../pages/Report';
import Search from '../pages/Search';

export const { Stack: HomeStack, useFlow: useHomeFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    historySyncPlugin({
      routes: {
        Home: '/',
        Search: '/search',
        SearchResult: '/search/:keyword',
        PlaceDetail: '/detail/:placeId',
        OtherProfile: '/profile/:userId',
        Report: '/report/:placeId',
        NotFound: '/error',
      },
      fallbackActivity: () => 'NotFound',
      useHash: false,
    }),
  ],
  activities: {
    Home,
    Search,
    SearchResult,
    PlaceDetail,
    OtherProfile,
    Report,
    NotFound,
  },
  // initialActivity: () => 'Home',
});
