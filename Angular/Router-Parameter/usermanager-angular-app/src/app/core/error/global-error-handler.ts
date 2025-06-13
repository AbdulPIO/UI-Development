import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private ngZone: NgZone) { }
    handleError(err: any): void {
        this.ngZone.run(() => {
            const msg = err instanceof HttpErrorResponse
                ? `HTTP Error ${err.status}: ${err.message}`
                : `Error: ${err.message || err.toString()}`;
            alert(msg);
            console.error(err);
        })
    }
}