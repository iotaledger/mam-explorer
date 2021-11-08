import { mamFetchAll } from '@iota/mam.js';
import { trytesToAscii } from '@iota/converter';

export const fetch = (provider, root, mode, key) => {
  if (!provider || !root) return;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const messages = await mamFetchAll(provider, root, mode, key);
      console.log(messages);
      if (messages === undefined || messages === []) {
        return resolve([]);
      }
      const decodedMessages = [];
      messages.forEach((message) => {
        const decodedMessage = decodeURIComponent(trytesToAscii(message.message));
        decodedMessages.push(JSON.parse(decodedMessage));
      });
      console.log(decodedMessages);
      return resolve(decodedMessages);
    } catch (error) {
      console.log('MAM fetch error', error);
      return reject();
    }
  });

  return promise;
};
