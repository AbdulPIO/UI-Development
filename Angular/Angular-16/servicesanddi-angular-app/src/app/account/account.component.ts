import { Component, inject, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) { }

  // another syntax to inject dependency
  // private loggingService?: LoggingService;
  // constructor() {
  //   this.loggingService = inject(LoggingService);
  // }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
