import { Component } from '@angular/core';
import { filter, Observable, of } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ObservablePipe';


   squareOdds = of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 !== 0),
    map( n => n * n)
  );
 
  ngOnInit() {
    this.squareOdds.subscribe( x => { console.log(x)});
  }
    

}
