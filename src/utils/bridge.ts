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
    window?.webviewBridge?.token();
  }
}
export function backEnable() {
  if (window.webkit) {
    console.log('enable');
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'enable',
      }),
    );
  } else {
    window?.webviewBridge?.enable();
  }
}

export function backDisable() {
  if (window.webkit) {
    console.log('backDisable');
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'disable',
      }),
    );
  } else {
    window?.webviewBridge?.disable();
  }
}

export function setToEnabledSwipe(enabled = true) {
  if (window.webkit) {
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'swipe',
        isEnableSwipe: enabled,
      }),
    );
  }
}
