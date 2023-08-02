const Pet = require('../models/Pet');
exports.getPet = async (req, res, next) => {
  const pets = await Pet.find();
  res.json({ message: `Pets - ${req.method}`, data: pets });
};

exports.getPetById = async (req, res, next) => {
  const petId = req.params.petId;
  const pet = await Pet.findById(petId)
    .select('name _id')
    .catch((err) => {
      Message.not_found_error(res, err);
    });
  res.json({
    message: `Pets - ${req.method}`,
    id: petId,
    data: pet,
  });
};

exports.createPet = async (req, res, next) => {
  const { pet } = req.body;
  const newPet = await Pet.create(pet);
  const petId = req.params.petId;
  res.json({
    message: `Pets - ${req.method}`,
    id: petId,
    data: newPet,
  });
};

exports.updatePet = async (req, res, next) => {
  const petId = req.params.petId;
  const pet = await Pet.findByIdAndUpdate(petId, req.body, {
    new: true,
    runValidators: true,
  });
  res.json({ message: `Pets - ${req.method}`, id: petId, data: pet });
};

exports.deletePet = async (req, res, next) => {
  const petId = req.params.petId;
  const pet = await Pet.findByIdAndDelete(petId);
  res.json({ message: `Pets - ${req.method}`, id: petId });
};
