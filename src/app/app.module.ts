import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  bootstrap: [RootComponent],
  declarations: [
    RootComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class AppModule {}
