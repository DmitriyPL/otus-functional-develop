export class Parallel {
  constructor(numberOfWorkers) {
    this.numberOfWorkers = numberOfWorkers;
  }

  jobs(...args) {
    const chunks = this.chunkify(args);

    const jobsResult = [];

    chunks.forEach((chunk) => {
      Promise.all(chunk).then((chunkRes) => {
        const workerRes = this.addRes(chunkRes);
        jobsResult.push(workerRes);
      });
    });

    return jobsResult;
  }

  chunkify(jobs) {
    const numberOfWorkers = this.numberOfWorkers;
    let chunks = [];
    let jobIndex = 0;
    while (jobIndex < jobs.length) {
      chunks.push(jobs.slice(jobIndex, (jobIndex += numberOfWorkers)));
    }
    return chunks;
  }

  addRes(chunkRes) {
    const workerRes = [];
    chunkRes.forEach((fn) => {
      fn().then(function (result) {
        workerRes.push(result);
      });
    });
    return workerRes;
  }
}
