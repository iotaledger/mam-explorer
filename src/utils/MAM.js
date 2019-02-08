import Mam from 'mam.client.js';
import { trytesToAscii } from '@iota/converter';

export const fetch = (provider, root, mode, key, reportEvent, onFetchComplete) => {
  if (!provider || !root) return;
  const promise = new Promise(async (resolve, reject) => {
    try {
      Mam.init(provider);
      const convertAndReport = event => reportEvent(JSON.parse(trytesToAscii(event)))
      await Mam.fetch(root, mode, key || '', convertAndReport);
      return resolve(onFetchComplete());
    } catch (error) {
      console.log('MAM fetch error', error);
      return reject();
    }
  });

  return promise;
};
