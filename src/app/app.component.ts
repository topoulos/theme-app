import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'themeapp';

  theme = new BehaviorSubject<string>('light-theme');

  themes = ['light-theme', 'dark-theme', 'pink-theme'];

  changeTheme(themeValue) {
    this.theme.next(themeValue.value);
  }
}

