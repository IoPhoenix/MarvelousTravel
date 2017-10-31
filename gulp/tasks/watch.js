const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();
    

// task to  
gulp.task('watch', function() {
    
        browserSync.init({
            notify: false,
            server: {
                baseDir: 'app'
            }
        });
    
        watch('./app/index.html', function() {
            // auto refresh html
           browserSync.reload();
        });
    
        watch('./app/assets/styles/**/*.css', function() {
            gulp.start('cssInject');
        });
    });
    
    
    // inject css to html without reload
    // when styles task run and complete
    gulp.task('cssInject', ['styles'], function() {
        return gulp.src('./app/temp/styles/styles.css')
                    .pipe(browserSync.stream());
    });