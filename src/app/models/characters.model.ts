import { MatIconLocation } from "@angular/material/icon";

export interface ICharacter {
    id: number;
    name: string;
    status: StatusEnum;
    species: SpeciesEnum;
    type?: string; //! Опционалный параметр ? если он указан, значит можно не заполнять параметр
    gender: GenderEnum;
    origin?: ILocation;
    location: ILocation;
    image?: string;
    episode: string[];
    url?: string;
    created: Date;
}

export enum StatusEnum {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'unknown'
}

export enum SpeciesEnum {
    Human = 'Human',
    Alien = 'Alien'
}

export enum GenderEnum {
    Female = 'Female',
    Male = 'Male',
    Unknown = 'unknown'
}

export interface ILocation {
    name: string;
    url: string;
}

