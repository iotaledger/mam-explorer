## IOTA Masked Authenticated Messaging Explorer

This app allows you to look into stored messages content.

### Usage

Open the page and enter you MAM root key and provider.
https://mam-explorer.firebaseapp.com/

Default mode is `public`, you can change it to `restricted` or `private`.
`Restricted` mode will require an `encryption key`.

### Examples

#### Public message stream:

* Root: `WHQNXBDSFQJPZYIJDBNJAWYQDJFPCCSOJLWJWKPDQQZBCYBXPPSXGBV9WFGWRWVUTSADMEHBLKCTJT9FD`
* Provider: `https://nodes.devnet.thetangle.org:443`

Alternatively you can use [this link](https://mam-explorer.firebaseapp.com/?provider=https://nodes.devnet.thetangle.org:443&mode=public&root=WHQNXBDSFQJPZYIJDBNJAWYQDJFPCCSOJLWJWKPDQQZBCYBXPPSXGBV9WFGWRWVUTSADMEHBLKCTJT9FD)

### For developers

#### Installation

1.  Clone/download repo
2.  `yarn` or `npm install`

#### Development

`yarn start` or `npm run start`

* Build app continously
* App served @ `http://localhost:3000`

**Production**

`yarn build` or `npm run build`
then
`firebase deploy`

---

**All commands**

| Command                          | Description                                                             |
| -------------------------------- | ----------------------------------------------------------------------- |
| `yarn start` or `npm run start`  | Build app continously (HMR enabled) and serve @ `http://localhost:3000` |
| `yarn build` or `npm run build`  | Build app to `/build/`, prepare for deployment                           |                           
