import { IContainer } from '@aurelia/kernel';
// import { AppTask } from '@aurelia/runtime';
import { MdcButton } from './mdc-button';
import { MdcButtonLabel } from './mdc-button-label';
import { EnhanceMdcButton } from './enhance-mdc-button';

export { MdcButton, MdcButtonLabel };

export const ButtonConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcButton, MdcButtonLabel, EnhanceMdcButton
      // AppTask.with(MdcButton).beforeCompileChildren().call(b => {console.log(b);})
    );
  }
};
