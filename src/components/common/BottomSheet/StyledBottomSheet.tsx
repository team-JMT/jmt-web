import { BottomSheet } from 'react-spring-bottom-sheet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledBottomSheet = styled(BottomSheet)<{ fullPage: boolean }>`
  * {
    --rsbs-overlay-rounded: 24px;
  }

  [data-rsbs-overlay] {
    border-top-left-radius: 16px;
    border-top-left-radius: var(--rsbs-overlay-rounded, 16px);
    border-top-right-radius: 16px;
    border-top-right-radius: var(--rsbs-overlay-rounded, 16px);
    display: flex;
    background: #fff;
    background: var(--rsbs-bg, #fff);
    flex-direction: column;
    height: 0px;
    height: var(--rsbs-overlay-h, 0px);
    transform: translate3d(0, 0px, 0);
    transform: translate3d(0, var(--rsbs-overlay-translate-y, 0px), 0);
    will-change: height;
    ${({ fullPage }) =>
      fullPage &&
      css`
        border-radius: 0;
        box-shadow: none;
      `};
  }

  [data-rsbs-overlay]:focus {
    outline: none;
  }

  [data-rsbs-is-blocking='false'] [data-rsbs-overlay] {
    box-shadow: 0 -5px 60px 0 rgba(38, 89, 115, 0.11),
      0 -1px 0 rgba(38, 89, 115, 0.05);
  }

  [data-rsbs-overlay],
  [data-rsbs-root]:after {
    max-width: auto;
    max-width: var(--rsbs-max-w, auto);
    margin-left: env(safe-area-inset-left);
    margin-left: var(--rsbs-ml, env(safe-area-inset-left));
    margin-right: env(safe-area-inset-right);
    margin-right: var(--rsbs-mr, env(safe-area-inset-right));
  }

  [data-rsbs-overlay],
  [data-rsbs-backdrop],
  [data-rsbs-root]:after {
    z-index: 3;
    -ms-scroll-chaining: none;
    overscroll-behavior: none;
    touch-action: none;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  [data-rsbs-backdrop] {
    top: -60px;
    bottom: -60px;
    background-color: rgba(0, 0, 0, 0.6);
    background-color: var(--rsbs-backdrop-bg, rgba(0, 0, 0, 0.6));
    will-change: opacity;
    cursor: pointer;
    opacity: 1;
  }

  [data-rsbs-is-dismissable='false'] [data-rsbs-backdrop] {
    cursor: ns-resize;
  }

  [data-rsbs-root]:after {
    content: '';
    pointer-events: none;
    background: #fff;
    background: var(--rsbs-bg, #fff);
    height: 1px;
    transform-origin: bottom;
    transform: scale3d(1, 0, 1);
    transform: scale3d(1, var(--rsbs-antigap-scale-y, 0), 1);
    will-change: transform;
  }

  [data-rsbs-footer],
  [data-rsbs-scroll] {
    flex-shrink: 1;
    flex-grow: 1;
    -webkit-tap-highlight-color: revert;
    -webkit-touch-callout: revert;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    -moz-user-select: auto;
    user-select: auto;
    overflow: auto;
    -ms-scroll-chaining: none;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;

    /*  hide scrollbar*/
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  [data-rsbs-scroll]:focus {
    outline: none;
  }

  [data-rsbs-has-footer='false'] [data-rsbs-content] {
    padding-bottom: env(safe-area-inset-bottom);
  }

  [data-rsbs-content] {
    /* The overflow hidden is to ensure any margin on child nodes are included when the resize observer is measuring the height */
    overflow: visible;
  }

  [data-rsbs-footer] {
    box-shadow: 0 -1px 0 rgba(46, 59, 66, calc(1 * 0.125)), 0 2px 0 #fff;
    box-shadow: 0 -1px 0 rgba(46, 59, 66, calc(var(--rsbs-content-opacity, 1) *
              0.125)),
      0 2px 0 var(--rsbs-bg, #fff);
    overflow: visible;
    z-index: 1;
    padding-bottom: calc(16px + env(safe-area-inset-bottom));
  }

  [data-rsbs-is-dismissable='true'] [data-rsbs-header] > *,
  [data-rsbs-is-dismissable='true'] [data-rsbs-scroll] > *,
  [data-rsbs-is-dismissable='true'] [data-rsbs-footer] > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-header]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-header]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-scroll]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-scroll]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-footer]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-footer]
    > * {
    opacity: 1;
    opacity: var(--rsbs-content-opacity, 1);
  }

  [data-rsbs-is-dismissable='true'] [data-rsbs-backdrop],
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-backdrop],
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-backdrop] {
    opacity: 1;
    opacity: var(--rsbs-backdrop-opacity, 1);
  }

  [data-rsbs-state='closed'],
  [data-rsbs-state='closing'] {
    /* Allows interactions on the rest of the page before the close transition is finished */
    pointer-events: none;
  }

  [data-rsbs-header] {
    flex-shrink: 0;
    cursor: ns-resize;
    padding: 16px;
  }

  [data-rsbs-header] {
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
    padding-top: calc(20px + env(safe-area-inset-top));
    padding-bottom: 8px;
    transition: all 0.2s ease-in-out;
  }

  [data-rsbs-header]:before {
    transition: all 0.1s ease-in-out;
    visibility: ${({ fullPage }) => (!fullPage ? 'visible' : 'hidden')};
    position: absolute;
    content: '';
    display: block;
    width: 36px;
    height: 4px;
    top: calc(8px + env(safe-area-inset-top));
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    background-color: hsla(0, 0%, 0%, 0.14);
    background-color: var(--rsbs-handle-bg, hsla(0, 0%, 0%, 0.14));
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
    [data-rsbs-header]:before {
      transform: translateX(-50%) scaleY(0.75);
    }
  }

  [data-rsbs-has-header='false'] [data-rsbs-header] {
    box-shadow: none;
    padding-top: calc(12px + env(safe-area-inset-top));
  }
`;
