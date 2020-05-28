const { log } = console;
const fs = require('fs');
const globby = require('globby');
const { resolve, join } = require('path');
(async () => {
	// eslint-disable-next-line indent
	const paths = await globby(['**.js'], { gitignore: true });

	console.log(paths);
	for (let i of paths) {
		// fs.readFile(join(__dirname, i), (err, buffer) => {
		// 	if (!err) {
		// 		log(buffer.toString());
		// 		return;
		// 	}
		// 	log(err);
		// });
		if (i.indexOf('index') === -1) {
			require(join(__dirname, i));
		}
	}
	//=> ['unicorn', 'rainbow']
})();
