# Content Genesis

[![Build Status](https://travis-ci.org/servexyz/content-genesis.svg?branch=master)](https://travis-ci.org/servexyz/content-genesis)

## Install

```bash
yarn add content-genesis
```

## Use

```js
const { template } = require("content-genesis");
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

* `file-genesis` [@github](https://github.com/servexyz/file-genesis) | [@npm](https://www.npmjs.com/package/file-genesis)
