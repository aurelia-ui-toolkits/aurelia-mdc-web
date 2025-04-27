import { IContainer } from 'aurelia';
import { MdcDataTable } from './mdc-data-table';
import { CheckboxConfiguration } from '../checkbox';
import { MdcDataTableRow } from './mdc-data-table-row';

export { MdcDataTable } from './mdc-data-table';

let registered = false;

export const DataTableConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcDataTable, MdcDataTableRow, CheckboxConfiguration);
    }
  }
};

// export function configure(config: FrameworkConfiguration) {
//   config.globalResources([
//     PLATFORM.moduleName('./mdc-data-table')
//   ]);

//   config.aurelia.use
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/checkbox'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/linear-progress'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/select'));
// }
