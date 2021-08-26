import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '../../modules/app-common/components';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss'],
  // viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class DefaultPageComponent extends BaseComponent implements OnInit {
  public citizenForm!: FormGroup;
  /** Значение формы в шаблоне */
  public citizenFormData: string = '';
  /** Запрос к БД */
  public citizen$: Observable<any> = this.http.get('/api/citizens/2ba8d5ab-d649-4285-be6c-5308fa1a2782');

  count: number = 0;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
    super();
  }

  get emails(): FormArray {
    return this.citizenForm.get('emails') as FormArray;
  }

  public ngOnInit(): void {
    this.citizenForm = this.fb.group({
      firstname: new FormControl(),
      surname: new FormControl(),
      patronymic: new FormControl(),
      gender: new FormControl(),
      birthday: new FormControl(),
      phoneInfo: this.fb.group({
        mobile: new FormControl(),
        home: new FormControl(),
      }),
      emails: this.fb.array([]),
    });

    this.citizen$.pipe(this.takeUntilDestroy())
    .subscribe((citizen) => {
      if (citizen.emails?.length) {
        citizen.emails.forEach(() => {
          const field = new FormControl();
          (this.citizenForm.controls.emails as FormArray).push(field);
        });
      }
      this.citizenForm.patchValue(citizen);
    });

    this.citizenForm.valueChanges.pipe(this.takeUntilDestroy())
      .subscribe(data => {
        this.citizenFormData = JSON.stringify(data)
      });
  }

  public onClick(): void {
    this.citizenFormData = JSON.stringify(this.citizenForm.value);
    console.log(this.citizenForm.value);
  }
}
