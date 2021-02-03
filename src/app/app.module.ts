import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { MyTableComponent } from './my-table/my-table.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { MyCardComponent } from './my-card/my-card.component';
import { NumbersCheckComponent } from './numbers-check/numbers-check.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DirectivesExampleComponent,
    MyTableComponent,
    SwitchExampleComponent,
    MyCardComponent,
    NumbersCheckComponent,
    MyCalculatorComponent,
    MyDropdownComponent
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
