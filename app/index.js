import 'sanitize.css';
import React from 'react';
import { render } from 'react-dom';

import App from 'containers/App';

render(<App />, document.getElementById('app'));

module.hot.accept();