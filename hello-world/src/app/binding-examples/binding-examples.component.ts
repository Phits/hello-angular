import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.scss']
})
export class BindingExamplesComponent {
  title = 'Binding Examples';

  public topic = 'Interpolation Binding';
  public image = './assets/fitz-logo-500x500.png';
  public value = '';

  onClick() {
    console.log('Clicked')
  }
}
