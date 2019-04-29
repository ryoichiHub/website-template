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
    .pipe(inject(gulp.src([`${config.rootSrc}/01_atom/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// atom:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/02_molecule/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// molecule:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/03_organism/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// organism:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/04_template/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// template:inject', endtag: '// endinject'})
    )
    .pipe(inject(gulp.src([`${config.rootSrc}/05_page/**/_*.scss`], {read: false}),
      {relative: true, starttag: '// page:inject', endtag: '// endinject'})
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
