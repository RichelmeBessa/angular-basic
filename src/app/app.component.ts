import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('nameInput', null) input: any;
  names: string[] = ['Bob', 'Antonio', 'Jack', 'Rick', 'Maria'];
  value = '';

  addName() {
    this.names.push(this.value);
    this.value = '';
  }

  deleteItem(name: string) {
    this.names = this.names.filter(item => item !== name);
    
  }

  // changeValue(event: any) {
  //   this.value = (event.target.value);
  // }
}
