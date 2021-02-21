import { IContainer, IFactory, Constructable, Transformer, Key } from '@aurelia/kernel';
import { IValidationController, ValidationController } from '@aurelia/validation-html';
import { IValidator } from '@aurelia/validation';
import { IPlatform } from 'aurelia';
import {
  IExpressionParser
} from '@aurelia/runtime';
import { MdcValidationResultPresenter } from './mdc-validation-result-presenter';

export class MdcValidationControllerFactory implements IFactory<Constructable<IValidationController>> {
  public Type: Constructable<IValidationController> = (void 0)!;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public registerTransformer(_transformer: Transformer<Constructable<IValidationController>>): boolean {
    return false;
  }

  public construct(container: IContainer, _dynamicDependencies?: Key[] | undefined): IValidationController {
    const controller: IValidationController = _dynamicDependencies !== void 0
      ? Reflect.construct(ValidationController, _dynamicDependencies)
      : new ValidationController(
        container.get<IValidator>(IValidator),
        container.get(IExpressionParser),
        container.get(IPlatform),
        container,
      );
    controller.addSubscriber(new MdcValidationResultPresenter());
    return controller;
  }
}
