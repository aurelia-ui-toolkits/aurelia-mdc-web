To rebuild material palette code

* go to https://material.io/resources/color
* in `scripts/app-*.js` file find the text `t.MaterialPalette = r`
* copy variable `r` assignment statement and paste it into the console
* run `JSON.stringify(r.palettes.reduce((p,c)=>{p[c.name]=c.hexes.reduce((p1,c1)=>{p1[r.shades[c.hexes.indexOf(c1)]] = c1; return p1;},{}); return p; }, {}))`
* clean up property names
