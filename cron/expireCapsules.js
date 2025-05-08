const cron = require('node-cron');
const { Capsule } = require('../models');
const moment = require('moment');
const { Op } = require('sequelize');

const expireCapsules = cron.schedule('0 0 * * *', async () => {
  const expiredDate = moment().subtract(30, 'days').toDate();

  const [count] = await Capsule.update(
    { is_expired: true },
    {
      where: {
        unlock_at: { [Op.lt]: expiredDate },
        is_expired: false
      }
    }
  );

  console.log(`[Cron] Marked ${count} capsule(s) as expired at ${new Date().toISOString()}`);
});

module.exports = expireCapsules;
