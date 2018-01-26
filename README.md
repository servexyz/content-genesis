# Content Genesis

[![Build Status](https://travis-ci.org/servexyz/content-genesis.svg?branch=master)](https://travis-ci.org/servexyz/content-genesis)

## Install

```
yarn add content-genesis
const { template } = require('content-genesis');
```

## Use

```js
let foo = { variable1: "Foo", variable2: "Bar" };
let fooTemplate = template("/path/to/template", foo);
```

* See [test](./tests/content.test.js) for more detailed code.

## How it works

1. You define a template ( like this [example](./templates/sample.template.js) )
2. Next, you define the variables which will be interpolated
   `eg. let foo = {component: "Foo"}`
3. You call `template(/template/path, variablesObject)`

## Related

* [file-genesis](https://github.com/servexyz/file-genesis)
