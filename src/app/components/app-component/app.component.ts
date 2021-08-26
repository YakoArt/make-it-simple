import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BaseComponent } from '../../modules/app-common/components';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent{
  public loading: boolean = false;

  constructor(private router: Router) {
    super();
    this.router.events.pipe(
      filter((event: Event) => {
        switch (true) {
          case event instanceof NavigationStart:
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            return true;
          }
          default: {
            return false;
          }
        }
      }),
      this.takeUntilDestroy(),
    )
    .subscribe((event: Event) => {
      this.loading = event instanceof NavigationStart;
    });
  }
}
