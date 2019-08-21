//配置开发的文件
const gulp = require('gulp'); //引用gulp插件
const $ = require('gulp-load-plugins')();  //自动加载插件，可以省略一个一个引用插件
const config = require('./index.js'); //引用配置的路径文件
const open = require('open'); //开启服务
const named = require('vinyl-named'); //输出时对应webpack的文件名 防止输出hash值
const webpack = require('webpack-stream'); //引入webpack
const notify = require("gulp-notify");//为gulp-plumber 报错提供弹窗

function dev(){
    gulp.task('html:dev', function(){
        return gulp.src(config.html.src)
            .pipe($.fileInclude())
            .pipe(gulp.dest(config.html.dev))
            .pipe($.connect.reload())
    });
    gulp.task('assets:dev', function(){
        return gulp.src(config.assets.src)
            .pipe(gulp.dest(config.assets.dev))
            .pipe($.connect.reload())
    });
    gulp.task('style:dev', function(){
        return gulp.src(config.style.src)
            .pipe($.sass())
            .pipe($.autoprefixer({
                browseers: ['last 2 versions','Firefox>=20','last 2 Explorer versions','last 3 Safari versions'],
                cascade: true
            }))
            .pipe(gulp.dest(config.style.dev))
            .pipe($.connect.reload())
    });
    gulp.task('script:dev', function(){
        return gulp.src(config.script.src)
            .pipe($.plumber({errorHandler: notify.onError({title: '编译出错啦',message: '<%=error%>'})}))
            .pipe(named())
            .pipe(webpack(require("../webpack.dev.js")))
            .pipe(gulp.dest(config.script.dev))
            .pipe($.connect.reload())
    });
    gulp.task('img:dev', function(){
        return gulp.src(config.img.src)
            .pipe($.imagemin())
            .pipe(gulp.dest(config.img.dev))
            .pipe($.connect.reload())
    });

    gulp.task('dev',gulp.series('html:dev','style:dev','script:dev','img:dev'));

    gulp.task('server', function(){
        $.connect.server({
            root: config.dev,
            port: 3030,
            livereload: true
        });
        open('http://localhost:3030');
        gulp.watch(config.html.src, gulp.series('html:dev'));
        gulp.watch(config.html.src, gulp.series('style:dev'));
        gulp.watch(config.html.src, gulp.series('script:dev'));
        gulp.watch(config.html.src, gulp.series('img:dev'));
    });
}
module.exports=dev;
