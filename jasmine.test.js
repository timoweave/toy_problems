const util = require('util');
const Jasmine = require('jasmine');
const Reporter = require('jasmine-spec-reporter');
const config_file = 'jasmine.json';

const config_reporter = {
    onComplete: function(passed) {
      const status = passed ? 0 : 1;
      exit(status);
    },
    // timer: new this.jasmine.Timer(),
    print: function() {
      const content = util.format.apply(this, arguments);
      process.stdout.write(content);
    },
    showColors: true,
    jasmineCorePath: this.jasmineCorePath
};

function run_jasmine_tests() {
  const jasmine = new Jasmine();
  const reporter = new Reporter();

  jasmine.loadConfigFile(config_file);
  jasmine.configureDefaultReporter(config_reporter);
  jasmine.addReporter(reporter);
  jasmine.execute();
  return { jasmine : jasmine, reporter: reporter };
}

module.exports = run_jasmine_tests;

if (require.main === module) {
  run_jasmine_tests();
}
