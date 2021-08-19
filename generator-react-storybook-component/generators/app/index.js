var Generator = require('yeoman-generator');

const defaultComponentFolder = './src/components';

const kebabize = str => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
     ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
     : letter;
  }).join('');
}

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    this.choices = undefined;
    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  paths(){
    this.sourceRoot();
    this.templatePath('index.js');
  }


  async prompting(){
    this.pathObj = await this.prompt({
        type: 'input',
        name: "components-path",
        message: "Path to your components folder",
        store: true,
        default: defaultComponentFolder
      }
    );
    
    this.nameObj = await this.prompt(
      {
        type: 'input',
        name: "component-name",
        message: "What should your component be called?",
      }
    );

    this.choices = {...this.pathObj, ...this.nameObj};
    console.log(this.choices);
  }
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  writing(){
    
    this.fs.copyTpl(
      this.templatePath('Component.scss'),
      this.destinationPath(`public/${this.choices['component-name']}.scss`),
      { lowercase_name: kebabize(this.choices['component-name']) }
    );

    this.fs.copyTpl(
      this.templatePath('Component.tsx'),
      this.destinationPath(`public/${this.choices['component-name']}.tsx`),
      { name: this.choices['component-name'] }
    );

    this.fs.copyTpl(
      this.templatePath('Component.stories.tsx'),
      this.destinationPath(`public/${this.choices['component-name']}.stories.tsx`),
      { name: this.choices['component-name'] , type: 'todoChangeMe'}
    );

  }

};