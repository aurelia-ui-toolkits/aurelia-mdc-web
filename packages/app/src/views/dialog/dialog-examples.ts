import inlineHtml from '!!raw-loader!./inline/inline.html';
import inlineCode from '!!raw-loader!./inline/inline';
import viaServiceHtml from '!!raw-loader!./via-service/via-service.html';
import viaServiceCode from '!!raw-loader!./via-service/via-service';

import { Inline } from './inline/inline';
import { ViaService } from './via-service/via-service';

export class DialogExamples {
  inlineHtml = inlineHtml;
  inlineCode = inlineCode;
  viaServiceHtml = viaServiceHtml;
  viaServiceCode = viaServiceCode;

  inline = Inline;
  viaService = ViaService;
}
