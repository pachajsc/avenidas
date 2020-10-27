import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataAvenidasService } from '../app/services/in-memory-data-avenidas.service';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SubInitiativesComponent } from './components/sub-initiatives/sub-initiatives.component';
import { SubInitiativesDetailComponent } from './components/sub-initiatives-detail/sub-initiatives-detail.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { CustomerCentricityComponent } from './components/customer-centricity/customer-centricity.component';
import { CybersecurityComplianceComponent } from './components/cybersecurity-compliance/cybersecurity-compliance.component';
import { DigitalStrategyComponent } from './components/digital-strategy/digital-strategy.component';
import { TechnologicalStrategyComponent } from './components/technological-strategy/technological-strategy.component';
import { TalentManagementComponent } from './components/talent-management/talent-management.component';
import { NewITModelComponent } from './components/new-itmodel/new-itmodel.component';
import { AvenuesState } from '../state/avenues.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubInitiativesComponent,
    SubInitiativesDetailComponent,
    HeroComponent,
    NavComponent,
    CustomerCentricityComponent,
    CybersecurityComplianceComponent,
    DigitalStrategyComponent,
    TechnologicalStrategyComponent,
    TalentManagementComponent,
    NewITModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataAvenidasService),
    NgxsModule.forRoot([AvenuesState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
