import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
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
    console.log(this.notesList);
  }

}
