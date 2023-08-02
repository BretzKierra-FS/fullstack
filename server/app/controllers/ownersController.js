const Owner = require('../models/Owner');
const Message = require('../messages/messages');
const { successTemplate, errorTemplate } = require('../templates/templates');

exports.getOwner = async (req, res, next) => {
  const owners = await Owner.find()
    .then((result) => {
      successTemplate(res, 'Owner Recieved', result);
    })
    .catch((err) => {
      errorTemplate(res, err.message, err.status);
    });
};

exports.getOwnerById = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  const owner = await Owner.findById(ownerId)
    .select('name age email')
    .populate('pets', 'name')
    .catch((err) => {
      Message.not_found_error(res, err);
    });
  res.json({ message: `Owner - ${req.method}`, data: owner });
};

exports.createOwner = async (req, res, next) => {
  const { owner } = req.body;
  const newOwner = await Owner.create(owner);
  const ownerId = req.params.ownerId;
  res.json({ message: `Owner - ${req.method}`, id: ownerId, data: newOwner });
};

exports.updateOwner = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  const owner = await Owner.findByIdAndUpdate(ownerId, req.body, {
    new: true,
    runValidators: true,
  }).catch((err) => {
    Message.not_found_error(res, err);
  });
  res.json({ message: `Owner - ${req.method}`, id: ownerId, data: owner });
};

exports.deleteOwner = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  const owner = await Owner.findByI_AndDelete(ownerId);
  res.json({ message: `Owner - ${req.method}`, id: ownerId }).catch((err) => {
    Message.not_found_error(res, err);
  });
};
