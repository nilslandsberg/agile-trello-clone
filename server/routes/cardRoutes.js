const express = require('express');
const checkAuth =  require("./../middleware/checkAuth");
const cardController = require('./../controllers/cardController');

const router = express.Router();

router
  .route('/')
  .post(checkAuth, cardController.createCard);

router
  .route('/:columnId')
  .get(checkAuth, cardController.getAllCards);

router
  .route('/card/:cardId')
  .get(checkAuth, cardController.getOneCard)
  .delete(checkAuth, cardController.deleteOneCard)

router
  .route('/card/title/:cardId')
  .patch(checkAuth, cardController.changeCardTitle);

router
  .route('/card/text/:cardId')
  .patch(checkAuth, cardController.changeCardText);

router
  .route('/card/label/:cardId')
  .patch(checkAuth, cardController.changeCardLabel);

// router
//   .route('/reorder/same-column')
//   .patch(checkAuth, cardController.reorderSameColumn);

// router
//   .route('/reorder/different-column')
//   .patch(checkAuth, cardController.reorderDifferentColumn);

  

  module.exports = router;