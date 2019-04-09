import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverData:{serverName:string, serverContent:string}) {
console.log(this.serverElements);

    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBPAdded(bpData:{bpName:string,bpContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bpData.bpName,
      content: bpData.bpContent
    });
  }
}
