import { XPosition, YPosition, AnchorBoundaryType } from '@material/tooltip';

export class Positions {
  xPositions = Object.values(XPosition).filter(x => typeof x === 'string');
  xPosition = XPosition[XPosition.DETECTED];

  yPositions = Object.values(YPosition).filter(x => typeof x === 'string');
  yPosition = YPosition[YPosition.DETECTED];

  boundaryTypes = Object.values(AnchorBoundaryType).filter(x => typeof x === 'string');
  boundaryType = AnchorBoundaryType[AnchorBoundaryType.BOUNDED];
}
