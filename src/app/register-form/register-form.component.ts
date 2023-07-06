import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit(): void {
    
  }


  registerForm = this.fb.group({
    firstName: ['',[Validators.required, Validators.minLength(2)]],
    lastName: [''],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    gender: [''],
    age: [0,[this.checkIfAgeAbove18]],
    email: ['',[Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
    phone: ['',[Validators.pattern(/^[789]\d{9,9}$/)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zipCode: ['',[Validators.pattern(/^\d{5,6}$/)]]

    })
}, { validators: this.mustMatch('password','confirmPassword') });

get firstName() { return this.registerForm.get("firstName") };

get lastName() { return this.registerForm.get("lastName") };

get password() { return this.registerForm.get("password"); }

get confirmPassword() { return this.registerForm.get("confirmPassword"); }

get gender() { return this.registerForm.get("gender"); }

get age() { return this.registerForm.get("age"); }

get email() { return this.registerForm.get("email"); }

get phone() { return this.registerForm.get("phone"); }

get zipCode() { return this.registerForm.get("address.zipCode"); }


checkIfAgeAbove18(c: AbstractControl){
  if (c.value !== '') {
    if (c.value < 18) {
      return { invalidAge: true }
    }
  }
  return null;
}

mustMatch(controlName: string, matchingControlName: string) {
  return (fg: FormGroup): ValidationErrors | null => {
    const control = fg.controls[controlName];
    const matchingControl = fg.controls[matchingControlName];

    if(control.value !== matchingControl.value){
      matchingControl.setErrors({passwordMismatch : true});
      return {passwordMismatch : true};
    }

    return null;
  }
}

mustMatchValidator (fg: AbstractControl): ValidationErrors|null {
  
  const passwordValue = fg.get("password")?.value;
  const confirmPasswordValue = fg.get("confirmPassword")?.value;
  console.log('pswd:',passwordValue);
  console.log('cnfm',confirmPasswordValue);
  if (passwordValue && confirmPasswordValue && passwordValue !== confirmPasswordValue) {
      return { passwordMismatch: true }
  }
  return null;
}

onSubmit(){
  let user: User = this.registerForm.value as User;
  this.userService.addUser(user).subscribe({
    next: data => {
      this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      })
    },
    error: err => {
      this._snackBar.open('Failed to register user !! Please Try Again Later', 'Failure', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    }
  });
}
resetform(registerForm: any){
  registerForm.resetForm();
}
}

