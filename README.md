# `stratic-post-to-json-data`

[Gulp][1] plugin to take a Vinyl file with [Stratic][2] post information (for example, something that's been parsed with [`stratic-parse-header`][3]) and make the file contents JSON describing the post. This is particularly useful when paired with something like [`gulp-jade-template`][4].

## Installation

    npm install stratic-post-to-json-data

## Usage

`gulpfile.js`:

```js
var gulp = require('gulp')
var straticParseHeader = require('stratic-parse-header');
var straticToJson = require('stratic-post-to-json-data');

gulp.task('parse', function() {
    gulp.src('*.md')
        .pipe(straticParseHeader())
        .pipe(straticToJson());
});
```

Each file's contents are now JSON containing the post Markdown and associated metadata (title, author, timestamp and categories).

## JSON format

This plugin transforms file contents into a JSON object with the following properties:

`text` (`String`) - The post content (i.e. whatever the file's contents were before)

`metadata` (`Object`) — contains `title`, `author`, `time` and `categories` keys which are the same as in [`stratic-parse-header`][3]

## License

LGPL 3.0+

## Author

Alex Jordan <alex@strugee.net>

 [1]: http://gulpjs.com/
 [2]: https://github.com/strugee/generator-stratic
 [3]: https://npmjs.com/package/stratic-parse-header
 [4]: https://npmjs.com/package/gulp-jade-template
