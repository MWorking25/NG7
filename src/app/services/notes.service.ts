import { Injectable , EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  invokeKeepNoteFunction = new EventEmitter();        
  invokeWriteNoteFunction = new EventEmitter();        
  subsVar: Subscription;    

  constructor() { }

  ListNotes()
  {
    this.invokeKeepNoteFunction.emit();    
  }
  getNoteDetails(noteindex)
  {
    this.invokeWriteNoteFunction.emit(noteindex);    
  }
}
