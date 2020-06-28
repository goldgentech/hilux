import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Field } from '../fields';
import { FieldsService } from 'src/app/shared/fields.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-ajax-button',
  templateUrl: './ajax-button.component.html',
  styleUrls: ['./ajax-button.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class AjaxButtonComponent implements OnInit {

  ajaxData: any;

  @Input() field: Field;

  @Input() customClass: string;

  @Input() formData: any;

  @Input() index: any = 0;

  @Input() row: any;

  @Input() fullFormData: any;

  @Input() formErrors: any;

  constructor(private service: FieldsService) { }

  ngOnInit(): void {
  }

  loadData() {
    this.service.getFieldData(this.field, this.fullFormData).subscribe((data) => {
      this.ajaxData = data;
      this.formData[this.field.fieldID] = data;
    })
  }

  getName(field_name) {
    return `${this.row}_${field_name}_${this.index}`
  }

  getText(field: any, key: string) {
    return this.service.getText(field, key);
  }

  getAjaxData() {
    return this.ajaxData;
  }

  showErrors(field_name: any) {
    return this.service.showErrors(field_name, this.formErrors);
  }

  getErrors(field_name: any) {
    return this.service.getErrors(field_name, this.formErrors);
  }
}