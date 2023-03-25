import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import NotFound from '../pages/NotFound';
import PlaceDetail from '../pages/PlaceDetail';
import Search from '../pages/Search';

export const { Stack: SearchStack, useFlow: useSearchFlow } = stackflow({
  transitionDuration: 300,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    historySyncPlugin({
      routes: {
        Search: '/search',
        PlaceDetail: '/detail/:placeId',
        NotFound: '/error',
      },
      fallbackActivity: () => 'NotFound',

      useHash: false,
    }),
  ],
  activities: {
    Search,
    PlaceDetail,
    NotFound,
  },
  // initialActivity: () => 'Search',
});
