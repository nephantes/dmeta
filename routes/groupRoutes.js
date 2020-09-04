const express = require('express');
const authController = require('../controllers/authController');
const groupController = require('../controllers/groupController');

const router = express.Router();

router.use(authController.protect);
router.use(authController.setDefPerms);

// get all users belonging to a group
router.route('/:id/user').get(groupController.setGroupFilter, groupController.getGroupUsers);

router
  .route('/')
  .get(authController.protect, groupController.getAllGroups)
  .post(groupController.createGroup);

router
  .route('/:id')
  .get(groupController.getGroup)
  .patch(groupController.updateGroup)
  .delete(groupController.deleteGroup);

module.exports = router;
