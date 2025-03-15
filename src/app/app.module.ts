import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom, NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
    ],
    providers: [
      DatePipe, provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom([
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
      ])
    ]
})
export class AppModule { }
