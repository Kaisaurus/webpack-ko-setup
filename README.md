# Webpack-KO-Setup (for Udacity nanodegree)

This is a basic Webpack 2 setup I made for the Udacity nanodegree Maps project. I hope this repository will spare some of the pain I went through to get this working. (I was a complete newbie to packaging)
I did it using the ES6/ES2015 syntax which seems confusing at first but seems like a good addition to learn since this will soon be the new standard.

The tools I used are:
- Webpack 
- Babel (to translate javascript written in the new ES6/ES2015 syntax to work in all browsers)
- Sass
- KnockoutJS

As a prerequisite I recommended you to install:
- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com) or other package manager like [npm](https://www.npmjs.com) 
- webpack and webpack-dev-server global install. (Global install is recommended so these commands can be used in the terminal.) This can be done with the following command:
```sh
yarn add global webpack 
yarn add global webpack-dev-server 
```

## Quick setup

The quick setup is for ease of use and preview purposes. The walkthrough setup is recommended to better understand how to set this us for yourself.

```sh
git clone https://github.com/Kaisaurus/FSND_P06.git
cd FSND_P06
yarn install
webpack-dev-server
```
## Walkthrough

I wanted to make a walkthrough to help people understand how to build this themselves, but it feels like the resources which helped me the most in understanding the basics will probably do a much better job at this:

- [Blog post with explanation about webpack and a walkthough](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783)
- [Series of youtube videos which walks through the basic setup](https://www.youtube.com/playlist?list=PLnUE-7Cz5mHFU_qrXCxZlk0925nCMYKVS)

<!--
The following steps will allow you to create this setup from scratch.

Create a new directory and initiate yarn. This will create a package.json file which will hold the module specifications for your project.
(-y answers yes to all questions)
```sh
mkdir webpack-ko-test
cd webpack-ko-test
yarn init -y 
```

Create the following folders. The src folder will represent the source folder in which we will write all our code.
```
└── src
    └── html
    └── js
    └── styles
```

Add `webpack` and `webpack-dev-server` as a dev- dependancy. (-D means its a development dependancy not used for production)
```sh
yarn add webpack webpack-devserver -D 
```
Note that this command did the following: 
- create a node_modules folder which will hold the modules you use in your project
- create a yarn.lock file which holds details about versions etc. to make sure someone else who uses your project will have the same module versions as you
- edits your package.json file to add the `"devDependencies"` section.



Now we will create a new file in the root directory called `webpack.config.js`. This file contains the specifications on how webpack will process your project. initially we will 

```json

const path = require('path');

module.exports = {

  entry: {
    app: path.join(__dirname, 'src/js', 'app.js'),
    about: path.join(__dirname, 'src/js', 'about.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist',
  },

};

```
-->
