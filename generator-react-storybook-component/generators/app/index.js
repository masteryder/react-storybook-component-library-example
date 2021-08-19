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

    this.typeObj = await this.prompt({
      type: 'list',
      name: "component-type",
      message: "Where should the component be stored?",
      choices: ["00-quarks","01-atoms","02-molecules","03-organisms","04-templates","05-pages"]
    })

    this.choices = {...this.pathObj, ...this.nameObj, ...this.typeObj};
    console.log(this.choices);
  }
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  writing(){
    let path = `${this.choices['components-path']}/${this.choices['component-type']}/${this.choices['component-name']}`;
    this.fs.copyTpl(
      this.templatePath('Component.scss'),
      this.destinationPath(`${path}/${this.choices['component-name']}.scss`),
      { lowercase_name: kebabize(this.choices['component-name']) }
    );

    this.fs.copyTpl(
      this.templatePath('Component.tsx'),
      this.destinationPath(`${path}/${this.choices['component-name']}.tsx`),
      { name: this.choices['component-name'] }
    );

    this.fs.copyTpl(
      this.templatePath('Component.stories.tsx'),
      this.destinationPath(`${path}/${this.choices['component-name']}.stories.tsx`),
      { name: this.choices['component-name'] , type: this.choices['component-type']}
    );

  }

};