import inlineHtml from './inline/inline.html?raw';
import inlineCode from './inline/inline.ts?raw';
import sheetHtml from './sheet/sheet.html?raw';
import sheetCode from './sheet/sheet.ts?raw';
import viaServiceHtml from './via-service/via-service.html?raw';
import viaServiceCode from './via-service/via-service.ts?raw';

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
