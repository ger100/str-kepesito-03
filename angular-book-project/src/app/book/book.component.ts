import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  saveBook():any{}

}
