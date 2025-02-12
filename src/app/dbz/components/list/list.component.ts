import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characer.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteCharacter:EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  emitDeleteCharacter(index: string){
      this.onDeleteCharacter.emit(index);
  }
}
