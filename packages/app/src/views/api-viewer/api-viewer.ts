import { ConsoleLogger, DeclarationReflection, Deserializer, FileRegistry } from "typedoc/browser";
import apiJson from '../../../../all/doc/api.json' with { type: "json" };

const logger = new ConsoleLogger();
const deserializer = new Deserializer(logger);
const project = deserializer.reviveProject("API Docs", apiJson as any, {
  projectRoot: "/",
  registry: new FileRegistry(),
});

import { RoutingInstruction, route } from '@aurelia/router';

@route({ path: 'api' })
export class ApiViewer {
  classesApi?: DeclarationReflection[];

  loading(parameters: Record<string, unknown>, ri: RoutingInstruction) {
    const componentName = ri.endpoint.scope?.routingInstruction?.component.name?.replace('-page', '');
    if (!componentName) {
      return;
    }
    this.classesApi = project.children?.filter(x => x.sources?.find(s => s.fileName.startsWith(`packages/all/src/${componentName}/`)));
  }
}
