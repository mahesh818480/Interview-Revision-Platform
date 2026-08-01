import { Injectable } from '@angular/core';
import { COMPANIES } from '../data/company-data';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }
  getCompanies() {
    return COMPANIES;
  }
}
