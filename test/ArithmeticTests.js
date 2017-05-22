var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main

/**************************************************************************
 * ArithmeticTests
 */
__(function() {
  module.exports = o({

    /**********************************************************************
     * _type
     */
    _type: carbon.testtube.Test,
    
    /**********************************************************************
     * name
     */
    name: 'ArithmeticTests',

    /**********************************************************************
     * description
     */
    description: 'Arithmetic tests',

    /**********************************************************************
     * tests
     */
    tests: [
      _o('./AdditionTests'),
      _o('./SubtractionTests'),
      _o('./MultiplicationTests'),
      _o('./DivisionTests'),
    ]
  })
})
