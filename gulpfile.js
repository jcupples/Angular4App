/// <binding BeforeBuild='_default, restore' ProjectOpened='watch' />
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var del = require('del');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');
var paths = { webroot: "./wwwroot/" };

paths.appSrc = "./app/";
paths.appDest = paths.webroot + "app/";
paths.npmSrc = "./node_modules/";
paths.npmDest = paths.webroot + "node_modules/";

//*************************************************************
// _default task - quickly preps the app
//*************************************************************

gulp.task('_default', ['restore', 'build:dev'], function () { process.exit(); });

//*************************************************************
// _clean task - quickly cleans the wwwroot folder
//*************************************************************

gulp.task('_clean', ['clean'], function () { process.exit(); });

//*************************************************************
// Restore Tasks - Copy NPM packages to the wwwroot folder
//*************************************************************

gulp.task('restore:zone.js', function () {
    gulp.src([
        paths.npmSrc + '**/zone.js/dist/*.js'
    ]).pipe(gulp.dest(paths.npmDest));
});

gulp.task('restore:reflect-metadata', function () {
    gulp.src([
        paths.npmSrc + '**/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(paths.npmDest));
});

gulp.task('restore:systemjs', function () {
    gulp.src([
        paths.npmSrc + '**/systemjs/dist/*.js'
    ]).pipe(gulp.dest(paths.npmDest));
});

gulp.task('restore:rxjs', function () {
    gulp.src([
        paths.npmSrc + 'rxjs/**/*.js'
    ]).pipe(gulp.dest(paths.npmDest + 'rxjs/'));
});

gulp.task('restore:angular', function () {
    gulp.src([
        paths.npmSrc + '@angular/**/*.js'
    ]).pipe(gulp.dest(paths.npmDest + '@angular/'));
});

gulp.task('restore:bootstrap', function () {
    gulp.src([
        paths.npmSrc + 'bootstrap/dist/**/*.*'
    ]).pipe(gulp.dest(paths.npmDest + 'bootstrap/dist/'));
});

gulp.task('restore', [
    'restore:zone.js',
    'restore:rxjs',
    'restore:angular',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:bootstrap'
]);

//*************************************************************
// Build Tasks - Transpiles/Compiles and preps the app
//*************************************************************

gulp.task('build:typescript', function () {
    var tsResult = gulp.src(paths.appSrc + '**/*.ts')
        .pipe(tsProject());

    return merge([
        tsResult.js.pipe(gulp.dest(paths.appDest))
    ]);
});

gulp.task('build:copy:typescript', ['build:typescript'], function () {
    return gulp.src([paths.appSrc + '**/*.ts',
    paths.appSrc + '**/*.js.map'])
        .pipe(gulp.dest(paths.appDest));
});

gulp.task('build:html', function () {
    return gulp.src([paths.appSrc + '**/*.html'])
        .pipe(gulp.dest(paths.appDest));
});

gulp.task('build:sass', function () {
    return gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.appDest));
});

gulp.task('build:dev', [
    'build:sass',
    'build:html',
    'build:copy:typescript'
]);

//*************************************************************
// Clean wwwroot - Cleans the entire wwwroot files prior to Build to wipe all prior build fragments.
//*************************************************************

gulp.task('clean:wwwroot', function () {
    return del(['wwwroot/app', 'wwwroot/node_modules']);
});

gulp.task('clean', ['clean:wwwroot']);

//*************************************************************
// Watch Tasks - Continuously watches the app for changes
//*************************************************************
gulp.task('watch', ['build:sass', 'build:html', 'build:copy:typescript'], function () {
    gulp.watch(paths.appSrc + '**/*.ts', ['build:copy:typescript']);
    gulp.watch(paths.appSrc + '**/*.scss', ['build:sass']);
    gulp.watch(paths.appSrc + '**/*.html', ['build:html']);
});