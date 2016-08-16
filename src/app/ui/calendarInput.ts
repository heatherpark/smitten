import { Component,
          Input,
          Output,
          EventEmitter } from '@angular/core';
import { Dialog } from 'primeng/primeng';

@Component ({
  selector: 'calendar-input',
  directives: [ Dialog ],
  styles: [],
  template: `
    <div>
      <p-dialog header="Add Event" [(visible)]="display" modal="true" showEffect="fade">
      <form (ngSubmit)="addEvent()">
        Event
        <input type="text" [(ngModel)]="event.summary" name="event" placeholder="...add and event">
        <br>
        Description
        <input type="text" [(ngModel)]="event.description" name="description" placeholder="...add a description">
        <br>
        Location
        <input type="text" [(ngModel)]="event.location" name="location" placeholder="...do we want to know?">
        <br>
        Start Time
        <input type="datetime" [(ngModel)]="event.start.datetime" name="start" placeholder="from">
        <br>
        End Time
        <input type="datetime" [(ngModel)]="event.end.datetime" name="end" placeholder="to">
        <button type="submit">Submit</button>
      </form>
      </p-dialog>

      <button type="text" (click)="showDialog()" pButton icon="fa-external-link-square" label="Show">Add Event</button>
    </div>
  `
})

export class CalendarInput {
  @Output () emitAddition =  new EventEmitter();

  display: boolean = false;

  event = {
    summary: '',
    location: '',
    description: '',
    start: {
      datetime: '',
      timeZone: 'Eastern'
    },
    end: {
      datetime: '',
      timeZone: 'Eastern'
    }
  };

  showDialog() {
    this.display = !this.display;
  };

  addEvent() {
    console.log("hit add Event");
    var event = {
      'summary': 'Google I/O 2015',
      'location': '800 Howard St., San Francisco, CA 94103',
      'description': 'A chance to hear more about Google\'s developer products.',
      'start': {
        'dateTime': '2016-08-20T09:00:00-07:00',
        'timeZone': 'America/Los_Angeles',
      },
      'end': {
        'dateTime': '2016-08-20T17:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      }
    };
    this.emitAddition.next(event);
  };



};

 // 'summary': 'Google I/O 2015',
 //    'location': '800 Howard St., San Francisco, CA 94103',
 //    'description': 'A chance to hear more about Google\'s developer products.',
 //    'start': {
 //      'dateTime': '2016-08-20T09:00:00-07:00',
 //      'timeZone': 'America/Los_Angeles',
 //    },
 //    'end': {
 //      'dateTime': '2016-08-20T17:00:00-07:00',
 //      'timeZone': 'America/Los_Angeles',

// import {
//   Component,
//   Output,
//   EventEmitter
// } from '@angular/core';
// import { ColorPicker } from './color-picker';

// @Component({
//   selector: 'note-creator',
//   template: `
//     <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
//       <form class="row" (ngSubmit)="onCreateNote()">
//         <input
//           type="text"
//           (focus)="toggle(true)"
//           [(ngModel)]="newNote.title"
//           name="newNoteTitle"
//           placeholder="Title"
//           class="col-xs-10 title"
//           *ngIf="fullForm"
//         >
//         <input
//           type="text"
//           (focus)="toggle(true)"
//           [(ngModel)]="newNote.value"
//           name="newNoteValue"
//           placeholder="Take a note..."
//           class="col-xs-10"
//         >
//         <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
//           <div class="col-xs-3">
//             <color-picker
//               (selected)="onColorSelect($event)"
//               [colors]="colors"
//             >
//             </color-picker>
//           </div>
//           <button
//             type="submit"
//             class="btn-light"
//            >
//             Done
//           </button>
//         </div>
//       </form>
//     </div>
//   `
// })
// export class NoteCreator {
//   @Output() createNote = new EventEmitter();
//   colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
//   newNote = {
//     title: '',
//     value: '',
//     color: 'white'
//   };
//   fullForm: boolean = false;

//   onCreateNote() {
//     const { title, value, color } = this.newNote;

//     if (title && value) {
//       this.createNote.next({ title, value, color });
//     }

//     this.reset();
//     this.fullForm = false;
//   }

//   reset() {
//     this.newNote = {
//       title: '',
//       value: '',
//       color: 'white'
//     };
//   }

//   toggle(value: boolean) {
//     this.fullForm = value;
//   }

//   onColorSelect(color: string) {
//     this.newNote.color = color;
//   }
// }
