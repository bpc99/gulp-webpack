const SRC_DIR='./src/';   //源路径
const DEV_DIR='./dev/';   //生成开发环境的文件
const DIST_DIR='./dist/';  //生成生产环境的文件

const config={
    src: SRC_DIR,
    dist: DIST_DIR,
    dev: DEV_DIR,
    html:{
        src: SRC_DIR+'*.html',
        dev: DEV_DIR,
        dist: DIST_DIR
    },
    assets:{
        src: SRC_DIR+'assets/**/*',
        dev: DEV_DIR+'assets',
        dist: DIST_DIR+'assets'
    },
    style:{
        src: SRC_DIR+'style/*.scss',
        dev: DEV_DIR+'style',
        dist: DIST_DIR+'style'
    },
    script:{
        src: SRC_DIR+'script/*.js',
        dev: DEV_DIR+'script',
        dist: DIST_DIR+'script'
    },
    img:{
        src: SRC_DIR+'images/**/*',
        dev: DEV_DIR+'images',
        dist: DIST_DIR+'images'
    }
};

module.exports = config;  //把这个接口暴露给别的文件用
