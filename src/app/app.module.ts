import { AuthGuard } from './core/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRegisterModule } from './login-register/login-register.module';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AssessmentsModule } from './assessments/assessments.module';
import { MaterialModule } from './material.module';
import { PriceListModule } from './price-list/price-list.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ComponentsModule,
    AppRoutingModule,
    LoginRegisterModule,
    CoreModule,
    AssessmentsModule,
    PriceListModule,
    DashboardModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
