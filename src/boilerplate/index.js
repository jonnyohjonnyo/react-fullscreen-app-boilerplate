// sourced from: https://github.com/gaearon/redux-devtools/blob/64f58b7010a1b2a71ad16716eb37ac1031f93915/examples/todomvc/index.js

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
    <AppContainer
      component={Root}
      props={{ store }}
    />,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        render(
            <AppContainer
              component={require('./containers/Root').default}
              props={{ store }}
            />,
            document.getElementById('root')
        );
    });
}
