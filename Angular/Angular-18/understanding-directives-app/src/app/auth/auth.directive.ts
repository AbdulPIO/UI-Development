import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' }); //to know what type of user we are accepting
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); // telling that this directive will be used in <ng-template> and we wanna get hold of that template
  private viewContainerRef = inject(ViewContainerRef); // give access to the place in the DOM where this directive is being used

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef); // this tells angular to take the content that is between <ng-template> and render it in the place where this directive is used
      } else {
        this.viewContainerRef.clear(); // remove any embedded view that has been rendered
      }
    });
  }

}
