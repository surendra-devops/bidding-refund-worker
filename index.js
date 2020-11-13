'use strict';

const Queue = require('bull');
const BalanceController = require('./controllers/external_API_controllers/balanceAPIControllers');
const JWTVerify = require('./utils/jwtFunctions')


const refundQueue = new Queue('refund_list', 'redis://127.0.0.1:6379');
refundQueue.process(async job => { 
  console.log('Hello, World!');
  const refund_amount = job.data.refund_amount;
  const user_id = job.data.user_id;

  const token = await JWTVerify.createJWT(user_id);
  const refundResponse = await BalanceController.postRequest('refundBalance', { refund_amount }, token); 
  return console.log(refundResponse);
});

const winnersQueue = new Queue('winner_list', 'redis://127.0.0.1:6379');
winnersQueue.process(async job=> {
  console.log('Hello, Winners!');
  return console.log(job.data);
});
