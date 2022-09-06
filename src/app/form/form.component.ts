
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  myForm:FormGroup =new FormGroup(
    {
      user_name:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      phone_number:new FormControl(null, [Validators.maxLength(11)]),
      address:new FormControl(null, [Validators.required]),
      required_wet_quantity:new FormControl(null, [Validators.required , Validators.max(15)]),
      required_dry_quantity:new FormControl(null, [Validators.required , Validators.max(15)] ),
    }
  );
  
  submitForm(formInfo:FormGroup)
  {
    console.log(formInfo);
    
  }

  ngOnInit(): void {
  }

}

