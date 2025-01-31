/**
 * Module dependencies
 */
const express = require('express')

const auth = require('../middlewares/auth')
const webController = require('../controllers/webController')
const { catchErrors } = require('../handlers/errorHandlers')

const router = express.Router()

/**
 * `Assignment` route used as `/assignment`
 * Return the assignment page used in classroom
 * @method {GET} return rendered `assignment.pug`
 * @method {POST} handle create new assignment form on `assignment.pug` page
 */
router.get('/', auth.isSignedIn, auth.validateSection, catchErrors(webController.getAssignment))
router.post('/', auth.isSignedIn, catchErrors(webController.createAssignment))
  // .use(auth.isSignedIn)
  // .route('/')
  // .get(webController.getAssignment)
  // .post(catchErrors(webController.createAssignment))

router.post('/updateAssignment', auth.isSignedIn, catchErrors(webController.updateAssignment))

/**
 * Expose `router`
 */
module.exports = router
