import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <h1>Welcome to {{title}}</h1>
      <p>This is an Angular application that can render a Blazor components.</p>
      <p>
        <button (click)="addBlazorCounter()">Add Blazor component</button>
        <button (click)="removeBlazorCounter()">Remove Blazor component</button>
      </p>

      <div *ngFor="let counter of blazorCounters">
        <comment-antd>
        </comment-antd>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Hackfest 2022';

  blazorCounters: any[] = [];
  nextCounterIndex = 1;

  addBlazorCounter() {
    const index = this.nextCounterIndex++;
    this.blazorCounters.push({
      title: `Counter ${index}`,
      incrementAmount: index,
    });
  }

  removeBlazorCounter() {
    this.blazorCounters.pop();
  }
}
