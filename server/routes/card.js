const express = require('express');
const db = require('../models');
const User = db.User;
const Card = db.Card;
const Status = db.Status;
const Priority = db.Priority;

const router = express.Router();

//----------CARD MENU----------
// GET ALL CARDS
// CREATE NEW CARD
// EDIT CARD STATUS
// DELETE CARD
//-----------------------------------

// GET ALL CARDS
router.route('/')
.get((req, res) => {
  return Card.findAll({
    where: { deletedAt : null },
    include: [
      { model: User, as: 'Creator' },
      { model: Status, as: 'Status'},
      { model: Priority, as: 'Priority'}
    ],
    order: [[ 'created_at', 'ASC' ]]
  })
  .then(cards => {
    return res.json(cards);
  })
  .catch(err => {
    return res.json(err);
  });
})

// CREATE CARD
.post((req, res) => {
  const details = req.body;
  return Card.create({
    title: details.title,
    created_by: details.created_by,
    assigned_to: details.assigned_to
  })
  .then(card => {
    return card.reload({
      include: [
        { model: User, as: 'Creator' },
        { model: Status, as: 'Status'},
        { model: Priority, as: 'Priority'}
      ]
    })
    res.json(card);
  })
  .then(card => {
    return res.json(card);
  });
});

//EDIT CARD STATUS
router.route('/:id')
.put((req,res) => {
  return Card.findOne({
    where: { id: req.body.id }
  })
  .then(card => {
    if(!card){
      return console.log('error');
    }
    else {
      card.update({
        statusID : req.body.statusID
      })
      .then(newCard => {
        return newCard.reload({
          include: [{ model: Status, as: 'Status' }]
        })
        res.json(newCard);
      })
      .then(newCard => {
        return res.json(newCard);
      })
      .catch(err => {
        console.log('error', err);
        return res.json({
          error: 'Something went wrong'
        });
      });
    }
  });
})

//DELETE CARD
.delete((req, res) => {
  let id = req.params.id;
  return Card.findById(id)
  .then(card => {
    return card.update({deletedAt : Date.now()}, {
      returning: true,
      plain: true
    })
    .then(card => {
      return res.json(card);
    });
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;