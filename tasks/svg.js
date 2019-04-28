import gulp from 'gulp';
import gulpSvgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';

import { svg as config } from './config';

export function svgSprite() {
  const spriteConfig = {
    mode: {
      symbol: {
        dest: '.',
        sprite: 'sprite.svg'
      }
    }
  };

  return gulp
    .src(config.src)
    .pipe(plumber())
    .pipe(gulpSvgSprite(spriteConfig))
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(gulp.dest(config.dest));
}
