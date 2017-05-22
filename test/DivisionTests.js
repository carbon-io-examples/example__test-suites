var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main
var assert = require('assert')

/**************************************************************************
 * DivisionTests
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
    name: 'DivisionTests',

    /**********************************************************************
     * description
     */
    description: 'Division tests',

    /**********************************************************************
     * doTest
     */
    doTest: function() {
      assert(1 / 1 == 1)
      assert(6 / 2 == 3)
    }
    
  })
})
