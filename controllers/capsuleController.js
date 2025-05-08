const { Capsule } = require('../models');

async function createCapsule(req, res) {
  const { message, unlock_at, unlock_code } = req.body;
  const userId = req.user.id;

  if (!message || !unlock_at || !unlock_code) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const capsule = await Capsule.create({ message, unlock_at, unlock_code, UserId: userId });
  res.status(201).json({ id: capsule.id, unlock_code: capsule.unlock_code });
}

async function getCapsule(req, res) {
  const { id } = req.params;
  const { code } = req.query;
  const capsule = await Capsule.findOne({ where: { id, UserId: req.user.id } });

  if (!capsule) return res.status(404).json({ message: 'Capsule not found' });

  const now = new Date();
  const unlockDate = new Date(capsule.unlock_at);
  const diffInDays = (now - unlockDate) / (1000 * 60 * 60 * 24);

  if (now < unlockDate) {
    return res.status(403).json({ message: 'Too soon to open' });
  }

  if (capsule.unlock_code !== code) {
    return res.status(401).json({ message: 'Invalid unlock code' });
  }

  if (diffInDays > 30) {
    return res.status(410).json({ message: 'Capsule expired' });
  }

  res.status(200).json({
    id: capsule.id,
    message: capsule.message,
    unlock_at: capsule.unlock_at,
    createdAt: capsule.createdAt,
  });
}

module.exports = { createCapsule, getCapsule };
