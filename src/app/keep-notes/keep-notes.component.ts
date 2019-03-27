import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {WriteNotesComponent} from './write-notes/write-notes.component';
import {NotesService} from '../services/notes.service';
import {Notes} from '../models/notes';
import * as $ from 'jquery';
@Component({
  selector: 'app-keep-notes',
  templateUrl: './keep-notes.component.html',
  styleUrls: ['./keep-notes.component.scss']
})
export class KeepNotesComponent implements OnInit {

  notesList: Notes[]= [];
  labelColors = ['green','red','blue','blueviolet','coral','darkorange'];
  @Output() getNoteData: EventEmitter<number> = new EventEmitter();

  constructor(public dialog: MatDialog,private _NotesService : NotesService) { }

  ngOnInit() {
    this.NotesList();  
    if (this._NotesService.subsVar==undefined) {    
      this._NotesService.subsVar = this._NotesService.    
      invokeKeepNoteFunction.subscribe(() => {    
        this.NotesList();    
      });    
    } 
  }

  openDialog() {
    const dialogRef = this.dialog.open(WriteNotesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  NotesList(){
    this.notesList = JSON.parse(localStorage.getItem('Notes'));
  }

  setLabels(index,label)
  {
    var labelexist = this.notesList[index].lables.filter((value)=>{
        return value == label
    });
    if(labelexist.length <= 0)
    {
      this.notesList[index].lables.push(label);
      localStorage.setItem('Notes', JSON.stringify(this.notesList));
      this.NotesList();
    }
  }

  DeleteNote(index)
  {
    var yes = confirm('Want to delete?');
    if(yes)
    this.notesList.splice(index,1);
    localStorage.setItem('Notes', JSON.stringify(this.notesList));
    this.NotesList();
  }

  getNoteDetails(noteindex)
  {

    this.getNoteData.emit(noteindex);
     this.openDialog();
  }


}
