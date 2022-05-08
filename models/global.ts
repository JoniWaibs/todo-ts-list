import { RenderResult } from '@testing-library/react';

export interface Global {
  appRenderWrapper(
    ui: JSX.Element,
    appProps?: any
  ): RenderResult,
}