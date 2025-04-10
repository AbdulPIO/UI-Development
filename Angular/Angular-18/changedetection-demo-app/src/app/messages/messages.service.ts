import { Injectable, signal } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    // rxjs variable declaration
    messages$ = new BehaviorSubject<string[]>([]);

    // private messages = signal<string[]>([]);
    private messages: string[] = [];
    // allMessages = this.messages.asReadonly();
    get allMessages() {
        return [...this.messages]
    }

    addMessage(message: string) {
        // this.messages.update((prevMessages) => [...prevMessages, message]);
        this.messages = [...this.messages, message]
        this.messages$.next([...this.messages]); // emitting an event with updated data
    }
}