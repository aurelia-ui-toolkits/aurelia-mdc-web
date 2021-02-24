import { loadPackageJson, Package, savePackageJson } from './package.json';

function updateVersions(pkg: Package, newMdcVersion: string, newBridgeVersion: string) {
  pkg.version = newBridgeVersion;
  const depGroups = [pkg.dependencies, pkg.devDependencies];
  for (const group of depGroups) {
    if (!group) {
      continue;
    }
    for (const depName in group) {
      if (depName.startsWith('@aurelia-mdc-web/')) {
        group[depName] = newBridgeVersion;
      } else if (depName.startsWith('@material/')) {
        group[depName] = newMdcVersion;
      }
    }
  }
}

(async function () {
  const pkg = await loadPackageJson();
  const [newMdcVersion, newBridgeVersion] = [...process.argv.slice(2)];
  updateVersions(pkg, newMdcVersion, newBridgeVersion);
  await savePackageJson(pkg);
})();
