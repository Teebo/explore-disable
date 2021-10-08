import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [{ value: 'Foo', disabled: true }, [Validators.required]],
      lastName: ['Bar']
    });

  // this.lastName.disable();

    console.log(this.lastName);
    console.log('Form:::', this.form);

    console.log(this.form.value);
    console.log(this.form.getRawValue());

    this.form.valueChanges
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(
        (status) => {
          if (this.form.status === 'VALID') {// `this.form.status` is "DISABLED"
            // set some state value
          }
        }
      );

   // this.lastName.setValue('Baz');
  }

  onSubmit(): void { }

  get firstName(): FormControl {
    return this.form.controls.firstName as FormControl;
  }

  get lastName(): FormControl {
    return this.form.controls.lastName as FormControl;
  }
}
