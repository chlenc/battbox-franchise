import * as React from 'react';
import {render} from 'react-dom';

import App from './layout/App';
import './styles.less';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

require('dotenv').config()

const version = require('../package.json').version;
console.log(version)
render(<App/>, document.getElementById('container')!);
