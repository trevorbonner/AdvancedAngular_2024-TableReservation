import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  isNotFound=true;
  currentStyles: Record<string, boolean> = {};


  getStyleClasses()
  {
    this.currentStyles = {
      notFoundMessage: true,
      notFoundMessageBackGround: true
    }

    return this.currentStyles;
  }
}
