import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PlaceDetail from '../pages/PlaceDetail';
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
        PlaceDetail: '/detail/:placeId',
        NotFound: '/error',
      },
      fallbackActivity: () => 'NotFound',
      useHash: false,
    }),
  ],
  activities: {
    Home,
    Search,
    PlaceDetail,
    NotFound,
  },
  // initialActivity: () => 'Home',
});
