import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cleancss from 'gulp-clean-css';
import plumber from 'gulp-plumber';
import gulpStylelint from 'gulp-stylelint';
import inject from 'gulp-inject';
import changed from 'gulp-changed-in-place';

import { sass as config, isProd } from './config';

/**
 * Import Sass partial file.
 */
export function sassInject() {
  const target = gulp.src(config.rootFile);

  return target
    .pipe(inject(gulp.src([`${config.rootSrc}/01_Setting/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// setting:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/02_Tool/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// tool:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/03_Base/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// base:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/04_Layout/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// layout:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/05_Module/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// module:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/06_Theme/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// theme:inject', endtag: '// endinject'})
    )
    .pipe(gulp.dest(config.rootSrc));
}

/**
 * SCSS -> CSS
 */
export function sass() {
  return gulp
    .src(config.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(cleancss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
}

/**
 * Stylelint
 */
export function stylelint() {
  return gulp
    .src(config.src)
    .pipe(changed({ firstPass: true }))
    .pipe(gulpStylelint({
      failAfterError: isProd,
      reporters: [{ formatter: 'verbose', console: true }],
      syntax: 'scss'
    }));
}

export const styles = gulp.series(stylelint, sass);
