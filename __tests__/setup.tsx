import { AppContext } from '@/context/App';
import { render } from '@testing-library/react';
import { Global } from '@/models/global'
import { AppContextModel } from '@/models/context';

declare const global: Global;

global.appRenderWrapper = (ui, appProps: AppContextModel) => (
  render(
    <AppContext.Provider value={{...appProps}}>
      {ui}
    </AppContext.Provider>
  )
)
