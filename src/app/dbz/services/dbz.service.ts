import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characer.interface';
import {v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 500
    },{
        id: uuid(),
        name: 'Goku',
        power: 9500
    }];
    onNewCharacter(character: Character):void{
        const newCharacter = {id: uuid(),...character}
       this.characters.push(newCharacter);
    }
    deleteCharacterbyId(id:string){
        this.characters = this.characters.filter(character => character.id !== id);
    }

    onDeleteCharacter(index: number): void {
        this.characters.splice(index,1);
    }
}