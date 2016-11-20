import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule],
    declarations: [
        AppComponent,
        TestListComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
