import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // we can add inline css using styles [] array - these styles take over the external styles 
  styles: [`
    h3 {
      color: dodgerblue;
    }
    `]
})
export class AppComponent {
  title = 'basic-angular-app';
}
