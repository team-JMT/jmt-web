import { nativeInfo } from './storage';

function setAccessToken(accessToken: string) {
  console.log('setAccessToken', accessToken);
  nativeInfo.setData({
    accessToken: accessToken,
  });
}

function backEvent() {
  console.log('backEvent');
  history.back();
}

if (window) {
  window.setAccessToken = setAccessToken;
  window.backEvent = backEvent;
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
    window?.webviewBridge?.back({
      isEnableBack: enable,
    });
  }
}

export function navigationEnable(visible = true) {
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
    window?.webviewBridge?.navigation({
      isVisible: visible,
    });
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
    window?.webviewBridge?.navigate({
      route: route,
      ...params,
    });
  }
}

export const navigateToEditRestaurant = (restaurantId: string) => {
  navigateNativeRoute('editRestaurant', {
    restaurantId,
  });
};
