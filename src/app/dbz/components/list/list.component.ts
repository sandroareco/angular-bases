import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()

  public characterList: Character[] = [{
    name: '',
    power:0
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    //TODO: emitir el ID del personaje
    if(!id) return;
    this.onDelete.emit( id ); 
  }
}
