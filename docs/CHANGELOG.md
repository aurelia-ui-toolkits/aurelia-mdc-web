## [7.0.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v7.0.1...v7.0.2) (2021-08-10)


### Bug Fixes

* **chip:** do not stop keydown propagation ([89e545e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/89e545ec78158b3b6ca582c62174b7999dd39f2a))
* **chip:** emit change on action interaction only ([1e7d2be](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1e7d2be5023471187fbe3f3c8e0b2196b1be96b5))
* **chip:** remove unnecessary class binding ([08747fa](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/08747fa4ba7a7541b06b2ab412708b798994f885))
* **chip:** remove unnecessary tabindex ([7b1604c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7b1604c222b952992f9f7445ca28c617322125e6))
* **chip:** set host disabled attribute ([c21e6e5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c21e6e55f0553820a939efece83403bb49f832b0))
* **expandable:** use math.div ([5930a52](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5930a522e99a1632e0a9b5f162b5926f01702bcb)), closes [#52](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/52)
* **tree-view:** apply the filter to child nodes before searching ([c8c1fd7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c8c1fd7dd9ec5850b91f3378c0a509b5741d9ff5))
* **tree-view:** search filtered nodes for promises ([ae05cb6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ae05cb65e288d89e20f302e3fc8d154cffa179d6))



## [7.0.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v7.0.0...v7.0.1) (2021-08-05)


### Bug Fixes

* **card:** ripple ([e9ab360](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e9ab3606e06161f8986f4a7bf863164e8a5e86b7))
* **card:** use PLATFORM.moduleName ([85c0c63](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/85c0c63b82222f8feed777d294f43ee49ddf2916))
* **list:** do not set trailing class for icon buttons ([ef3f849](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ef3f8490ada05b67f300919c99ab0745314acb4e))


### Features

* **data-table:** add sticky header attribute ([350d870](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/350d870465e1d57729f9131dea6bedc83d2833ca))



# [7.0.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.2.3...v7.0.0) (2021-08-02)

### BREAKING CHANGES
* **chips:** DOM structure has changed. Make sure you follow examples.

### Bug Fixes

* **card:** new DOM ([df20eb3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/df20eb3125d13f4c62575dd756a3b1ad1d2beef7))
* **icon-button:** add ripple ([5a0b487](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5a0b48765c019ed199180052142f2198cf58562d))
* **list:** changed foundation ([e33a0b9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e33a0b9364306fad99fc53eee2b44d1d3c6c90c3))
* **list:** use core mixin ([8c48655](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8c48655bb41fa276647875213257349ac8e85714))
* **switch:** suppress weird typing error ([4efd376](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4efd376cd7ddaf4f793eb56d5f8c0b6667dd7974))
* **switch:** suppress weird typing error ([37af5d2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/37af5d2944eb5137bcd7fd10f39294c6a0240b32))
* **switch:** use deprecated implementation as per docs ([6a2cf64](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6a2cf64e4ac692b717e48480283189e92934a321))
* **tooltip:** foundation changed ([4fb4545](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4fb4545f7b662f0059ed0dbb569f06f5268d9a07))


### Features

* **chips:** use evolution implementation ([31b45b7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/31b45b79b4a1082b279c1fcf833715c24aeded1f))
* **icon-button:** add touch attribute ([17c22aa](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/17c22aa1b71e2d31d87c0c33aefdfc4f04c7a7c0))
* **switch:** use evolution implementation ([8514b03](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8514b0301fb6d5136a3be62238eb523b4803aa25))
* **tooltip:** add delay attributes ([a24cc08](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a24cc08bc1858584d828f61159c38f5564dd07d8))



## [6.2.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.2.2...v6.2.3) (2021-08-01)


### Bug Fixes

* **icon-button:** put material-icons on the right element ([564a64b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/564a64b3e2db71da3c063870a80139f54aa40a08))
* **list:** expose href on item view model ([a0f698d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a0f698d6af720e58d9789ffd012c57f7391ac40a))
* **mdc-data-table:** ignore non-checkbox changes ([e8a3ed1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e8a3ed1f7f440d4321296b315d3a098435acbc1d)), closes [#51](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/51)
* **menu:** trigger width recalculation on open, not just toggle ([f448e56](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f448e561e4cdcaa774b125dec49552525b65e100))
* **select:** set width via min/max ([a212080](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a212080b42c4f8d23d84ff0e6effbe336929bf80))
* **top-app-bar:** parameters order ([34bf1cc](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/34bf1cc2b17a5aca9abd0d4ac7d9d63297d0a9e1))
* **tree-view:** refactor child tree view promise assignment ([ca59516](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ca5951647b652eda39049848e01f3078e2da3128))
* **tree-view:** use already filtered children array ([f532c0e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f532c0ec17278f8602529735be92bd0b7d589f9e))



## [6.2.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.2.1...v6.2.2) (2021-06-19)


### Features

* **all:** generate inline sources


## [6.2.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.2.0...v6.2.1) (2021-06-10)


### Bug Fixes

* **app:** dialog example ([e32d338](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e32d3381b01ec5fd3575898846a45adfa81c2bb3))
* **card:** add primary action tabindex ([3809138](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3809138b9d1adef23022cf85e124bc141c6e5796))
* **dialog:** re-layout ripple in new dialog service ([b8a4d4f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b8a4d4f75ecbe6fe5dd3596e96848e6647d4392d))


### Features

* **lookup:** open/close lookup on Ctrl+Space ([cdb1795](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/cdb179568290ff12354dfee21cb7c74704db8282))



# [6.2.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.1.4...v6.2.0) (2021-06-07)


### Bug Fixes

* **app:** menu example ([63579ef](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/63579ef93a94ebeb07c872f0c9d3cf518265c3e2))


### Features

* **dialog:** refactor service ([51f68c5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/51f68c5cfe23533761397b4c601cd182f308a16c))



## [6.1.4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.1.3...v6.1.4) (2021-06-04)


### Bug Fixes

* **menu:** "reset" menu width ([ce6790a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ce6790a17535a82bebca70cb340e0cdb50d2e12f))
* **tree-view:** account for adding width ([e803b98](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e803b988bcb615cb670512897b30192ed38a8181))
* **tree-view:** do not let padding shrink ([43f80a7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/43f80a7e22f8538a49e62dc81d0107d6c04ca65f))
* **tree-view:** wait till the tree view is fully attached before expanding children ([c6a9685](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c6a9685e7c03a16e438084e1a41669de43fb0a1c))



## [6.1.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.1.2...v6.1.3) (2021-05-26)


### Bug Fixes

* **lookup:** do not emit 'change' on attached ([1f15f57](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1f15f5797194b3a8faf4d3f8c9ce372675ea04c6))
* **lookup:** open lookup on filter change only when still focused ([49d570c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/49d570c5d9c8f11a4194aa103efde51dc798b9c3))
* **tree-view:** use promises instead of a task queue when getting child trees ([c359f14](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c359f14c118960c28d5a13ec3f3d2146bb8a2cdd))


### Features

* **base:** add reference promisifier ([c24b1cc](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c24b1cce929208a22e4468d47b7db763335aca60))



## [6.1.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.1.1...v6.1.2) (2021-05-21)


### Bug Fixes

* **lookup:** protect against missing virtualize plugin ([f372d8b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f372d8bd36528e65abd82337c201cc203d303180))



## [6.1.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.1.0...v6.1.1) (2021-05-13)


### Bug Fixes

* **lookup:** check for undefined option ([ec724e1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ec724e1b92515e3488d997261cb539fd18cf3bb5))
* **top-app-bar:** parameters order ([ad981a9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ad981a931f2fd7606b4f52f10ea905f305df8907))



# [6.1.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.0.3...v6.1.0) (2021-05-11)


### Features

* **lookup:** allow list virtualisation ([1210b05](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1210b05d99b8f4e960fbbeafcb61d799187bfe34))



## [6.0.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.0.2...v6.0.3) (2021-05-09)


### Bug Fixes

* **tree-view:** take filter into account when searching for a node ([2e96609](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2e9660925103890f720ccb24173d7bf216ce31ad))



## [6.0.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.0.1...v6.0.2) (2021-05-04)


### Bug Fixes

* **fab:** workaround for missing ripple ([5c2ccef](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5c2ccefdc8aa2254c073fc30bc4a361142303544))
* **select:** set the flag based on presence of option ([798410e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/798410e4bed820e7ae63bb8a5d39cef5ea8243a0))
* **tooltip:** add missing class ([bbbd628](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/bbbd628852c3b449ba33da1a318513f4b31c5ec7))



## [6.0.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v6.0.0...v6.0.1) (2021-04-28)

### BREAKING CHANGES
* **top-app-bar:** rename align attribute ([7607944](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7607944d38a39d2eb5247342fe5389d684a22735))

### Bug Fixes

* **app:** api page generation ([082b18f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/082b18f833487bbcedd19db2b289d1e2412b550f))
* **app:** group menu example ([8ea3a5e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8ea3a5ef4f5ba293015b8b895ca34bac7193f80b))
* **list:** default to empty control/media type if cannot be implied ([75fcd74](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/75fcd7459c00a1d73c5815ca8a9169004758ba9c))
* **list:** do not manipulate content if 'template' is present ([7e076ef](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7e076ef8f3ff47a84fd14aafb8fd9f57aa8ec297))
* **list:** use proper icons class ([e5eda5a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e5eda5a2cd4cfaf4874a296564de541fc1477c2b))
* **lookup:** move two-line to items ([9283072](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/928307264cfe9b206014dafe00c8d07b2ae72b84))
* **top-app-bar:** rename align attribute ([7607944](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7607944d38a39d2eb5247342fe5389d684a22735))



# [6.0.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v5.1.0...v6.0.0) (2021-04-27)

### BREAKING CHANGES
* **all:** upgrade to MDC@11
* **list:** the DOM structure has changed, see examples

### Bug Fixes

* **chips:** upgrade to MDC@11 ([f48639a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f48639a66efe451bce075e4d742f0fe2f5fa1a91))
* **dialog:** upgrade to MDC@11 ([f06fc40](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f06fc402f79b5a85706db924be2315244190bc1f))
* **dialogs:** add fullscreen attribute ([c987853](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c987853ebafd72ff6293b5412c5be3f15dba925a))
* **list:** new DOM structure ([ef33c56](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ef33c5693963f90ba37bc5ac0a89a20041c5539f))
* **lookup:** do not reset the value when bind() is called ([5f890ca](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5f890ca80136e6716886ac4f9a3fbbba0ee43b6e)), closes [#50](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/50)
* **select:** reset observer internal flag ([cd399e6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/cd399e6b583f10b844bb91fd201ebc295c3b9ce4))
* **select:** set hoisted or fixed select width explicitly ([c1c8282](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c1c82823ab49e8d4636280f12aa5beb91e6137ef))
* **snackbar:** DOM structure ([50aafa1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/50aafa1ac7cd53e243a37cf00b381195194e18a6))


### Features

* **app:** hierarchical menu examples ([2db3ef5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2db3ef58f1c5f71eb96b1620a7dd4988d59a357a)), closes [#47](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/47)
* **menu:** add maxHeight ([1e8477b](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1e8477baf9b8ccf94ef7e1c10dd5d7bbe9499192))
* **menu-surface:** add horizontallyCenteredOnViewport attribute ([8a9a2c5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8a9a2c54ac8ad6a2c0cc8897450a88df152a53c6))
* **tooltip:** add caret position ([825a482](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/825a482a76d6f92a404bab4457c49d3bc7fcf3cf))



# [5.1.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v5.0.4...v5.1.0) (2021-04-07)


### Bug Fixes

* **lookup:** check for undefined option ([d48827c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d48827c1c0043c08d496038fa0e18b31468d1ef3))
* **menu:** set initial default focus state ([08bfc96](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/08bfc969c05543d523bd7c153410608cf599a7e9))
* **tab-bar:** use div instead of custom scroller element ([09071db](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/09071db6c76030fbbb2315f78aea0fde44f5a742)), closes [#45](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/45)
* **tree-view:** use correct button tag ([5d561ef](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5d561efbe3d8087f7f5f707b03615c4656083fbc))


### Features

* **tree-view:** allow nodes filtering ([efda893](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/efda8937112bdc66d84850a33579d10211b8ee77))



## [5.0.4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v5.0.3...v5.0.4) (2021-03-28)


### Bug Fixes

* **linear-progress:** call change handler explicitly ([221c606](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/221c6060e2c68f38f6e3b296e5a61106cd66d53f)), closes [#44](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/44)
* **slider:** use ripple plugin explicitly ([3c3613e](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3c3613eb28745868506df10d03207e6ae6d7f99c)), closes [#43](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/43)



## [5.0.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v5.0.2...v5.0.3) (2021-03-15)


### Bug Fixes

* **text-field:** emit icon event in lower case ([d2d2bca](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d2d2bca2c71b9eb3c5d60e8fa09e6394c3573b8b))


### Features

* **lookup:** add a single option autoselect on blur ([4c3ba68](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4c3ba68f85cca335fd359f0e6d35cba0db808442))



## [5.0.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v5.0.1...v5.0.2) (2021-03-07)


### Bug Fixes

* **select:** observe mutations on menu ([ac8345d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ac8345d1bd93d2d3420e0d2f87ba76aeabaa4333))



## [5.0.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v5.0.0...v5.0.1) (2021-03-05)


### Bug Fixes

* **button:** make root public ([d9d50de](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d9d50de3de5832b994815768457adf2b7431545c))
* **dialog:** call slot detached on dialog close ([8e9dad3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8e9dad34dc49f64664e39a953f71f13e0b0bddca))
* **dialog:** patch focus trap ([9666d75](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9666d7559f37a427baad1358d7355420acc8f349))
* **dialog:** properly monitor for child buttons ([860a9d5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/860a9d5731f42a0b8abb2d4d245ed97887f34940))
* **dialog:** queue focus trap ([0211ccf](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0211ccf1c251c180db7f521a838f50b49d64b7ae))
* **dialog:** use correct element to focus ([768f771](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/768f771e27b8b0e01bec92e20a16c9f590dcd94f))



# [5.0.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v4.0.6...v5.0.0) (2021-02-26)

### BREAKING CHANGES
* **data-table:** the data table markup has been refactored to allow for more flexibility with table rows. In a nutshell, the element template should now be a valid HTML table. Table rows **MUST** be annotated with the `mdc-data-table-row` attribute.

### Features

* **data-table:** rework markup ([92d7b43](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/92d7b43a9b5612b3ae154b7fe1bfa593d58f57cf))



## [4.0.6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v4.0.1...v4.0.6) (2021-02-24)


### Bug Fixes

* **tab-bar:** set correct ripple target ([b70a26f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b70a26f030518c0cf6d3517d194d669bf6bdec4a))



# [v4.0.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v4.0.0...v4.0.1) (2021-02-09)


### Bug Fixes

* **dialog:** typo ([6262f1d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/6262f1d3bf3e9830f49df6d48760fbc487e81fd7))



# [v4.0.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v3.1.0...v4.0.0) (2021-02-09)

### BREAKING CHANGES
* **linear-progress:** remove deprecated reverse attribute ([a8b3d27](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/
* **dialog:** remove class parameter ([4c1cd1c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4c1cd1c6b2343ba86d310b9823bcdf282dd59cf7))

### Bug Fixes

a8b3d27e3dcaf04cbfe98803a85c6579628a51f5))
* **tab-bar:** check for undefined array ([c0093af](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c0093af79871d0c677a76d5153aa9d15fa287691))
* **tab-bar:** check for undefined array ([4b34f21](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4b34f2116758ca294d1e9ab70ffe05b83fe0ab14))


### Features

* **all:** upgrade MDC ([c6f9f55](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/c6f9f5579eccc7c922afa80ff2749225f2f1c1f6))



# [v3.1.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v3.0.5...v3.1.0) (2021-02-04)


### Features

* **dialog:** pass scrim action from service to the dialog ([ac5e591](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ac5e59136ea45956ab6bd771edd9b6b5d59259f0))
* **lookup:** enable body hoisted menu CSS customisation ([994cf00](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/994cf0048243a96c7ead1bc14bc233e11d3d0ada))



# [v3.0.5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v3.0.4...v3.0.5) (2021-02-03)


### Bug Fixes

* **lookup:** set "searching" flag correctly ([361e0bd](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/361e0bdaa023c58b150d136fd7b92baf8dd48057))



# [v3.0.4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v3.0.3...v3.0.4) (2021-02-01)


### Bug Fixes

* **list:** layout on items change ([a55bfa5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a55bfa5ffbefb5179234323c797f2029ea007285))
* **slider:** typo ([9b12b7d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/9b12b7dd0f6392c2d8c1c866bad8b89004eaeff7))



# [v3.0.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v3.0.2...v3.0.3) (2021-01-19)


### Bug Fixes

* **lookup:** restrict to input width by default ([2fadfd1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2fadfd120055ab8027f768f5536cb3979f0ea330))
* **slider:** clean up event handlers on attributes changes ([a2f55fb](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a2f55fbe755ab6e4e95b34a2200e0e4835c6c869))
* **slider:** de-register event handlers on attribute changes ([5257423](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5257423680692d9fe71529fb455a03a84d1f0eed))



# [v3.0.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v3.0.1...v3.0.2) (2021-01-10)


### Bug Fixes

* **slider:** Set minimum value on the start input ([3c0e1ea](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/3c0e1eae9394f538787940672cf9ad98ba90c7b0))
* **slider:** Update layout when min/max are updated. ([2ff9fb9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/2ff9fb945d2a3e6421738e16c2672e67c17fda66))



# [v3.0.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v3.0.0...v3.0.1) (2021-01-10)


### Bug Fixes

* **notch-outline:** update classes on label change ([20744dc](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/20744dcac90af3c3fcee8b9a8104fb6516f9acba)), closes [#36](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/36)
* **select:** re-layout on label change ([5b84d6f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5b84d6ff2ae9276cc8c4e6b5d505f06c5dc59692))
* **text-field:** re-layout on label change ([0e5e156](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0e5e156ec5fcb655639e39854e1579f293757333))



# [v3.0.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.7...v3.0.0) (2021-01-04)


### Bug Fixes

* **slider:** upgrade to MDC 9 ([79ca739](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/79ca739f33e7e7dca8a0bf845459a521a4a16ce7))


### Features

* **tooltip:** add ([ba66efd](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ba66efd452ab84e21cc296d44460a90fd501e7c5))
* **tooltip:** wip ([e57acc0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/e57acc06f54dfb5a47fd56e646d5ae161fe39f05))



# [v2.0.7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.6...v2.0.7) (2020-12-17)


### Bug Fixes

* **data-table:** get rid of magic strings ([1c74794](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1c74794e070d996a5c5da142a275a2fa8cdb7638)), closes [#34](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/34)
* **lookup:** reset value and visible options on options change ([805dea7](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/805dea79e3cb62db7f3335e97ad52efbcad3fe8d))



# [v2.0.6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.5...v2.0.6) (2020-12-10)


### Bug Fixes

* **radio:** reset checked value on destroy ([561a04d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/561a04d22d92699c37906c830213329bfd40710c))
* **switch:** reset checked value on destroy ([561a04d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/561a04d22d92699c37906c830213329bfd40710c))
* **tree-view:** allow de-selecting a node ([03d9717](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/03d971779a4c57896c729ea6f89f44a8069dbd50))



# [v2.0.5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.4...v2.0.5) (2020-12-09)


### Bug Fixes

* **app:** typo ([0c25243](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0c252439bc9b7d0f9f17348fd0f07fe819a2c306)), closes [#28](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/28)
* **checkbox:** reset backing field ([ea7b566](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/ea7b5667a298232ac859fe9f7d64691583dd764f)), closes [#30](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/30)
* **expandable:** single item radius ([388c4f2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/388c4f29a3624722b3b2bdc12478cf5f3da86487))


### Features

* **menu-surface:** ability to ignore outside clicks ([39feeb5](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/39feeb569e6b396cfb4526933493c9a9914ff442))



# [v2.0.4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.3...v2.0.4) (2020-11-19)


### Bug Fixes

* **dialog:** pass initial focus element for a focus trap ([1f805f2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1f805f2d9b2d27efdeb5a04539b6e91ec82643b7))
* **menu-surface:** add full-width attribute ([4634da3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4634da3eddb8e3364d97b451f285803e1fba7cf5))
* **select:** add fixed, natural-width attributes ([45e13aa](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/45e13aa741ccbfd16c74c566e6036682fca136cb))



# [v2.0.3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.2...v2.0.3) (2020-11-13)


### Bug Fixes

* **button:** add label attribute ([fbde989](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fbde989aace7657416d20218304058040a32cfb9))
* **checkox:** always set backing field ([82bcf0a](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/82bcf0ae5381d40fedc30f58de63e5594ea59386))
* **lookup:** focus input on option select ([1b54c64](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1b54c64daaf97ecb93ae343b94bf956173906ce7))
* **lookup:** keyboard handling ([b9fabcb](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/b9fabcba21bd9614d64fa93879bec744f5aa8ef3))
* **lookup:** re-emit input's blur event ([8088b2d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/8088b2d8127a3c85be523552060b6da8c661c2ae))
* **radio:** always set backing fields ([cfda4e9](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/cfda4e903a515ea672c6101121dcdf0449924870))
* **switch:** always set backing field ([7b115a3](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/7b115a3f8e6758c93bd65844ed1cb30e7b06c81e))


### Features

* **layout-grid:** add new-row attribute ([5bebb57](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/5bebb57a774f1ee604db4ec0e5f445a87eb79b75))



# [v2.0.2](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.1...v2.0.2) (2020-11-12)


### Bug Fixes

* **text-field:** do not put label into placeholder ([d24982c](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d24982c1c77089d1e35e9781e90bd089de05d163))



# [v2.0.1](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v2.0.0...v2.0.1) (2020-11-11)


### Bug Fixes

* **lookup:** let change event bubble ([f2cbf0f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f2cbf0fec1b46b1353e960aee00d7f27c8482473))
* **select:** add custom select value observer ([f18bb0d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/f18bb0dead7eb19e5e6fe5582189d53376077816)), closes [#26](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/26)
* **select:** set the value through a view model function ([194960d](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/194960d06ea7a2007ac5882bac0865146e12252b))
* **text-field:** remove fullwidth ([a6e8bc4](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/a6e8bc41336b31e05dcc6ef23569fc1e6fc15429))



# [v2.0.0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.1.6...v2.0.0) (2020-11-06)

### BREAKING CHANGES
* **circular-progress:** bridge style "@aurelia-mdc-web/circular-progress" has been removed
* **layout-grid:** `mdc-layout-grid-cell` elements need to be explicitly wrapped with `mdc-layout-grid-inner`
* **select:** `mdc-list-item` elements need to be explicitly wrapped with `mdc-list`
* **select:** `two-line` attribute has been removed
* **slider:** `markers` attribute has been renamed to `tick-marks`
* **text-field:** `mdc-text-field` tag is automatically replaced by `label` in the DOM
* **MDC:** has been upgraded to v8.0.0, make sure you check breaking changes there

### Bug Fixes

* **text-field:** allow using mdc-text-field as an attribute ([94cf8ec](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/94cf8ec27922ee90057cb4202c6b4874db2f0073)), closes [#22](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/22)
* **text-field:** automatically replace `mdc-text-field` tag with `label` ([18ec9a8](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/18ec9a8166aeb3bad2c141664826b7b9e0d757ac)), closes [#22](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/issues/22)


### Features

* **all:** wip: upgrade to v8.0 ([432760f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/432760f3bd667630b125172712e3d7d84c0bc5ca))
* **app:** upgrade to v8.0 ([1f3e7df](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1f3e7df94c3116046e973f51c19dc4779c4d33d1))
* **circular-progress:** upgrade to v8.0 ([1f69d2f](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/1f69d2f544be431a224b515b312b2fba661a885b))
* **data-table:** upgrade to v8.0 ([92d8bde](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/92d8bdebc89fb2aa73d9bad15739a12ac66c0c66))
* **linear-progress:** upgrade to v8.0 ([0f2bf43](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/0f2bf43b0b7a65f2719e82a62f331894046a6881))
* **select:** upgrade to v8.0 ([eae4845](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/eae4845fb561850e82d46a6b08fd6f66a7a48a5d))
* **slider:** upgrade to v8.0 ([fc9a803](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/fc9a8038ec035fc57ff1719987e936027b3b74dd))
* **text-field:** upgrade to v8.0 ([d8a1249](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/d8a1249718806fa06fa4593c46bb8bd85a79250e))


# [v1.1.6](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/compare/v1.1.5...v1.1.6) (2020-11-04)


### Features

* **layout-grid:** add no-padding attribute ([4c0a662](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/4c0a6626a8b04ab59c37b20afeef558b69b5c804))
* **layout-grid:** allow setting all widths at once ([14b79f0](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web/commit/14b79f083c37535a4245137c63fbb53530ace8ce))



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



