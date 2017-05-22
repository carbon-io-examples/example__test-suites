var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main
var assert = require('assert')

/**************************************************************************
 * AndTests
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
    name: 'AndTests',

    /**********************************************************************
     * description
     */
    description: 'And tests',

    /**********************************************************************
     * doTest
     */
    doTest: function() {
      assert((true && true) == true)
      assert((true && false) == false)
      assert((false && true) == false)
      assert((false && false) == false)
    }
    
  })
})
