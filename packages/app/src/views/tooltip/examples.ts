import basicHtml from '!!raw-loader!./basic.html';
import positionsHtml from '!!raw-loader!./positions.html';
import { XPosition, YPosition, AnchorBoundaryType } from '@material/tooltip';

export class Examples {
  basicHtml = basicHtml;
  positionsHtml = positionsHtml;

  xPositions = Object.values(XPosition).filter(x => typeof x === 'string');
  xPosition = XPosition[XPosition.DETECTED];

  yPositions = Object.values(YPosition).filter(x => typeof x === 'string');
  yPosition = YPosition[YPosition.DETECTED];

  boundaryTypes = Object.values(AnchorBoundaryType).filter(x => typeof x === 'string');
  boundaryType = AnchorBoundaryType[AnchorBoundaryType.BOUNDED];

}
