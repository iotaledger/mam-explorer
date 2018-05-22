## IOTA Masked Authenticated Messaging Explorer

This app allows you to look into stored messages content.

### Usage

Open the page and enter you MAM root key and provider.
https://mam-explorer.firebaseapp.com/

List of available nodes/providers is automatically loaded from the [public source](https://iotanode.host/node_table.json/)

Default mode is `public`, you can change it to `restricted` or `private`.
`Restricted` mode will require an `encryption key`.

### Test

#### Public message stream:

* Root: `WHQNXBDSFQJPZYIJDBNJAWYQDJFPCCSOJLWJWKPDQQZBCYBXPPSXGBV9WFGWRWVUTSADMEHBLKCTJT9FD`
* Provider: `https://nodes.testnet.iota.org`

Alternatively you can use [this link](https://mam-explorer.firebaseapp.com/?provider=https://nodes.testnet.iota.org&mode=public&root=WHQNXBDSFQJPZYIJDBNJAWYQDJFPCCSOJLWJWKPDQQZBCYBXPPSXGBV9WFGWRWVUTSADMEHBLKCTJT9FD)

#### Restricted message stream:

* Root: `9SQDTAJKXOLDJSXOYAMLMFKRDUCMFFPDPFNRLIBKAZMJJRKVCSPUCQBLTYNTJIYIJ9VXZLTYGP9DROLYB`
* Provider: `https://nodes.testnet.iota.org`
* Encryption Key: `VERY-SECRET-KEY`

Alternatively you can use [this link](https://mam-explorer.firebaseapp.com/?provider=https://nodes.testnet.iota.org&mode=restricted&key=VERY-SECRET-KEY&root=9SQDTAJKXOLDJSXOYAMLMFKRDUCMFFPDPFNRLIBKAZMJJRKVCSPUCQBLTYNTJIYIJ9VXZLTYGP9DROLYB)

### For developers

#### Installation

1.  Clone/download repo
2.  `yarn` or `npm install`

#### Development

`yarn start` or `npm run start`

* Build app continously
* App served @ `http://localhost:8080`

**Production**

`yarn build` or `npm run build`
then
`firebase deploy`

---

**All commands**

| Command              | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| `npm run start-dev`  | Build app continously (HMR enabled) and serve @ `http://localhost:8080` |
| `npm run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`       |
| `npm run build`      | Build app to `/dist/`                                                   |
| `npm run lint`       | Run JavaScript and SASS linter                                          |
| `npm run lint:js`    | Run JavaScript linter                                                   |
| `npm run lint:sass`  | Run SASS linter                                                         |
| `npm run start`      | (alias of `npm run start-dev`)                                          |
