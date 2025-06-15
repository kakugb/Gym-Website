const Academy = require('../models/Academy');

exports.createAcademy = async (req, res) => {
  try {
    const { name, location } = req.body;
    const academy = await Academy.create({
      name,
      location,
      createdBy: req.user._id
    });
    res.status(201).json(academy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAcademies = async (req, res) => {
  try {
    const academies = await Academy.find().populate('createdBy', 'name email');
    res.json(academies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update an academy
exports.updateAcademy = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    const updatedAcademy = await Academy.findByIdAndUpdate(
      id,
      { name, location },
      { new: true, runValidators: true }
    );

    if (!updatedAcademy) return res.status(404).json({ message: 'Academy not found' });

    res.status(200).json({ message: 'Academy updated successfully', updatedAcademy });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an academy
exports.deleteAcademy = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAcademy = await Academy.findByIdAndDelete(id);
    if (!deletedAcademy) return res.status(404).json({ message: 'Academy not found' });

    res.status(200).json({ message: 'Academy deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

