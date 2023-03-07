declare global {
  interface Window {
    Android: any;
  }
}

export const androidBridge = window.Android;
