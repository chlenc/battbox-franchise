import * as React from 'react';
import { render } from 'react-dom';
require('dotenv').config()
import App from './layout/App';
import './styles.less';
console.log('v1.0.2')
render(<App/>, document.getElementById('container')!);
