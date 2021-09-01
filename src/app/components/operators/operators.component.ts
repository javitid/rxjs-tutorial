import { Component, OnInit } from '@angular/core';
import { concatMap, exhaustMap, switchMap, mergeMap, take } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  public concatMapResult: any;
  public mergeMapResult: any;
  public switchMapResult: any;
  public exhaustMapResult: any;

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');

    const resultConcatMap = clicks.pipe(
      concatMap(ev => interval(1000).pipe(take(4))),
    );
    const resultMergeMap = clicks.pipe(
      mergeMap(ev => interval(1000).pipe(take(4))),
    );
    const resultSwitchMap = clicks.pipe(
      switchMap(ev => interval(1000).pipe(take(4))),
    );
    const resultExhaustMap = clicks.pipe(
      exhaustMap(ev => interval(1000).pipe(take(4))),
    );

    resultConcatMap.subscribe(x => this.concatMapResult = x);
    resultMergeMap.subscribe(y => this.mergeMapResult = y);
    resultSwitchMap.subscribe(z => this.switchMapResult = z);
    resultExhaustMap.subscribe(w => this.exhaustMapResult = w);
  }
}
