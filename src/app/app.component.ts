import { Component } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FilterOperator';

  values = [
    {name: 'John', age:30},
    {name: 'Alex', age:40}
  ];

  ngOnInit() {
    from(this.values)
    .pipe(
      filter(val => { return val.age > 30})
    )
    .subscribe(val => console.log(val));
  }
}
