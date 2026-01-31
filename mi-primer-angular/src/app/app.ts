import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServices } from './services/user.service/user.services';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mi-primer-angular');

}
