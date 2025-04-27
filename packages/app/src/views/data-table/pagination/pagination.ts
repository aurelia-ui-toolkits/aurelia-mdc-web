import { MdcSnackbarService } from '@aurelia-mdc-web/all';
import { inject } from 'aurelia';

@inject(MdcSnackbarService)
export class Pagination {
  constructor(private snackbarService: MdcSnackbarService) { }

  pageSize = 10;
  pageSizes = [10, 20, 30];
  activePage = 1;

  desserts = [
    { checked: false, name: 'Frozen yogurt', calories: 159, carbs: 24, protein: 4, comment: 'Super tasty' },
    { checked: true, name: 'Ice cream sandwich', calories: 237, carbs: 37, protein: 4.3, comment: 'I like ice cream more' },
    { checked: false, name: 'Eclair', calories: 262, carbs: 16, protein: 6, comment: 'New filling flavor' }
  ];

  handleNavigation(type: string) {
    this.snackbarService.open(`navigation type: ${type}`);
    switch (type) {
      case 'first': this.activePage = 1; break;
      case 'prev': this.activePage--; break;
      case 'next': this.activePage++; break;
      case 'last': this.activePage = 4; break;
    }
  }
}
