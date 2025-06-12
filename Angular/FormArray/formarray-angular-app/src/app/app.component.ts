import { Component } from '@angular/core';
import { TeamFormComponent } from './components/team-form/team-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TeamFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formarray-angular-app';
}
