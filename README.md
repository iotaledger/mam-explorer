## IOTA Masked Authenticated Messaging Explorer

This app allows you to look into stored messages content.

### Usage

Open the page and enter you MAM root key and provider.
https://mam-explorer.firebaseapp.com/

Default mode is `public`, you can change it to `restricted` or `private`.
`Restricted` mode will require an `encryption key`.

### Examples

#### Public message stream:

* Root: `RLH9CDZLTZFMMERRXHQRRHRLJTAZ9IAZBIZRSDJJZS9NPDKDATUHA9YIDAORIVCIIRGEKKAMNRPVU9XSK`
* Provider: `https://api.lb-0.h.chrysalis-devnet.iota.cafe`

Alternatively you can use [this link](https://mam-explorer.firebaseapp.com/?provider=https://api.lb-0.h.chrysalis-devnet.iota.cafe&mode=public&root=RLH9CDZLTZFMMERRXHQRRHRLJTAZ9IAZBIZRSDJJZS9NPDKDATUHA9YIDAORIVCIIRGEKKAMNRPVU9XSK)

#### Restricted message stream:

* Root: `ASEAMWJKAJXGMRBXILJ99RVUBENPSQASXHUSADKDQIYKVAYWI9KZIDCIVGSDQYSWKAVPZNEZUMJ9EYIVH`
* Provider: `https://api.lb-0.h.chrysalis-devnet.iota.cafe`
* Secret key: `XSNERINOLISFHHUQH9PNJICPSXEHINHLPZYJKRFDKTPGYFC9JSDITI9TTUGVPLBATYOETFWYYBAJVXREE`

Alternatively you can use [this link](https://mam-explorer.firebaseapp.com/?provider=https://api.lb-0.h.chrysalis-devnet.iota.cafe&mode=restricted&key=XSNERINOLISFHHUQH9PNJICPSXEHINHLPZYJKRFDKTPGYFC9JSDITI9TTUGVPLBATYOETFWYYBAJVXREE&root=ASEAMWJKAJXGMRBXILJ99RVUBENPSQASXHUSADKDQIYKVAYWI9KZIDCIVGSDQYSWKAVPZNEZUMJ9EYIVH)


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
