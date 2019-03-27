import { Component, OnInit } from '@angular/core';
import {Notes} from '../../models/notes';
import {NotesService} from '../../services/notes.service';
@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.scss']
})
export class WriteNotesComponent implements OnInit {
  
  public imagePath;
  imgURL: any;
  public message: string;
 
  ListOfNotes:Notes[] = [];
  writtenNote:Notes = {note:'',url:'',comments:[{comment:'',createdby:'',createddate:''}],files:[],lables:[],createdby:'sample user',createddate:new Date(),todos:[{item:'',createddate:new Date(),completed:'',completeddate:new Date()}]};

  constructor(private _NotesService : NotesService) {}

  ngOnInit() {

    if(JSON.parse(localStorage.getItem('Notes')))
      {
        this.ListOfNotes = JSON.parse(localStorage.getItem('Notes'));
      }
      else
      {
        this.ListOfNotes = [];
      }

      if (this._NotesService.subsVar  != undefined) {    
        this._NotesService.subsVar = this._NotesService.    
        invokeKeepNoteFunction.subscribe((index:number) => {    
              this.getNoteDetails(index);
        });    
      }
  }

  
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
      this.writtenNote.files.push(this.imgURL); 
    }
  }

  SaveNote()
  {
    this.ListOfNotes.push(this.writtenNote);
    localStorage.setItem('Notes', JSON.stringify(this.ListOfNotes));
    this._NotesService.ListNotes(); 
  }

  getNoteDetails(index)
  {
    console.log(index);
  }

}
