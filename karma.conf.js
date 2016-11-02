module.exports = function(config) {
  config.set({
    basePath: '',
    // https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    files: [
      'node_modules/mocha/mocha.js',
      'node_modules/chai/chai.js',
      'node_modules/expect.js/index.js',
      'toys/**/*.js',
      'spec/**/*.spec.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },
    // https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || 
    // config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.INFO_ERROR,
    autoWatch: true,
    // https://npmjs.org/browse/keyword/karma-launcher 
    // 'Chrome', 'Safari'
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
