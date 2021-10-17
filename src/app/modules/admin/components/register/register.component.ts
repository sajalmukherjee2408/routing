import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSubmitted: boolean = false;
  userForm: FormGroup;



  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      // inTime: ['', [Validators.required]],
      // outTime: ['', [Validators.required]],
      // inTimeBeforeHours: ['', [Validators.required]],
      // outTimeBeforeHours: ['', [Validators.required]],
      // inTimeInterval: ['', [Validators.required]],
      // outTimeInterval: ['', [Validators.required]],
      // inTimeNotificationsText: ['', [Validators.required]],
      // outTimeNotificationsText: ['', [Validators.required]],
    });


  }

  addOrUpdateUser(): void {
    // this.isSubmitted = true;

    // // stop here if form is invalid
    // if (this.userForm.invalid) {
    //   return;
    // }

    // if (this.userForm.valid) {
    //   this.AddUser = {
    //     inTime: this.userForm.value.inTime,
    //     outTime: this.userForm.value.outTime,
    //     inTimeBefore: this.userForm.value.inTimeBeforeHours,
    //     outTimeBefore: this.userForm.value.outTimeBeforeHours,
    //     inTimeInterval: this.userForm.value.inTimeInterval,
    //     outTimeInterval: this.userForm.value.outTimeInterval,
    //     inTimeNotificationsText: this.userForm.value.inTimeNotificationsText,
    //     outTimeNotificationsText: this.userForm.value.outTimeNotificationsText,
    //   };
    //   this.UserService.updateNotificationUser(this.AddUser, this.editData.id).subscribe(
    //     (response: any) => {
    //       this.alertService.success(response.message);
    //       this.activeModal.close();
    //     },
    //     (error) => {
    //       this.alertService.error(error.message);
    //     }
    //   );
    // } else {
    //   console.log('error', this.userForm.errors);
    // }
  }
  // convenience getter for easy access to form fields
  // get f() {
  //   return this.userForm.controls;
  // }

}
