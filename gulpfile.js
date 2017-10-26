var gulp=require("gulp"),
	sass=require("gulp-sass");
//sass编译
gulp.task("sass",function(){
	gulp.src('scss/index.scss').pipe(sass()).pipe(gulp.dest('css'))
})
//自动监听的任务
gulp.task("watchsass",function(){
	gulp.watch("scss/index.scss","gulp.task("sass",function(){
	gulp.src('scss/index.scss').pipe(sass()).pipe(gulp.dest('css'))
})");
});