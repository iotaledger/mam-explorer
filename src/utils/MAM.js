import { mamFetch } from '@iota/mam.js';
import { trytesToAscii } from '@iota/converter';

export const fetch = (provider, root, mode, key) => {
  if (!provider || !root) return;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const message = await mamFetch(provider, root, mode, key);
      const decoded = decodeURIComponent(trytesToAscii(message.message)); 
      return resolve(JSON.parse(decoded));
    } catch (error) {
      console.log('MAM fetch error', error);
      return reject();
    }
  });

  return promise;
};
