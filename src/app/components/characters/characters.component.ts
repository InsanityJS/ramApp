import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICharacter, StatusEnum} from '../../models/characters.model';


@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[] = [];
  public statusEnum = StatusEnum;
  public length = 0;
  public pageSize = 20;
  //pageEvent: PageEvent;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }
  public getCharacters(page: number): void {
    this.apiService.getCharactarsList(page).subscribe((characters: any) => {
      this.characters = characters.results;
      this.length = characters.info.count;
    }, 
    error => alert('Something went wrong!'));
    
  }

  public showEpisodes(episodes: string[]) {
    console.log(episodes);
  }

}
