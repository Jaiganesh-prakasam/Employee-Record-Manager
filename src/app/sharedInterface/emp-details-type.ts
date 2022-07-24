import { FormGroup, FormControl, FormArray } from '@angular/forms';

export interface IEmpDetails {
  id: number;
  empGeneral: IEmpGeneral;
  empContact: IEmpContact;
  empSkill: IEmpSkill[];
  empExperience: IEmpExperience[];
}

export interface IEmpGeneral {
  firstName: string;
  lastName: string;
  fullName: string;
  dob: string;
  age: number;
}

export interface IEmpContact {
  email: string;
  phone: string;
  socialInfo: ISocialInfo[];
}

export interface ISocialInfo {
  url: string;
  type: string;
}
export interface IEmpSkill {
  skill: string;
  rate: number;
}

export interface IEmpExperience {
  companyName: string;
  location: {
    city: string;
    country: string;
  };
  companyUrl: string;
  role: string;
  fromDate: string;
  toDate: string;
  experience: number;
}

export interface IEmpGeneralFormGroup {
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  dob: FormControl<string>,
  fullName?: FormControl<string | null>,
  age?: FormControl<number | null>
}

export interface ISocialInfoForm {
  url: FormControl<string>,
  type: FormControl<string>
}

export interface IEmpContactFormGroup {
  email: FormControl<string>;
  phone: FormControl<string>;
  socialInfo: FormArray<FormGroup<ISocialInfoForm>>;
}

export interface IEmpLocation {
  city: FormControl<string>;
  country: FormControl<string>;
}

export interface IEmpExperienceFormGroup {
  companyName: FormControl<string>;
  location: FormGroup<IEmpLocation>;
  companyUrl: FormControl<string>;
  role: FormControl<string>;
  fromDate: FormControl<string>;
  toDate: FormControl<string>;
  experience: FormControl<number>;
}

export interface IEmpExperienceGroup {
  empExperienceArray: FormArray<FormGroup<IEmpExperienceFormGroup>>;
}

export interface IEmpSkillFormGroup {
  skill: FormControl<string>;
  rate: FormControl<number>;
}

export interface IEmpSkillGroup {
  empSkillArray: FormArray<FormGroup<IEmpSkillFormGroup>>;
}

export interface IEmpDetailsFormGroup {
  id?: FormControl<number>;
  empGeneral: FormGroup<IEmpGeneralFormGroup>;
  empContact: FormGroup<IEmpContactFormGroup>;
  empSkill: FormArray<FormGroup<IEmpSkillFormGroup>>;
  empExperience: FormArray<FormGroup<IEmpExperienceFormGroup>>;
}
