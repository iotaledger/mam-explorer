import { trytesToAscii } from '@iota/converter';
import { createHttpClient } from '@iota/http-client';
import { createContext, Reader, Mode } from 'mam.client.js/lib/mam';
import _get from 'lodash.get';

export const fetch = (
  provider,
  root,
  selectedMode = 'public',
  key = null,
  reportEvent,
  onFetchComplete
) => {
  if (!provider || !root) return;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const client = createHttpClient({ provider });
      let ctx = await createContext();
      let newRoot = root;
      let payload;
      const mode = selectedMode === 'public' ? Mode.Public : Mode.Old

      do {
        let reader = new Reader(ctx, client, mode, newRoot, key);
        const message = await reader.next();
        payload = _get(message, 'value[0].message.payload');
        newRoot = _get(message, 'value[0].message.nextRoot');
        if (payload && newRoot) {
          const event = JSON.parse(trytesToAscii(payload));
          reportEvent(event);
        }
      } while(payload);
      return resolve(onFetchComplete());
    } catch (error) {
      console.log('MAM fetch error', error);
      return reject();
    }
  });

  return promise;
};
