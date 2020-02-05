import * as React from 'react';
import {render} from 'react-dom';

import App from './layout/App';
import './styles.less';

require('dotenv').config()

const version = require('../package.json').version;
console.log(version)
render(<App/>, document.getElementById('container')!);
