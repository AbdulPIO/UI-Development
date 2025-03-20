import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {
  // messages = input.required<string[]>();
  private messagesService = inject(MessagesService);

  private cdRef = inject(ChangeDetectorRef);

  private destroyRef = inject(DestroyRef);

  // messages = this.messagesService.allMessages;
  // get messages() {
  //   return this.messagesService.allMessages;
  // }

  messages: string[] = [];

  ngOnInit() {
    const subscription = this.messagesService.messages$.subscribe((messages) => {// setting up a subscription
      this.messages = messages;
      this.cdRef.markForCheck();
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
