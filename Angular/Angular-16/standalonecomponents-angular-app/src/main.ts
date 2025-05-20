import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { AppRoutingModule } from "./app/app-routing.module";
// import { AnalyticsService } from "./app/shared/analytics.service";

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule)
    ]
});