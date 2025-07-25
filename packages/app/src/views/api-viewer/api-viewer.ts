import { ConsoleLogger, DeclarationReflection, Deserializer, FileRegistry } from "typedoc/browser";
import apiJson from '../../../../all/doc/api.json';

const logger = new ConsoleLogger();
const deserializer = new Deserializer(logger);
const project = deserializer.reviveProject("API Docs", apiJson as any, {
  projectRoot: "/",
  registry: new FileRegistry(),
});

import { RouteNode } from '@aurelia/router';

export class ApiViewer {
  classesApi?: DeclarationReflection[];

  loading(parameters: Record<string, unknown>, node: RouteNode) {
    const componentName = node.context.parent?.routeConfigContext.config.id.replace('-page', '');
    if (!componentName) {
      return;
    }
    this.classesApi = project.children?.filter(x => x.sources?.find(s => s.fileName.startsWith(`packages/all/src/${componentName}/`)));
  }
}
