'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  // 初始化方法，用于获取项目状态、配置等
  initializing() {}

  // 用户交互
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the fine ${chalk.red('generator-fan')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'title',
        message: 'Your project title:'
      },
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  // 保存配置，创建 .editorconfig等文件
  configuring() {}

  // 执行文件写操作，拷贝模板等
  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      { title: this.props.title }
    );
  }

  // 执行安装操作，this.installDependencies方法默认执行npm install && bower install
  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  // 最后执行，可清除临时文件等
  end() {}
};
