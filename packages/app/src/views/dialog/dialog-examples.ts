import inlineHtml from '!!raw-loader!./inline/inline.html?raw';
import inlineCode from '!!raw-loader!./inline/inline';
import sheetHtml from '!!raw-loader!./sheet/sheet.html?raw';
import sheetCode from '!!raw-loader!./sheet/sheet';
import viaServiceHtml from '!!raw-loader!./via-service/via-service.html?raw';
import viaServiceCode from '!!raw-loader!./via-service/via-service';

import { Inline } from './inline/inline';
import { ViaService } from './via-service/via-service';
import { Sheet } from './sheet/sheet';

export class DialogExamples {
  inlineHtml = inlineHtml;
  inlineCode = inlineCode;
  sheetHtml = sheetHtml;
  sheetCode = sheetCode;
  viaServiceHtml = viaServiceHtml;
  viaServiceCode = viaServiceCode;

  inline = Inline;
  sheet = Sheet;
  viaService = ViaService;
}
