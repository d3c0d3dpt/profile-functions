import * as functions from 'firebase-functions';

export const CONFIG = functions.config();

export const EUROPE_128MB = functions.region('europe-west1').runWith({ memory: '128MB', timeoutSeconds: 30 });
