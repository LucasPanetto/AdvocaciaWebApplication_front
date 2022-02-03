import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';

import { CustomerRoutingModule } from './customer-routing.module';
import { OverviewComponent } from './listage/overview.component';
import { ManageComponent } from './manage/manage.component';
import { ProfileDetailsComponent } from './manage/forms/profile-details/profile-details.component';
import { ConnectedAccountsComponent } from './manage/forms/connected-accounts/connected-accounts.component';
import { DeactivateAccountComponent } from './manage/forms/deactivate-account/deactivate-account.component';
import { EmailPreferencesComponent } from './manage/forms/email-preferences/email-preferences.component';
import { NotificationsComponent } from './manage/forms/notifications/notifications.component';
import { SignInMethodComponent } from './manage/forms/sign-in-method/sign-in-method.component';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { CustomerComponent } from './customer.component';
import { Step1Component } from './manage/wizard/stepTypePerson/step1.component';
import { Step2Component } from './manage/wizard/stepPersonalData/step2.component';
import { Step3Component } from './manage/wizard/stepAddress/step3.component';
import { Step4Component } from './manage/wizard/stepHistoric/step4.component';
import { Step5Component } from './manage/wizard/step5/step5.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CustomerComponent,
    OverviewComponent,
    ManageComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    ProfileDetailsComponent,
    ConnectedAccountsComponent,
    DeactivateAccountComponent,
    EmailPreferencesComponent,
    NotificationsComponent,
    SignInMethodComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    ReactiveFormsModule,
    NgbTooltipModule
    /* WizardsModule */
  ],
})
export class CustomerModule { }
