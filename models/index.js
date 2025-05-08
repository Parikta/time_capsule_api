require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    logging: false, // optional: disable SQL logs
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ DB connection successful'))
  .catch((err) => console.error('❌ DB connection failed:', err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Capsule = require('./capsule')(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Capsule, { onDelete: 'CASCADE' });
db.Capsule.belongsTo(db.User);

module.exports = db;
