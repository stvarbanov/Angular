import { trigger, transition, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { transitionAnimation } from 'src/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        useAnimation(transitionAnimation, {
          params: {
            height: 0,
            opacity: 1,
            backgroundColor:'lightblue',
            time: '1s',
            
            
          }
        })
      ])
    ])],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cool-tech-app';

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

