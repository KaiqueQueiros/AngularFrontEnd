import { FormBuilder } from "@angular/forms";

export interface Client extends FormBuilder{
    name: string;
    email: string;
  }
