import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { TextAreaFieldComponent } from './fields/text-area-field/text-area-field.component';
import { AutocompleteFieldComponent } from './fields/autocomplete-field/autocomplete-field.component';
import { DateFieldComponent } from './fields/date-field/date-field.component';
import { NumberFieldComponent } from './fields/number-field/number-field.component';
import { LabelComponent } from './tags/label/label.component';
import { HeadingComponent } from './tags/heading/heading.component';
import { FieldComponent } from './fields/field/field.component';
import { FileUploadComponent } from './fields/file-upload/file-upload.component';
import { RadioButtonFieldComponent } from './fields/radio-button-field/radio-button-field.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CurrencyFieldComponent } from './fields/currency-field/currency-field.component';
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { EntitySelectComponent } from './fields/entity-select/entity-select.component';
import { StepSelectComponent } from './fields/step-select/step-select.component';
import { DisplayFieldsComponent } from './tags/display-fields/display-fields.component';
import { DisplayImageComponent } from './tags/display-image/display-image.component';
import { DisplayImageGroupComponent } from './tags/display-image-group/display-image-group.component';
import { DisplayPdfComponent } from './tags/display-pdf/display-pdf.component';
import { DisplayPdfGalleryComponent } from './tags/display-pdf-gallery/display-pdf-gallery.component';
import { DisplayTableComponent } from './tags/display-table/display-table.component';
import { DisplayFieldDataComponent } from './tags/display-field-data/display-field-data.component';
import { DisplayFieldGroupComponent } from './tags/display-field-group/display-field-group.component';
import { CustomPageComponent } from './custom-page/custom-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { FormComponent } from './form/form.component';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';
import { CommitDataGeneratorComponent } from './rule-generator/commit-data-generator/commit-data-generator.component';
import { StartCriteriaGeneratorComponent } from './rule-generator/start-criteria-generator/start-criteria-generator.component';
import { EndCriteriaGeneratorComponent } from './rule-generator/end-criteria-generator/end-criteria-generator.component';
import { ValuesGeneratorComponent } from './rule-generator/commit-data-generator/values-generator/values-generator.component';
import { PredicateGeneratorComponent } from './rule-generator/predicate-generator/predicate-generator.component';
import { OrPredicateGeneratorComponent } from './rule-generator/or-predicate-generator/or-predicate-generator.component';
import { AndPredicateGeneratorComponent } from './rule-generator/and-predicate-generator/and-predicate-generator.component';
import {PrettyJsonModule} from 'angular2-prettyjson';
import { ValueGeneratorComponent } from './rule-generator/value-generator/value-generator.component';
import { DataInGeneratorComponent } from './rule-generator/data-in-generator/data-in-generator.component';
import { FieldsGeneratorComponent } from './rule-generator/data-in-generator/fields-generator/fields-generator.component';
import { FieldOrderGeneratorComponent } from './rule-generator/data-in-generator/field-order-generator/field-order-generator.component';
import { RowFieldsComponent } from './rule-generator/data-in-generator/field-order-generator/row-fields/row-fields.component';
import { DropdownValuesComponent } from './rule-generator/data-in-generator/fields-generator/dropdown-values/dropdown-values.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    InputFieldComponent,
    SelectFieldComponent,
    TextAreaFieldComponent,
    AutocompleteFieldComponent,
    DateFieldComponent,
    NumberFieldComponent,
    LabelComponent,
    HeadingComponent,
    FieldComponent,
    FileUploadComponent,
    RadioButtonFieldComponent,
    CurrencyFieldComponent,
    CheckboxFieldComponent,
    EntitySelectComponent,
    StepSelectComponent,
    DisplayFieldsComponent,
    DisplayImageComponent,
    DisplayImageGroupComponent,
    DisplayPdfComponent,
    DisplayPdfGalleryComponent,
    DisplayTableComponent,
    DisplayFieldDataComponent,
    DisplayFieldGroupComponent,
    CustomPageComponent,
    FormComponent,
    RuleGeneratorComponent,
    CommitDataGeneratorComponent,
    StartCriteriaGeneratorComponent,
    EndCriteriaGeneratorComponent,
    ValuesGeneratorComponent,
    PredicateGeneratorComponent,
    OrPredicateGeneratorComponent,
    AndPredicateGeneratorComponent,
    ValueGeneratorComponent,
    DataInGeneratorComponent,
    FieldsGeneratorComponent,
    FieldOrderGeneratorComponent,
    RowFieldsComponent,
    DropdownValuesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PrettyJsonModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'ar'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
