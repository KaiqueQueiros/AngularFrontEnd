import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/carrossel/carrossel.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { VideoComponent } from './components/video/video.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    ContentComponent,
    DestaqueComponent,
    NewsletterComponent,
    VideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
