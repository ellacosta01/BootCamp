import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from './rick-morty.service';

@Component({
  selector: 'app-rick-morty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-morty.component.html',
  styleUrl: './rick-morty.component.css',
})
export class RickMortyComponent {
  characters: any[] = [];

  constructor(private rmService: RickMortyService, private cdr: ChangeDetectorRef) {
    this.rmService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
      this.cdr.detectChanges();
    });
  }
}
