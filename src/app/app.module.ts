import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MiDeudaComponent } from './components/mi-deuda/mi-deuda.component';
import { MyToysSeparateComponent } from './components/my-toys-separate/my-toys-separate.component';
import { MyPaymentsComponent } from './components/my-payments/my-payments.component';
import { PayDebtComponent } from './components/pay-debt/pay-debt.component';
import { SeparateToysComponent } from './components/separate-toys/separate-toys.component';
import { AllToysComponent } from './components/all-toys/all-toys.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddToysComponent } from './components/add-toys/add-toys.component';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { DeleteToysComponent } from './components/delete-toys/delete-toys.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    SpinnerComponent,
    MiDeudaComponent,
    MyToysSeparateComponent,
    MyPaymentsComponent,
    PayDebtComponent,
    SeparateToysComponent,
    AllToysComponent,
    AddClientComponent,
    AddToysComponent,
    DeleteClientComponent,
    DeleteToysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
