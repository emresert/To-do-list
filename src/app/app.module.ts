import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,MatCheckboxModule,
    AngularFontAwesomeModule,MatInputModule,MatCardModule,DragDropModule,FormsModule,HttpClientModule
  ],
  providers: [
    /* Global değişken tanımlanacağı kısım her servis için kullanabilen apiUrl Örneği */
     { provide:'apiUrl', useValue:'https://api.limantech.com/todo'}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
