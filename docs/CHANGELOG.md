# [v1.1.5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.1.4...v1.1.5) (2020-10-29)


### Bug Fixes

* **mdc-menu:** check for undefined reference ([8defc59](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8defc59e691ae6910aeeddf1736dc84c9c6efab8))
* **radio:** check for undefined native input ([b46b81b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b46b81bf890dddcfd3aa426d294c73798594f562))
* **select:** check for undefined menu reference ([229f047](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/229f0477b43eee35aece87d022a8ca9d1ff29d25))
* **tabs:** set bindable active ([b99b48e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b99b48e72fa1a1d3ee7730145a0137d31243427e))



# [v1.1.4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.1.3...v1.1.4) (2020-10-25)


### Bug Fixes

* **chip:** avoid dirty checking ([c4d8e52](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c4d8e52c06749a09301893cd50ae99b8807a609f)), closes [#17](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/17)


### Features

* **select:** add two-line attribute ([62630be](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/62630bec5ae066c2c6315f815c98b5b56125468f))
* **select:** do not emit blur if select is focused ([c62523b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c62523b960b7f8e52cbdc1f7af19ae8114504a54)), closes [#18](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/18)



# [v1.1.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.1.2...v1.1.3) (2020-10-15)


### Bug Fixes

* **checkbox:** check for null reference ([d3d9722](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d3d97229e29df578c13b07b54549b3113314fbd3))
* **layout-grid:** class name ([f7ddb44](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f7ddb44aac2c99f0c75b216566603822d127671f))
* **text-field:** prevent HMR crashes during development ([259fade](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/259fade2bcb7e345be98fde6871e5295ff0c48af))


### Features

* **data-table:** allow hoisting page select to body ([dd241a7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/dd241a76e3774bef49007dc7dd8ae0bb217e033e))
* **layout-grid:** allow setting all span attributes at once ([b6e36bd](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b6e36bd3a18d8e37bb55b225be82b8b45c13b337))



# [v1.1.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.1.1...v1.1.2) (2020-10-09)


### Bug Fixes

* **text-field:** add missing name, autocomplete, placeholder ([d9e7805](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d9e78054771dabeb5462c465c522fcaa0a4fcec6))
* **text-field:** do not set unused attributes ([8c098d8](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8c098d8718a4cd9f60813ee655aa90d8508d7111))



# [v1.1.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.1.0...v1.1.1) (2020-09-24)


### Bug Fixes

* **app:** data table pagination example ([70ff59f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/70ff59fd7871890a622eea172cc5732b72b96314))
* **chips:** typo ([084ded4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/084ded4b8b04df37c77977cd7b16f392358401d2)), closes [#15](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/15)


### Features

* **data-table:** update pagination based on active page ([0fe510b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0fe510b2b11d8150d2a29d3696541c78bd95433a))



# [v1.1.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.5...v1.1.0) (2020-09-22)


### Bug Fixes

* **app:** make webpack job easier ([d48184c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d48184c92a44d1099e59dad8e9f9afb4d80ba71c))
* **chips:** rename attribute and reverse its logic ([3112389](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/31123892785b989bbf275a259c82a6fe78393663))
* **list:** remove duplicate attribute ([d3bebfe](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d3bebfef54f1c1fc989ee75a90b0097c81b58d1e))

### BREAKING CHANGES
* `mdc-chip[removable]` has been renamed to `mdc-chip[non-removable]`
* `mdc-list[action-data]` attribute has been removed in favour of `mdc-list[value]`


# [v1.0.5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.4...v1.0.5) (2020-09-16)


### Bug Fixes

* **drawer:** allow random header content ([8beb72b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8beb72b0e2c2ade124802356e14da8fe4760d658))
* **drawer:** normalise events ([e62e444](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e62e444e00beef183f303fc37545bc27b318930f))
* **text-field:** use aurelia delegate for keyup event ([45c41ec](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/45c41ec1ac96beb6da49e8bc4aff8e0786f9743e))


### Features

* **text-field:** add blur-on-enter attribute ([948f5df](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/948f5df8b64c3b0533e2bcf11446a2a57a2367b4))



# [v1.0.4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.3...v1.0.4) (2020-09-14)


### Bug Fixes

* **app:** add explicit references ([549c0e0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/549c0e068448990e0b82436ac438818c63db71bd))
* **tabs:** make event lowercase ([303e506](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/303e506f6510e7eef5e9b8340730ca559a8b6d35))


### Features

* **dialog:** allow dialog customisation via the service ([adadae5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/adadae5db4b58e6d48575e22d14d45648837d24b))



# [v1.0.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.2...v1.0.3) (2020-09-11)


### Bug Fixes

* **app:** api doc clean up ([30b9fbd](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/30b9fbdcd9950937d67e3a13516284c28465a836))
* **app:** handle complex doc types ([946f4f6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/946f4f66f359fe457453c5ade47236a51eccf2e0))
* **base:** make lint happy ([cbdae0c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/cbdae0c0512ad2527ce6f00b144db7d00a490469))
* **card:** add disable ripple ([c92c9e5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c92c9e57e53b21352f095ed15443205b7b53cd6b))
* **data-table:** copy cell attributes ([362abb7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/362abb79a870f1614eb9899523a56a4f225926ba))
* **list:** do not update a disabled row checkbox ([6e7fa21](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6e7fa21dcbeb56989893660f382c97503c287cd2))
* **text-field:** do not ruin it for full width ([bb7d72f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/bb7d72f3a8f80f6825cdfb3ca403f36627adbf03))


### Features

* **app:** display event docs ([a8af61c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a8af61c3c51f48a6a6b77a21ee2bfc6d027b19f6))



# [v1.0.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.1...v1.0.2) (2020-09-05)


### Bug Fixes

* **all:** apply top bar styling later than icon button's ([041ab71](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/041ab710b20301456fe18750237908246896a76a))
* **dialog:** add content only after the dialog has opened ([1fef2cc](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1fef2cc682ea01d3b6f67e7b62335bdc9cac5c75))
* **text-field:** workaround Safari alignment issue ([4339a94](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4339a9447978ac382f0a676a3ff3fda05059ac20)), closes [#11](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/11)



# [v1.0.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0...v1.0.1) (2020-09-01)


### Features

* **all:** add aggregate package ([03b185d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/03b185d87dc31db368efb70d0629ae037ae7ff8d))
* **base:** export material palette ([4c13377](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4c13377e54cf5005276ff1b106a152a01336bb6a))



# [v1.0.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.21...v1.0.0) (2020-08-31)


### Bug Fixes

* **app:** compose correct html ([899491e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/899491e787e5ec8ef6e75b04a5676697aa8b683e))
* **lookup:** check for undefined explicitly ([8e7c400](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8e7c400c943ec13a0c5c3e1906418f3465127773))


### Features

* **app:** add lookup examples ([6f3f04b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6f3f04bda5c95f801a674e13ec5bd826db94cb19))
* **app:** add tree view example snippet ([e89c088](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e89c0884f0c99a3c2476fba3c2b58682cfd0d3d2))
* **app:** add typography example snippets ([6df56a7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6df56a77b4af4479961ff1f8a4d99d6517e5378b))
* **app:** data table pagination example ([d754b15](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d754b1519804804a734554589e64cdc61161afe7))



# [v1.0.0-alpha.21](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.20...v1.0.0-alpha.21) (2020-08-28)


### Bug Fixes

* **top-app-bar:** allow tweaking "fixed" attribute ([d51c891](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d51c8913ee6ca35a08bd919907e70ea80064d939))
* **top-app-bar:** expose scroll target ([3604181](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/36041815dbb087c299b33f09e18be733aafcc101))
* **top-app-bar:** instantiate correct foundation ([d41f26d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d41f26de8336af45f5acb072d390eea16d0db8b3))


### Features

* **app:** add top app bar examples ([9db395c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9db395cf1a024f66d49da6fa085e1f3d8cfe93cf))



# [v1.0.0-alpha.20](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.19...v1.0.0-alpha.20) (2020-08-27)


### Bug Fixes

* **icon:** store host reference ([bf8a007](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/bf8a007026e98ec93a3bc099331f58bffdcf423b))
* **text-field:** add missing attributes ([87e24fe](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/87e24fe26ea89c27ea3d46d3bd092aeb6bd70e23))
* **text-field:** emit on focus ([f2fbd51](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f2fbd51802b9873fc6842075de118ccb98eb1c50))
* **text-field:** propagate required to foundation ([c30f96b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c30f96bf6e539619898af3b167a43cd71355ecbb))


### Features

* **app:** add text field examples ([17e64d2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/17e64d2dde04a0218c523ae2cd1d7925bc573da2))



# [v1.0.0-alpha.19](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.18...v1.0.0-alpha.19) (2020-08-26)


### Bug Fixes

* **select:** do not use `child` to get the icon reference ([2e5af34](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2e5af342982e6f6cdc95323be941354403756bf8))
* **tab-bar:** add missing attributes ([f6badb5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f6badb5cb2fea8df70904662a8b9e4f5f5565431))


### Features

* **app:** add select examples ([be5a66b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/be5a66ba129d106c3b4a9c68293cd1443f730dac))
* **app:** add tab bar examples ([4bbd2a0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4bbd2a07bb66aa4a984923254deee8575053001a))
* **app:** slider example snippets ([9d07b5e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9d07b5ee7b13b7c420ac11d1f74bb913b577b817))
* **app:** switch examples ([e656b3d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e656b3d06657fc014f200cc043ac46782893a18a))



# [v1.0.0-alpha.18](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.17...v1.0.0-alpha.18) (2020-08-23)


### Features

* **image-list:** add ([c2ecd6c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c2ecd6c4f9c060ee4ee3ea5950e3d874f5223328))
* **snackbar:** add ([56ea99f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/56ea99faffb9d77f10ef2e9d1c0abc8ad5235af1))



# [v1.0.0-alpha.17](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.16...v1.0.0-alpha.17) (2020-08-21)


### Bug Fixes

* **lookup:** do not open on disabled or readonly inputs ([ab35d92](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ab35d92b0489e67cab1d674ae762491517e42de9))
* **select:** add anchor margin attribute ([807fb9d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/807fb9d20d14199c006f609af5146b9ad35d28fe))
* **select:** add disabled ([07b97cf](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/07b97cfe5990f08e4e53a0fa951fd2250d71ecef))
* **select:** add missing attributes ([7b32ce7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7b32ce71b597f3d6130442e61e11d3a322cac3fe))
* **select:** re-layout on attributes change ([171cd0d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/171cd0db2662498ef7fa339c29dadef454ecc1ca))
* **text-field:** propagate disabled to foundation ([7ace40d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7ace40d495c7230c2098bcd0cee6b05457c6c0e8))


### Features

* **app:** wip - select examples ([aff933e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/aff933e45ef823019fc8a5bc1e79ade117ad1ce6))
* **select:** expose selected index on an element ([c921ee6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c921ee6820f5c12e8e586b87bbadd943ecb8c5ad))
* **text-field:** expose disabled and readonly on an element ([e2770b3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e2770b3d9e89636e6db863be99195afeb0f9ea09))


# [v1.0.0-alpha.16](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) (2020-08-20)


### Bug Fixes

* **layout-grid:** deps ([f00a889](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f00a889c02f8bdfb34b31d2c184de016e4033fb3))
* **ripple:** add ripple classes unless a consumer tells otherwise ([4dd503d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4dd503de73f6fd16f6014353ffa2a5e38975dd6f))
* **ripple:** delay initialisation until input is bound ([d315dff](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d315dff993b057d8c6c12aecb6fa9170b0619b96))


### Features

* **app:** add ripple examples ([2be5830](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2be5830c3dd8de6178928b1505b2d68d6fb725dc))



# [v1.0.0-alpha.15](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2020-08-18)


### Bug Fixes

* **menu-surface:** expose open as a property ([c741727](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c74172761760e2a00a0230ccea43b93883bccb71))


### Features

* **app:** add menu surface example ([76a22d5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/76a22d5e543e8d289160b82bb32a8846e7ca70c0))
* **app:** add radio examples ([68f96fd](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/68f96fd4ed18660ff0f050cb568c6d1c62f579e7))
* **layout-grid:** add ([993a45c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/993a45cc649ac481de5e0784fb6508e071607c04))
* **chips:** add ([035c186](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fb4d0d433d9ba31632fa29efa25141718035c186))



# [v1.0.0-alpha.14](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2020-08-14)


### Bug Fixes

* **app:** open menu on `trigger` ([101fef8](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/101fef846af813fedace6522e640f87c1394339d))
* **card:** set action classes on correct element ([14387af](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/14387afe63669b2e88b5e36716fd45ae037669d9))
* **icon-button:** set button icon size height ([2b94361](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2b94361355d644ca1d3fccf531587eccf857df9a))
* **menu:** close menu by default ([9de0438](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9de04383296dc9fdd2065d85d83365e6cdc5eba3))
* **menu:** expose quick open as an attribute ([b512cb9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b512cb962e56ede33a50fc73e72b2a85b9e0b6c6))
* **menu-surface:** expose quick open as an attribute ([d48ada0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d48ada0577031000b24b056cbe4804d7e7131fe8))
* **select:** reset validation on attached ([e057b77](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e057b77c10423303eb4c495e327b9aab0d43bbc5))
* **select:** set initial value without emitting change events ([77e9f2a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/77e9f2a3c212a3fca87d3931963d6eca40c2cd09))
* **text-field:** reset validation on attached ([81b6807](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/81b6807aa56f5d48ee0e6a1faefa59e800923ccc))


### Features

* **app:** menu example ([2f8e08a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2f8e08ad214d9b92c56dc7df3502bae34b5a07a5))
* **app:** menu example snippets ([8297875](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/829787532361842e283d0559b7780a9813636f20))
* **app:** menu examples ([ba45625](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ba4562575ee6e1b19aec20e4a800650d53414314))
* **menu:** add selection groups ([dd2bc62](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/dd2bc621a24d41f246144baa8f9397595c621757))



# [v1.0.0-alpha.13](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2020-08-12)


### Bug Fixes

* **list:** add missing attribute ([61c87a3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/61c87a30054c43f878b32e8558254707244b99bb))
* **list:** add missing classes ([ed175fe](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ed175feefaf611a25db3758feaac3fe9700dfac7))
* **list:** position checkboxes correctly in DOM ([d09007b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d09007b653e0a617403c934779eda4cda5d86a6c))


### Features

* **app:** add list examples ([ad9903e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ad9903e9e98870494e200182d38dafb6971dc8c1))
* **app:** add list snippets ([1aa6299](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1aa629993ce6c85509226cc894ccb448e7f8be46))
* **app:** add list snippets ([991bbf1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/991bbf12d32e3231c66cc8004b569b588e1d6db5))
* **list:** allow disabling ripple ([5ffc1a3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5ffc1a3a1250c5a43b62a598d52568fee631a6b1))



# [v1.0.0-alpha.12](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2020-08-08)


### Bug Fixes

* **app:** code snippets highlight ([f9b3fb4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f9b3fb4b22a7ba8f692ad381842ec3b546478a4a))
* **menu-surface:** pass binding values to foundation each time attached is called ([8709e21](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8709e213be05a0395ed8b20abe6241cb58f35c07))
* **menu-surface:** pass binding values to foundation each time attached is called ([d7bdf3b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d7bdf3b255edd4832d8583e0b85cf4475af8b7b3))


### Features

* **app:** add fab snippets ([537c76d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/537c76d77a8150a3331fde7f901aa833d81bdf5c))
* **app:** add form-field snippets ([eba0139](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/eba013975a65ac95384c3f34135f59f1b25c5ab7))
* **app:** add icon-button snippets ([81deb54](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/81deb54341144d8d955e217bc18d5a7e772ecfcb))
* **icon-button:** add icon attribute which defaults to material icons ([454e2e6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/454e2e61a3f1b1c7fea893d57f6d74d45c447d11))



# [v1.0.0-alpha.11](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2020-08-06)


### Bug Fixes

* **dialog:** await till composition finishes ([4c68a81](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4c68a81b81cd53b3dc9897da71a676f5b671471b))
* **select:** do strict comparison ([fecaeb6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fecaeb60f690a58ffa3955d36bc57229563fbec2))


### Features

* **data-table:** add pagination and linear progress ([60dd548](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/60dd54862a502fcafd392830a364586f92caa139))
* **data-table:** emit on navigation clicks ([a53ddd2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a53ddd283e34ed12dd1d4b603d8e3f06c97981ff))
* **linear-progress:** add ([8a59e4c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8a59e4c67ed3b47791bd4261b2c90a30d213953c))



# [v1.0.0-alpha.10](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2020-08-05)


### Bug Fixes

* **lookup:** close on blur ([f9dd090](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f9dd0905a6b2823e975070ab6734f45959af96b3))
* **lookup:** open when error ([d71f052](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d71f052d2584f151916206fed91528eae3a68455))
* **lookup:** suppress menu close when focus moves to it ([83d6ba9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/83d6ba92e62062139cc81591fe0db772204eefec))
* **menu:** dynamically get the child list element ([218384a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/218384a0567633c3790501e9e0b50a090586a51b))


### Features

* **app:** add elevation and expandable snippets ([3d6d7fa](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3d6d7fa09e916bcaa7d4e5b4a20476a63903e0d8))
* **data-table:** keep row attributes and classes ([cbdcfad](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/cbdcfad2de26413207919dcd8ba3be25aae86578))
* **list:** export list element interface ([b751b46](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b751b46b12f92567248563a9a22e7847535b776f))



# [v1.0.0-alpha.9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2020-08-04)


### Bug Fixes

* **icon-button:** do not prevent default ([7ed6f66](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7ed6f6622dc0fe72424f9d458798bc0fe759303f))
* **list:** do not prevent default ([acd7e3d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/acd7e3df4c8b49ae10d8c447ab7cf90970a89086))
* **text-field:** check if icons are aurelia elements ([925ead2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/925ead2893f36af7718bd21ef37a15950e0c4265))


### Features

* **app:** add drawer examples ([22c3862](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/22c38629b8525aaa0b45d4eb7699d6b3a078e7f2))
* **list:** allow using mdc-list-item as an attribute ([4ed3437](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4ed343727a94ff1911470e12ac26f935ac5fe198))
* **select:** emit change event ([09090d5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/09090d5d01702f18fb9b371676c7693c00160d3f))



# [v1.0.0-alpha.8](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2020-08-01)


### Bug Fixes

* **checkbox:** indeterminate is an "override" state ([9a373e7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9a373e7e1a9f305f74b3f1cbc9897a479c0cd075))
* **list:** allow further item click handling ([15a62c4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/15a62c4b70840cb7d44d65420bf380061179d0bc))
* **tab-bar:** use PLATFORM.moduleName ([e1e7134](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e1e7134566f4e7524f8b5f870d3a351ea62dda4d))


### Features

* **app:** add data table snippets ([6f7c406](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6f7c406b042c85b9f0210eb629474a77676e75f9))
* **app:** add dialog snippets ([3c55e14](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3c55e14bc251b985d33a512389d2c3911874d67c))
* **icon-button:** add href attribute ([4eeacc9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4eeacc9bdea651d000ed0ff35896f27dbf06434b))



# [v1.0.0-alpha.7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2020-07-30)


### Bug Fixes

* **circular-progress:** do not treat 0 as indeterminate ([08688ce](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/08688ce26d5474f1b76dc15af87326ca034925ba))
* **circular-progress:** update size and stroke on changed ([a726a40](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a726a40296f191035d904fe63bd135363d75253b))
* **dialog:** allow further click processing ([a75125d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a75125df8361f10682c7f7a7d4f4eb05376aeb27))
* **lookup:** remove unnecessary suppress flag ([fcac7f0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fcac7f0143c0fceaf8e41fdd4aa153cba88dae74))
* **tree-view:** pass root binding context to children ([fe69a9d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fe69a9d73eaeeecfdc610911a002e59cc09a0b2f))
* **tree-view:** typo ([969243c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/969243c6b16c075eed207c5e9e143d43929124ea))


### Features

* **app:** add more checkbox and circular-progress examples ([6319ae0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6319ae06f88b2670751d846d3cfcc61cb9bff604))
* **app:** add more checkbox examples ([b63bccf](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b63bccf3e3438333bf8fb50b524b8e9beaa8b457))
* **checkbox:** add disableRipple ([8f2b00e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8f2b00e2579ce2d0ecd5b3a78e885b4348224ad8))
* **tree-view:** pass root context to children ([936f892](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/936f892268932e9da76adff3877cca0a3b9ec1cb))
* **validation:** better support extensibility ([688638f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/688638f47a3eee4f6a0c62f20a12d443bd4d8ed1))



# [v1.0.0-alpha.6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2020-07-29)


### Bug Fixes

* **card:** attribute name ([e597b13](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e597b1338fbfb3086bb7fcf5f29398e58a453ef6))
* **circular-progress:** check for undefined ref ([a9eaf5a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a9eaf5a6be78c9ed74cff2eaaa68ea62e7c37cdc))
* **data-table:** add data-table checkbox classes ([54c6bc9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/54c6bc9ccb7eb721dce9a777bd158d321af09d42))
* **icon:** use PLATFORM.moduleName ([4a92a93](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4a92a930ad4d888aa11463cdb0032101a547888c))
* **menu:** load necessary plugins ([2e5d64e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2e5d64e45ba070b2332bc4f841f19216af7ac3cb))
* **menu:** use PLATFORM.moduleName ([9db4374](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9db4374b8b816f3852552f37aaaf120fd12cd20d))


### Features

* **app:** add button snippets ([97bda0d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/97bda0dd324239d52bf4c3508ed1e41ebd52ab5b))
* **app:** more card examples ([e36b557](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e36b5576b1d533fa18b00c2547ac721d3b051042))
* **dialog:** dynamically detect default button ([6cd9096](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6cd9096ec1d79325a5c540c1d71bf77e9d0a09ef))
* **dialog:** register dialog instance in the DI container ([6976de4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6976de4eb820cf0312eb52f604b179b4f6054ba9))
* **select:** pass hoist-to-body to underlying menu ([aa20f18](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/aa20f18905c181cdceeb4bb25d9becdbc27d75ca))



# [v1.0.0-alpha.5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2020-07-27)


### Bug Fixes

* **button:** add missing attribute ([f575742](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f5757427bb51b01e43f9e2a9c72d4bd56a0c4602))
* **tab:** add missing attribute ([11ff98c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/11ff98c3a7acf22456e471a448476ff9819500ff))


### Features

* **app:** add more button examples ([fa5625a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fa5625a8de9914ba4f4e8f41079643e7d329e3c4))
* **button:** assign icon class automatically ([976019c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/976019c0c2d2447f2a4db5f3f770cc2e3c9e4050))
* **icon:** add ([9ac244b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9ac244bb49c41de62c8e1b1e9bcd1d2df634b2ea))
* **tree-view:** add ([9c87870](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9c87870468532f00b57f17d9316e2c31f645799a))



# [v1.0.0-alpha.4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2020-07-24)


### Bug Fixes

* **card:** use PLATFORM with useView ([6620fb2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6620fb24c8115c3f477202490bcc948e0ee1e92b))
* **dialog:** use PLATFORM with useView ([662ab32](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/662ab327d12291b73bcc7d981b665e5fdba697e3))
* **fab:** use PLATFORM with useView ([b057338](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b0573383fd9d8b672381a4116f711493eac77f82))
* **icon-button:** use PLATFORM with useView ([fd57c23](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fd57c23cd57011948d7fcfdc28fb3504188d35c1))
* **text-field:** do not emit duplicate events ([3182fe6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3182fe6c9ece5c2620b7ebf01929dff3dfc41ea4))



# [v1.0.0-alpha.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2020-07-24)


### Bug Fixes

* **all:** publish scss ([2fa8112](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2fa8112428013e6db4b97e730848b06635d4bac9))



# [v1.0.0-alpha.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2020-07-23)


### Bug Fixes

* **button:** configure required plugins automatically ([0c646db](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0c646db581a71f628b81cb41a74776b232fd6b72))
* **checkbox:** configure required plugins automatically ([d683da8](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d683da8070895ed7f35de6003387613425d39545))
* **expandable:** configure required plugins automatically ([932d802](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/932d802dcabf5aeb3eb124458d66784e1ee4c924))
* **fab:** configure required plugins automatically ([130bb79](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/130bb7938faf1b46eed9accee8bffbe5dd2b78b8))
* **list:** configure required plugins automatically ([635ed16](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/635ed16e1ef9e529ccb900596322fdc327556c77))
* **radio:** configure required plugins automatically ([83954de](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/83954de8008f80ea9605946bdc6cda654aee3cce))
* **select:** configure required plugins automatically ([7b64e19](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7b64e19245d9d6732a2061f87cecd6ed20c89917))
* **switch:** configure required plugins automatically ([6fa9d46](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6fa9d461483c31b783182d6a4b69626b89d7c029))
* **text-field:** configure required plugins automatically ([7f2ffd7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7f2ffd7631c71933ef892ce915ed4b5bbfdcb432))


### Features

* **data-table:** add ([0aad22b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0aad22b9ccd69d152e4157c5d4fd3bf4966812b1))
* **elevation:** add ([ef0d9b1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ef0d9b1dd309b5b372fa3165cc176caa93cd642a))
* **text-field:** add textarea ([59d2eb1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/59d2eb15cdc2d56b2434d179e17de8a9a026efc6))



# [v1.0.0-alpha.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2020-07-22)


### Bug Fixes

* **app:** make list focusable, auto close drawer on mobile ([c545076](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c54507638dd78b4a473943c2523e098d17df5ea2))
* **button:** expose href for route-href ([93184ed](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/93184ed16f58cbeb74ec1c528ca5054cd6554fa2))
* **list:** move styling to scss ([fe46819](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fe46819d6f561a002a91e71cf0931e9ca0ff7745))
* **menu:** position fixed for body hoisted menu ([5c46dda](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5c46dda1059b839a005a92e0c0d95c219219cc95))


### Features

* **app:** expandable list example ([a3a1d6e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a3a1d6e265eaa7ba0db2ad00cca55a79b73a683c))
* **expandable:** add ([3c45a99](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3c45a9949781206334e628c1f5e09d93b6cd019e))
* **list:** allow ignoring item interaction ([562440d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/562440d82b1fc51050845b74c6c5fe8d5ef449d6))
* **list:** emit event on item action ([34fb45c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/34fb45c18caf80b83fe833336c8ec2bd97ff416d))
* **list:** include arbitrary data with action event ([fef06a1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fef06a10b83f4a25ba51b444906ae7230c423d90))
* **lookup:** add ([c260335](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c260335f526c471767789a4166e86f5b0c847011))
* **lookup:** add not found/searching/error templates ([7f9142f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7f9142f44fd92639cf573e9aa156a038ec60d45e))
* **lookup:** add validation ([44b8e56](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/44b8e567444cbd764a583d26076485131fd77879))
* **lookup:** listen for up/down keys ([588c17b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/588c17b46d463db3dcfa4c9f2f4c0a19842c8801))
* **menu:** pass menu item action data with the event ([c506c00](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c506c009a7c94f1a3a5ee4580f86cdd0868b0f46))



# [1.0.0-alpha.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/d2004cbdb287c869c75e77f12b210417787a9e1f...v1.0.0-alpha.0) (2020-07-19)


### Bug Fixes

* **list:** automatically rearrange list item children ([0356b34](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0356b347bf35bb03af3a9b40d1b498202dc02481))
* **select:** layout options when items array changes ([6b7897c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6b7897c09776d8716ec7e58cd906b6985cec648c))
* **select:** set aria-required ([22ad330](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/22ad33024d18e2c7f05b94bdfa890bea4d87432b))
* **tabs:** enable default action ([6f98f0d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6f98f0d5685d33a383970d94092dfe89597d5289))
* **text-field:** await label init ([d66779c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d66779c7ae53d3b78e54864851fe351135b4f035))
* **text-field:** call in the right place ([b340167](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b340167f3fb3d6affc9f5fe3eac5dbec90f4ad3e))
* **text-field:** check for empty label ([8291c1f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8291c1f85e187b6c29863820500c141f0572c5b5))
* **text-field:** handle maxlength properly ([af85404](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/af8540457c1401846819660e027be1abeda2531d))


### Features

* **app:** add basic text-field example ([e7e5ca5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e7e5ca5bb73afdba4c67ccd7ccd6ac40814166d7))
* **app:** add some button examples ([722dafd](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/722dafdf582b2f1426d355b994e3f9d64867327b))
* **app:** example placeholders ([3ea6b4e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3ea6b4e97e1a901d28e85077dbeecd763ac5c6fa))
* **app:** open nav by default ([de01370](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/de01370af9279fa6aa5b94958f67d0761f725eaa))
* **app:** publish to gh-pages ([8d50190](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8d5019071396934648bb3eda1d2b9e167e98d933))
* **button:** add ([feee62c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/feee62c200096ff56b57c4a6e4ed50aaf83f719f))
* **card:** add ([1a17226](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1a172266fb92b9921592e58de93c94fb7c5242c3))
* **checkbox:** add ([dcd1a56](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/dcd1a5604ac1c7d4b0b3aaf6ee6e01f1e041309c))
* **circular-progress:** add ([1aca3c9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1aca3c9fdb0a591ea2b5195923f9b8f95c92dbf3))
* **dialog:** add ([8d2d538](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8d2d538d2ee71a482689442c6838858acacce276))
* **dialog:** wip ([ec41b71](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ec41b716a93f2530ff607d671ca10bef581862ac))
* **drawer:** add ([49fef8e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/49fef8e46364b63e6c2e3140a6fdfc782cd168e4))
* **drawer:** add header ([b42f79c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b42f79c6f46087337b349db1d789051bad5e2a89))
* **fab:** add ([4087491](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/40874913d48786dce171b8f092357b671f42fc27))
* **form-field:** add ([83f3a38](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/83f3a380acc0b6f39288d3940cd5d5a824c82e35))
* **form-field:** implement correctly ([72211a8](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/72211a805f975b1ad2ad5aa5bea6837fa5a33677))
* **icon-button:** add ([722ee9b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/722ee9b8380491715d0a217cbfa7244204c35771))
* **list:** add ([9fa19e5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9fa19e50a5301d98f809175b2543f0d7ec5bad99))
* **list:** add missing list elements ([99413f7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/99413f7eff016021cc45d5f150faa7814208300b))
* **list:** wip ([74db401](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/74db40151f035ac0b163f34790063f9c38a8b8a0))
* **menu:** add fixed ([89c1b73](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/89c1b73d35a0dc7575539869dba47e9386be7aff))
* **menu:** enable hoisting to body ([5b828b9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5b828b9d04854d58b9ad059eb660243334744337))
* **menu:** wip ([ac8384e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ac8384e7ea4831bfe9a014eea473759fe1b3b78c))
* **radio:** add ([ceda8e6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ceda8e69dcd9f30f6ab729e38608399640b16eca))
* **select:** support "empty" items ([2318550](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/23185507c3a61891187baf06b436b9a9e17c3759))
* **select:** wip ([4a5f511](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4a5f5114a0599264a3e8bfbb8eea8b4affefd356))
* **slider:** add ([bc6ae22](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/bc6ae220f1774d6b03df3b49cefffc365351d9e0))
* **switch:** add ([8df0b13](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8df0b13ca629ec7d39e9f7895a1c30b9a502d1df))
* **tab:** add WIP ([f1bb8f2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f1bb8f22095c12b02501b71d00caca03421f0e57))
* **text-field:** add char counter and helper text ([1743a32](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1743a32118f75953f8bb26f64f62bf69a317c9bc))
* **text-field:** add outlined, icons ([e7301f2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e7301f2a1249af647a2083fc63ea41c0954ab4ab))
* **text-field:** add some missing attributes ([d2ffa83](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d2ffa836b1ba80ae75b440610d506fcafc7a8943))
* **text-field:** expose value via a binding adapter ([e0420c2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e0420c266e455ab8ef69d7295c5c9c4ee13e8923))
* **text-field:** expose value via a binding adapter ([f16fd4a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f16fd4ad3ddf65fc475329b280b5e9d7bbd913df))
* **textfield:** add WIP ([d2004cb](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d2004cbdb287c869c75e77f12b210417787a9e1f))
* **textfield:** remove dist ([4f265ba](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4f265ba7051ac90490647b59f79ef3eb9abb32f9))
* **top-app-bar, ripple:** add ([aeff3b9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/aeff3b9ce1fa9cac06d1d9470fa1387a9bb0b63b))
* **typography:** add ([7206f6e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7206f6ed75a4507985986fff4397e4144d8a9c74))
* **validation:** add for select ([12d9c33](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/12d9c3331fdfb9cfe6b46a10ece219e1f340e853))
* **validation:** add for text-field ([9d7318e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9d7318ef830871825b96a945fec35aa7b05597e9))
* **validation:** wip ([d712488](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d712488f53dbf992de937290aafbe30b72c782e2))



