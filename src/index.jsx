import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

import 'css/app.less';

ReactDOM.render(<App className="app" />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
