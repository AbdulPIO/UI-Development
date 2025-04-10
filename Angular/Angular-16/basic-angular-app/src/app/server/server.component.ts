import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
        `]
})
export class ServerComponent {
    serverId: number = 10; // to output this property in our template we need communication i.e., Data Binding
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // using funtion that returns a string in string interpolation
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}