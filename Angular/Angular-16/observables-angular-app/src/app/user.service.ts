import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class USerService {
    // activatedEmitter = new EventEmitter<boolean>();
    activatedEmitter = new Subject<boolean>();
}