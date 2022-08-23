import { Component } from '@angular/core';
import { of, tap, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TapOperator';

  ngOnInit() {
    of(1, 2, 3, 4,5)
    .pipe(
      tap(val => { console.log("before:" + val)}),
      map( val => { return val + 5}),
      tap(val => { console.log("after:" + val)}),
    )
    .subscribe(val => console.log(val))
  }
}
