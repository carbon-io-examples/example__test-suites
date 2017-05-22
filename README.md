# Test Suites example

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

## Installing

We encourage you to clone the git repository so you can play around with the code. 

```sh
% git clone git@github.com:carbon-io/example__test-suites.git
% cd example__test-suites
% npm install
```

## Running the example test suite

```sh
% node test
```

or

```sh
% node test/index.js
```

or 

```sh
% npm test
```

