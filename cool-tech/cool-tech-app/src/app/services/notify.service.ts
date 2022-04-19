import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

  visible = false;

  messages: string[] = [];

  show(msg: string, type: string) {



    let el = document.getElementById("notification");

    el!.style.display = 'inline';

    el!.innerHTML = 'Server error:' + msg;

    if (type == 'error') {
      el!.style.background = 'rgb(200, 62, 62';
      el!.style.color = 'white';


    } else if (type == 'success') {
      el!.style.background = '#71fea5';
      el!.style.color = 'black';

    }

    setTimeout(function () {
      el!.style.display = 'none';
    }, 4.0 * 1000)
  };


};


