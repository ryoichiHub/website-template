'use strict';

// Create Fractal instance and export
const fractal = module.exports = require('@frctl/fractal').create();

// Project title Name
fractal.set('project.title', 'Design Guidelines');

// components directory
fractal.components.set('path', __dirname + '/docs/design-guides/components');

// documentation directory
fractal.docs.set('path', __dirname + '/docs/design-guides/documentations');

// Browsersync setting
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
  open: true,
  port: 4000,
  ui: {
    port: 9090
  }
});

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  skin: 'black',
  lang: 'ja'
  // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default
