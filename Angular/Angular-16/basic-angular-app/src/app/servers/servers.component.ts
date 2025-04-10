import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // using component as element in template

  // selector: '[app-servers]', // using component as attribute

  // selector: '.app-servers', // using component as class

  templateUrl: './servers.component.html',

  // template: '<app-server></app-server><app-server></app-server>', // using quotation for single line template code

  // using backticks for multiple lines of HTML/template code
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;

  serverCreationStatus = "No server was created!";

  serverName = 'TestServer';

  serverCreated = false;

  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
