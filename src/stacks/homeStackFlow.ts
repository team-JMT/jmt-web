import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import LocationMapPreview from '@pages/LocationMapPreview';
import LocationResult from '@pages/LocationResult';
import LocationSearch from '@pages/LocationSearch';
import OtherProfile from '@pages/OtherProfile';
import SearchResult from '@pages/SearchResult';

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
        LocationSearch: '/location-search',
        LocationResult: '/location-result/:keyword',
        LocationMapPreview: '/location-map-preview',
        Search: '/search',
        SearchResult: '/result/:keyword',
        PlaceDetail: '/detail/:placeId',
        OtherProfile: '/profile/:userName',
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
    NotFound,
    LocationSearch,
    LocationResult,
    LocationMapPreview,
  },
  // initialActivity: () => 'Home',
});
