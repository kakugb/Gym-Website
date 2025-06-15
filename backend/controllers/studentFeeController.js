const Fee = require('../models/studentFee');

// Add fee entry for a student
exports.addFee = async (req, res) => {
  const { studentId, month, amount } = req.body;

  try {
    const existing = await Fee.findOne({ studentId, month });
    if (existing) {
      return res.status(400).json({ message: 'Fee already added for this month' });
    }

    const fee = new Fee({ studentId, month, amount });
    await fee.save();
    res.status(201).json({ message: 'Fee added successfully', fee });
  } catch (error) {
    res.status(500).json({ message: 'Error adding fee', error });
  }
};

// Update fee status (e.g., mark as Submitted)
exports.updateFeeStatus = async (req, res) => {
  const { feeId } = req.params;
  const { status } = req.body;

  try {
    const updated = await Fee.findByIdAndUpdate(
      feeId,
      {
        status,
        submissionDate: status === 'Submitted' ? new Date() : null
      },
      { new: true }
    );
    res.json({ message: 'Fee status updated', updated });
  } catch (error) {
    res.status(500).json({ message: 'Error updating fee status', error });
  }
};

// Get fee records for a student
exports.getStudentFees = async (req, res) => {
  const { studentId } = req.params;

  try {
    const fees = await Fee.find({ studentId }).sort({ createdAt: -1 });
    res.json(fees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fees', error });
  }
};
