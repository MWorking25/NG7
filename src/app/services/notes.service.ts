import { Injectable , EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  invokeKeepNoteFunction = new EventEmitter();        
  subsVar: Subscription;    

  constructor() { }

  ListNotes()
  {
    this.invokeKeepNoteFunction.emit();    
  }
}
