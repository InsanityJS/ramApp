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


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  public getCharacters(): void {
    this.apiService.getCharactarsList().subscribe((characters: any) => {
      this.characters = characters.results;
    }, error => alert('Something went wrong!'));
  }

  public showEpisodes(episodes: string[]) {
    console.log(episodes);
  }

}
