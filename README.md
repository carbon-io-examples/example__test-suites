# Test Suites example

[![Build Status](https://img.shields.io/travis/carbon-io-examples/example__test-suites.svg?style=flat-square)](https://travis-ci.org/carbon-io-examples/example__test-suites) ![Carbon Version](https://img.shields.io/badge/carbon--io-0.7-blue.svg?style=flat-square)

This example illustrates the use of Carbon.io to implement test suites using Test-tube.

Test suites are used to organize and manage large sets of tests. In this example we create the following test tree
via Test-tube:

```
MathTests
  * ArithmeticTests
    - AdditionTests
    - SubtractionTests
    - MultiplicationTests
    - DivisionTests
  * LogicTests
    - AndTests
    - OrTests
    - NotTests
```

The root of the test tree (the top-level test) is located in ```test/index.js```. 

## Installing

We encourage you to clone the git repository so you can play around with the code. 

```sh
$ git clone -b carbon-0.7 git@github.com:carbon-io-examples/example__test-suites.git
$ cd example__test-suites
$ npm install
```

## Running the example test suite

```sh
$ node test
```

or

```sh
$ node test/index.js
```

or 

```sh
$ npm test
```

