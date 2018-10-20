import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

import Home from './Home';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

import * as serviceWorker from './serviceWorker';

import eot from './fonts/fontello.eot';
import svg from './fonts/fontello.svg';
import ttf from './fonts/fontello.ttf';
import woff from './fonts/fontello.woff';

injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: 'fontello';
    src: url('${eot}?80642114');
    src: url('${eot}?80642114#iefix') format('embedded-opentype'),
          url('${woff}?80642114') format('woff'),
          url('${ttf}?80642114') format('truetype'),
          url('${svg}?80642114#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`;

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
