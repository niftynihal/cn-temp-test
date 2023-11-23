// bullConfig.ts
const { redisClient } = require("./redisConfig");

const { Queue, Worker } = require('bullmq');

const queue = new Queue('emailQueue', {
  createClient: () => redisClient,
});

const WorkerInstance = new Worker('emailQueue', async job => {
    console.log("from worker instance function...")
    console.log("jobname : " + job.name)
    if(job.name === "sendInactivityTriggers"){
      console.log("Correct Job name")
    }
});
