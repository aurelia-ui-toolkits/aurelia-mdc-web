import { IContainer } from 'aurelia';
import { MdcDataTable } from './mdc-data-table';
import { CheckboxConfiguration } from '@aurelia-mdc-web/checkbox';
import { MdcDataTableRow } from './mdc-data-table-row';

export { MdcDataTable } from './mdc-data-table';

export const DataTableConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcDataTable, MdcDataTableRow, CheckboxConfiguration);
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
