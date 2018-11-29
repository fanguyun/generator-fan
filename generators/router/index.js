const Generator = require('yeoman-generator');

module.exports = class extends Generator{
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1() {
    this.log('method1 just run!');
  }
  method2(){
    this.log('method1 just run!');
  }
};
