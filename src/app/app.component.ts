import { Component } from '@angular/core';
import { from, map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MapOperator';

  srcObject = from([
    {fname: 'Sachin', lName:'Tendulkar'},
    {fname: 'Rahul', lName:'Dravid'},
    {fname: 'Saurav', lName:'Ganguly'}
  ])

  ngOnInit() {
    this.srcObject.pipe(
      map(data =>{ return data.fname + ' ' + data.lName})
    )
    .subscribe(data => console.log(data));
  }
}
