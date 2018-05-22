import Mam from 'mam.client.js';
import IOTA from 'iota.lib.js';

export const fetch = (
  provider,
  root,
  mode = 'public',
  key = null,
  reportEvent,
  onFetchComplete
) => {
  if (!provider || !root) return;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const iota = new IOTA({ provider });
      Mam.init(iota);
      await Mam.fetch(root, mode, key, data => {
        const event = JSON.parse(iota.utils.fromTrytes(data));
        reportEvent(event);
      });
      return resolve(onFetchComplete());
    } catch (error) {
      console.log('MAM fetch error', error);
      return reject();
    }
  });

  return promise;
};
