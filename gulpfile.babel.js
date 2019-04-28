// 参考：https://www.hypertextcandy.com/gulp-4-frontend-development-starter

// const gulp              = require('gulp');
// const gulpAutoprefixer  = require('gulp-autoprefixer');
// const gulpCleanCSS      = require('gulp-clean-css');
// const gulpRename        = require('gulp-rename');
// const gulpSourcemaps    = require('gulp-sourcemaps');
// const gulpPostcss       = require('gulp-postcss');
// const cssnano           = require('cssnano');
import { series, parallel, watch } from 'gulp';

import { reload, serve } from './tasks/server';
import { styles } from './tasks/styles';
import { scripts } from './tasks/scripts';
import { templates } from './tasks/templates';
import { images } from './tasks/images';
import { clean } from './tasks/clean';

import {
  sass as sassConfig,
  scripts as jsConfig,
  images as imagesConfig,
  templates as templatesConfig
} from './tasks/config';

/**
 * ファイルの変更を監視
 */
function watchFiles() {
  // Sass
  watch(sassConfig.src, series(styles, reload));
  // Templates
  watch(
    [templatesConfig.edges, templatesConfig.data, templatesConfig.helper],
    series(templates, reload)
  );
  // JavaScript
  watch(jsConfig.src, series(scripts, reload));
  // Images
  watch(imagesConfig.src, series(images, reload));
}

/**
 * 開発用ビルド
 */
export const dev = series(
  clean,
  parallel(styles, templates, scripts, images),
  serve,
  watchFiles
);

/**
 * 本番用ビルド
 */
export const build = series(
  clean,
  parallel(styles, templates, scripts, images)
);

// Task Optimization
// var runSequence     = require('run-sequence');
// var browsersync     = require('browser-sync').create();

// var paths = {
//     css:    './*.css',
//     scss:   './assets/scss/**/*.scss'
// };
//
// var destPaths = {
//     css:    './assets/css/'
// };

// var cssSrc = './assets/css/*.css';
// var cssDist = './assets/css/';
//
// var scssSrc = './assets/scss/**/*.scss';

// BrowserSync
// function browserSync(done) {
//     browsersync.init({
//         // https: true,
//         port: 3030,
//         proxy: {
//             target: 'https://wpdev.increment-log.com/',
//         }
//     });
//     done();
// }
//
// // BrowserSync Reload
// function browserSyncReload(done) {
//     browsersync.reload();
//     done();
// }

// Sass task
// function sassCompile() {
//     return gulp
//         .src('./assets/scss/**/*.scss')
//         .pipe($.sourcemaps.init())
//         .pipe($.plumber({
//             errorHandler: function (error) {
//                 console.log(error.message);
//                 this.emit('end');
//             }}))
//         // .pipe(sassInject())
//         .pipe($.sass({outputStyle: 'expanded'}))
//         // .pipe($.sass({
//         //     includePaths: [].concat(
//         //         require('bourbon').includePaths,
//         //         require('node-neat').includePaths
//         //     )
//         // }))
//         .pipe($.sourcemaps.write())
//         // .pipe(postcss([autoprefixer(), cssnano()]))
//         .pipe(gulp.dest('./assets/css/'))
//         .pipe(browsersync.stream());
// }

// Sass Inject
// function sassInject() {
//     var target = gulp.src('./assets/scss/_import.scss');
//
//     return target
//         .pipe($.inject(gulp.src(['./assets/scss/01_atom/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// atom:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/02_molecule/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// molecule:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/03_organism/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// organism:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/04_template/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// template:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/05_page/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// page:inject', endtag: '// endinject'})
//         )
//         .pipe(gulp.dest('./assets/scss/'));
// }
// gulp.task('inject-scss', function () {
//     var target = gulp.src('./assets/scss/_import.scss');
//
//     return target
//         .pipe($.inject(gulp.src(['./assets/scss/01_atom/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// atom:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/02_molecule/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// molecule:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/03_organism/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// organism:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/04_template/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// template:inject', endtag: '// endinject'})
//         )
//         .pipe($.inject(gulp.src(['./assets/scss/05_page/**/_*.scss'], {read: false}),
//             {relative: true, starttag: '// page:inject', endtag: '// endinject'})
//         )
//         .pipe(gulp.dest('./assets/scss/'));
// });

// Watch files
// function watchFiles() {
//     // TODO: ファイル新規作成 or 削除時にSass Injectを実行する
//     gulp.watch(['./assets/scss/**/*', '!./assets/scss/_import.scss'], sassCompile);
//     gulp.watch('./assets/js/**/*', browserSyncReload);
//     gulp.watch('./*.html', browserSyncReload);
//     gulp.watch('./**/*.php', browserSyncReload);
//     gulp.watch('./assets/css/**/*.css', browserSyncReload);
//     gulp.watch('./assets/js/**/*.js', browserSyncReload);
//     gulp.watch('./assets/img/**/*.*', browserSyncReload);
// }

// gulp.task('watch', gulp.parallel(watchFiles, browserSync));

// gulp.task('gcmq', function(){
//     gulp.src(cssSrc)
//         .pipe($.groupCssMediaQueries())
//         .pipe(gulp.dest(cssDist));
// });
//
// gulp.task('csscomb', function() {
//     return gulp.src(cssSrc)
//         .pipe($.csscomb())
//         .pipe(gulp.dest(cssDist));
// });

// Minify & Optimize
// gulp.task('minify-css', function() {
//     return gulp.src(cssSrc)
//     // .pipe($.sourcemaps.init())
//         .pipe($.cleanCss({ compatibility: '*' }))
//         // .pipe($.rename({
//         //     extname: '.min.css'
//         // }))
//         // .pipe($.sourcemaps.write())
//         .pipe(gulp.dest(cssDist));
// });

// gulp.task('imagemin', function () {
//     gulp.src('/{,**/}*.{png,jpg,gif}')
//         .pipe($.imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [$.pngquant()]
//         }))
//         .pipe(gulp.dest('./assets/img'));
// });
//
// gulp.task('svg', function () {
//     gulp.src('./assets/svg/sprites/*.svg')
//         .pipe($.svgmin())
//         .pipe($.svgstore({ inlineSvg: true }))
//         .pipe($.cheerio({
//             run: function ($, file) {
//                 $('svg').addClass('hide');
//                 $('[fill]').removeAttr('fill');
//             },
//             parserOptions: { xmlMode: true }
//         }))
//         .pipe(gulp.dest('assets/svg'));
// });
//
// gulp.task('csslint', function() {
//     gulp.src(cssSrc)
//         .pipe($.csslint())
//         .pipe($.csslint.reporter());
// });
//
// gulp.task('browser-sync-design', function() {
//     browsersync.init({
//         server: {
//             baseDir: './'
//         }
//     });
//     gulp.watch(scssSrc, gulp.series(sassInject, sassCompile));
//     gulp.watch('./*.html', browsersync.reload);
//     gulp.watch('./assets/css/**/*.css', browsersync.reload);
//     gulp.watch('./assets/js/**/*.js', browsersync.reload);
//     gulp.watch('./assets/img/**/*.*', browsersync.reload);
// });
//
// gulp.task('browser-sync-proxy', function(){
//     browsersync.init({
//         https: true,
//         proxy: {
//             target: 'https://wpdev.increment-log.com/',
//         }
//     });
//     gulp.watch(scssSrc, gulp.series(sassInject, sassCompile));
//     gulp.watch('./*.html', browsersync.reload);
//     gulp.watch('./**/*.php', browsersync.reload);
//     gulp.watch('./assets/css/**/*.css', browsersync.reload);
//     gulp.watch('./assets/js/**/*.js', browsersync.reload);
//     gulp.watch('./assets/img/**/*.*', browsersync.reload);
// });
//
// gulp.task('gulp-uglify', function() {
//     gulp.src(['./js/**/*.js','!./js/min/**/*.js'])
//         .pipe($.uglify())
//         .pipe(gulp.dest('./js/min'));
// });
//
// gulp.task('default', gulp.series( gulp.parallel('browser-sync-design')));

// gulp.task('dist', function(callback) {
//     return runSequence(
//         'sass',
//         'gcmq',
//         'csscomb',
//         'minify-css',
//         callback
//     );
// });
