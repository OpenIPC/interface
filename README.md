# OpenIPC

This is the source code for the proposal variant of [OpenIPC](https://openipc.org) official web site.

It reproduces the current [OpenIPC](https://openipc.org) site design and layout as long as its content. Follow the link https://openipc.org to observ its actual state.

## Summary

OpenIPC is a Linux based IP cameras alternative firmware for wide range of modern processors ([SoCs list](https://github.com/byav/oipc-web#supported-and-in-development-progress-socs-by-vendors)). It's an opensource project with a global contributor community. Using alternative firmware for your IP cameras you can fully control your device without worring about unexpecting behaviour and inconspicuous backdoors. Be the exact owner of your camera!

## Technical details
This site is made using [Mithril.js](mithril.js.org) framework with intent to increase development process and further maintainability. The site is suituble for all screen resolutions and provide convenient modern user interface. However yor're welcome to point out to potential or explicit bugs if you happened to find ones.

### Running the site
You can obtain local copy of the site und running it on your machine. Just follow theese steps:

```
git clone https://github.com/byav/oipc-web 
cd oips-web
yarn install
yarn dev
```

You should now have a development server running at localhost:3000

### Troubleshooting

If after you have installed all dependencies you still have problems with starting the site, try to delete `node_modules` folder in project root directory and run `yarn install` again. If errors still exist please inform the community using one of theese [contacts](https://github.com/byav/oipc-web#community-contacts).

##### Supported and in development progress SoCs by vendors
- Ambarella
- Anyka
- Fullhan
- Goke
- GrainMedia
- HiSilicon
- Ingenic
- MStar
- Novatek
- Rockchip
- SigmaStar
- Xiongmai

##### Community contacts
- [International Telegram channel](https://t.me/OpenIPC)
- [Russian-speaking users Telegram channel](https://t.me/openipc_modding)
- [Paid technical support](https://paywall.pw/openipc)
- [In browser English chat](https://gitter.im/OpenIPC/english)
- [In browser Russian chat](https://gitter.im/OpenIPC/russian)

### License
[MIT](https://opensource.org/licenses/MIT)
