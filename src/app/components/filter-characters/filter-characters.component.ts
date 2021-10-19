import { Component, Input, OnInit } from '@angular/core';
import { GenderEnum, IFilterCharacter, SpeciesEnum, StatusEnum } from '../../models/characters.model';

@Component({
  selector: 'filter-characters',
  templateUrl: './filter-characters.component.html',
  styleUrls: ['./filter-characters.component.scss']
})
export class FilterCharactersComponent implements OnInit {
  @Input() criteria: IFilterCharacter = {};

  public statuses: StatusEnum[] = [];
  public specieses: SpeciesEnum[] = [];
  public genders: GenderEnum[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getFilters();
  }
  private getFilters(): void {
    Object.values(StatusEnum).map(item => {
      this.statuses.push(item);
    });
    Object.values(SpeciesEnum).map(item => {
      this.specieses.push(item);
    });
    Object.values(GenderEnum).map(item => {
      this.genders.push(item);
    });
  }
}
