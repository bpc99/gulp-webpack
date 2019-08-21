const gulp = require('gulp');
const prod = require('./config/gulpfile.prod.js');
const dev = require('./config/gulpfile.dev.js');
const config = require('./config/index.js');
const $ = require('gulp-load-plugins')();
const del = require('del');

dev();  //启动开发环境，gulp dev
prod(); //启动生产环境,  gulp prod

gulp.task('clean',function(){
    return del([config.dev,config.dist]);
});
gulp.task('sprite', function () {  //生成雪碧图，gulp sprite,分别生成dev和dist
    let spriteData = gulp.src(config.src+'/sprites/*.png')
        .pipe($.spritesmith({
            imgName: 'sprites/images/sprite.png',
            cssName: 'sprites/css/sprite.css',
            padding: 2, // 图片之间的间距
            algorithm: 'left-right', //图片排列格式，默认是top-down，我这里稍微修改下
            algorithmOpts: {sort: false} //是否排序
        }));
    return spriteData.pipe(gulp.dest(config.dist)).pipe(gulp.dest(config.dev));
});
//注册默认任务,4.0之后提供了series：同步，paralle：异步
