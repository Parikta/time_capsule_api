
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const capsuleRoutes = require('./routes/capsules');
const { sequelize } = require('./models');
const cronJob = require('./cron/expireCapsules');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/capsules', capsuleRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  cronJob.start();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

module.exports = app;
