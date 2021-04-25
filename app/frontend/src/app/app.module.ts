import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RefreshInterceptor } from './api-auth/refresh.interceptor';
import { JwtInterceptor } from './api-auth/jwt.interceptor';
import { ComponentBridgingService } from './model-service/componentbridging.service';
import { LoginService } from './model-service/users/login.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";
import { MAT_DATE_LOCALE, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { VoucherDetailsComponent } from './voucher-details/voucher-details.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { VoucherPreviewComponent } from './voucher-preview/voucher-preview.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StudentLoginFormComponent } from './login-form/student-login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { WebadmindashboardComponent } from './webadmindashboard/webadmindashboard.component';
import { OrgAdminDashboardComponent } from './org-admin-dashboard/org-admin-dashboard.component';
import { IsSecureGuard } from './model-service/secureredirection.service';

@NgModule({
  declarations: [
    AppComponent,
    FacultyListComponent,
    FacultyDetailsComponent,
    OrganizationListComponent,
    OrganizationDetailsComponent,
    StudentListComponent,
    StudentDetailsComponent,
    VoucherListComponent,
    VoucherDetailsComponent,
    ConfirmationDialogComponent,
    VoucherPreviewComponent,
    StudentHomeComponent,
    LoginFormComponent,
    StudentLoginFormComponent,
    SignUpFormComponent,
    WebadmindashboardComponent,
    OrgAdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-SG' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptor, multi: true },
    ComponentBridgingService,
    IsSecureGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
