/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

var through2 = require('through2');
var concat = require('concat-stream');
var _ = require('lodash');

module.exports = function(data) {
	return through2.obj(function(file, enc, callback) {
		var that = this;

		file.pipe(concat(function(buf) {
			var contents = {};
			contents.text = buf.toString();
			contents.metadata = {};
			contents.metadata.title = file.title;
			contents.metadata.author = file.author;
			contents.metadata.time = file.time;
			contents.metadata.categories = file.categories;

			file.contents = new Buffer(JSON.stringify(contents));

			that.push(file);
			callback();
		}));
	});
};
