import { LocationSearchData } from '../models/locationSearchData';

import { nativeInfo } from './storage';

function setAccessToken(accessToken: string) {
  console.log('setAccessToken', accessToken);
  const prevState = nativeInfo.getData();
  nativeInfo.setData({
    ...prevState,
    accessToken: accessToken,
  });
}

function setUserPosition(userPosition: string) {
  const position = JSON.parse(userPosition) as LocationSearchData;
  const prevState = nativeInfo.getData();
  console.log('setUserPosition', position);
  nativeInfo.setData({
    ...prevState,
    userPosition: position,
  });
}

function backEvent() {
  console.log('backEvent');
  history.back();
}

export function getAccessToken() {
  if (window.webkit) {
    console.log('accessToken');
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'token',
      }),
    );
  } else {
    console.log('accessToken');
    window?.webviewBridge?.token();
  }
}

export function getUserPosition() {
  if (window.webkit) {
    console.log('userPosition');
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'userPosition',
      }),
    );
  } else {
    console.log('userPosition');
    window?.webviewBridge?.userPosition();
  }
}

export function backEnable(enable = true) {
  if (window.webkit) {
    // ios
    console.log('backEnable', enable);
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'back',
        isEnableBack: enable,
      }),
    );
  } else {
    // android
    console.log('backEnable', enable);
    window?.webviewBridge?.back(
      JSON.stringify({
        isEnableBack: enable,
      }),
    );
  }
}

export function navigationHandler(visible = true) {
  if (window.webkit) {
    // ios
    console.log('navigation', visible);

    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'navigation',
        isVisible: visible,
      }),
    );
  } else {
    // android
    console.log('navigation', visible);
    window?.webviewBridge?.navigation(
      JSON.stringify({
        isVisible: visible,
      }),
    );
  }
}

export function handleNativeShare() {
  if (window.webkit) {
    // ios
    console.log('share');
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'share',
      }),
    );
  } else {
    // android
    console.log('share');
    window?.webviewBridge?.share();
  }
}

export function navigateNativeRoute(route: string, params?: any) {
  if (window.webkit) {
    // ios
    console.log('navigate', route);
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'navigate',
        route: route,
        ...params,
      }),
    );
  } else {
    // android
    console.log('navigate', route);
    window?.webviewBridge?.navigate(
      JSON.stringify({
        route: route,
        ...params,
      }),
    );
  }
}

type NativeRoute = {
  editRestaurantInfo: {
    params: {
      restaurantId: string;
    };
  };
};

if (window) {
  window.setAccessToken = setAccessToken;
  window.setUserPosition = setUserPosition;
  window.backEvent = backEvent;
}

type NativeRouteKey = keyof NativeRoute;
type NativeRouteParams<T extends NativeRouteKey> = NativeRoute[T]['params'];

export function navigateNativeRouteType<T extends NativeRouteKey>(
  route: T,
  params: NativeRouteParams<T>,
) {
  if (window.webkit) {
    // ios
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'navigate',
        route: route,
        ...params,
      }),
    );
  } else {
    // android
    console.log('navigate');
    window?.webviewBridge?.navigate({
      route: route,
      ...params,
    });
  }
}
