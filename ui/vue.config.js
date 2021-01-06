// Import webpack-bundle-tracker
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
	// Path where the bundle of static files will be available
	publicPath: "http://0.0.0.0:8080/",
	// Directory where the static files bundle will be created
	outputDir: './dist/',
	// Stable to compile at runtime
	runtimeCompiler: true,

	// The application entry points.
	pages: {
		main: {
			// Entry for the page
			entry: 'src/main.js',
		}
	},

	// Webpack-stats configuration to be used by Django
	chainWebpack: config => {
		config.optimization.splitChunks(false)
		
		config.plugin('BundleTracker')
			// The file that will map the project statics
			.use(BundleTracker, [{filename: './dist/webpack-stats.json'}])

		config.resolve.alias.set('__STATIC__', 'static')

		// Host to server
		config.devServer
			.public('http://0.0.0.0:8080')
			.host('0.0.0.0')
			.port(8080)
			.hotOnly(true)
			.watchOptions({poll: 1000})
			.https(false)
			.headers({"Access-Control-Allow-Origin": ["\*"]})
	}
};