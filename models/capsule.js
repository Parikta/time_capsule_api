
module.exports = (sequelize, DataTypes) => {
  const Capsule = sequelize.define('Capsule', {
    message: DataTypes.TEXT,
    unlock_at: DataTypes.DATE,
    unlock_code: DataTypes.STRING,
    is_expired: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
  Capsule.associate = models => {
    Capsule.belongsTo(models.User);
  };
  return Capsule;
};
