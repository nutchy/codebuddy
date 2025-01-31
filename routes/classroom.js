/**
 * Module dependencies
 */
const express = require('express')

const auth = require('../middlewares/auth')
const webController = require('../controllers/webController')
const { catchErrors } = require('../handlers/errorHandlers')

const router = express.Router()

/**
 * `Classroom` route used as `/classroom`
 * Return the classroom page
 * @method {GET} return rendered `classroom.pug`
 * @method {POST} handle create new section form on `lobby.pug` page
 */
router.get('/', auth.isSignedIn, auth.validateSection, catchErrors(webController.getSection))
router.post('/', auth.isSignedIn, catchErrors(webController.createSection))

router.get('/searchStudentByPurpose', auth.isSignedIn, catchErrors(webController.searchStudentByPurpose))
router.get('/getStudentsFromSection', auth.isSignedIn, catchErrors(webController.getStudentsFromSection))
router.get('/searchStudent', auth.isSignedIn, catchErrors(webController.searchStudent))
router.put('/updatePairingSession', auth.isSignedIn, catchErrors(webController.updatePairingSession))
router.put('/resetPair', auth.isSignedIn, catchErrors(webController.resetPair))
router.post('/joinClass', auth.isSignedIn, catchErrors(webController.joinClass))
router.post('/updateSection', auth.isSignedIn, catchErrors(webController.updateSection))
router.post('/assignAssignment', auth.isSignedIn, catchErrors(webController.assignAssignment))
router.post('/createPairingRecord', auth.isSignedIn, catchErrors(webController.createPairingRecord))

/**
 * Expose `router`
 */
module.exports = router
