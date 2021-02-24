/* eslint-disable no-undef */
import { loadPackageJson, Package, savePackageJson } from './package.json';

function updateVersions(pkg: Package, newMdcVersion: string | undefined, newBridgeVersion: string | undefined) {
  if (newBridgeVersion) {
    pkg.version = newBridgeVersion;
  }
  const depGroups = [pkg.dependencies, pkg.devDependencies];
  for (const group of depGroups) {
    if (!group) {
      continue;
    }
    for (const depName in group) {
      if (depName.startsWith('@aurelia-mdc-web/') && newBridgeVersion) {
        group[depName] = `^${newBridgeVersion}`;
      } else if (depName.startsWith('@material/') && newMdcVersion) {
        group[depName] = `^${newMdcVersion}`;
      }
    }
  }
}

(async function () {
  const pkg = await loadPackageJson();
  let newMdcVersion: string | undefined;
  let newBridgeVersion: string | undefined;
  const mdcIndex = process.argv.indexOf('--mdc');
  if (mdcIndex !== -1) {
    newMdcVersion = process.argv[mdcIndex + 1];
  }
  const bridgeIndex = process.argv.indexOf('--bridge');
  if (bridgeIndex !== -1) {
    newBridgeVersion = process.argv[bridgeIndex + 1];
  }
  updateVersions(pkg, newMdcVersion, newBridgeVersion);
  await savePackageJson(pkg);
})();
