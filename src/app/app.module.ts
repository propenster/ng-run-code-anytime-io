import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { RunnerComponent } from './components/runner/runner.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { TypescriptToJavaComponent } from './components/typescript-to-java/typescript-to-java.component';
import { CodeRunnerComponent } from './components/code-runner/code-runner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RunnerComponent,
    FooterComponent,
    TypescriptToJavaComponent,
    CodeRunnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
