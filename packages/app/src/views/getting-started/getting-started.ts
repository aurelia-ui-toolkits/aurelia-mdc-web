export class GettingStarted {
  langShell = ['shell'];
  npmCmd = `npm i @angular-mdc/web`;
  yarnCmd = `yarn add @angular-mdc/web`;
  materialIconsLink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;
  robotoLink = `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">`;
  indexHtml = `<html>
  <head>
    ...
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    ...
  </head>

  <body class="mdc-typography">
    <div aurelia-app='src/main'></div>
  </body>
</html>`;
}
