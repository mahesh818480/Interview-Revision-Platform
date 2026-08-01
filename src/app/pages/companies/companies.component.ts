import { Component } from '@angular/core';
import { Company } from '../../models/question';
import { CompanyService } from '../../services/company.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  companies: Company[] = [];
  filteredCompanies: Company[] = [];
  search = '';
  currentPage = 1;

  pageSize = 6;
  constructor(private companyService: CompanyService, private route: Router) { }

  ngOnInit() {

    this.companies = this.companyService.getCompanies();

    this.filteredCompanies = [...this.companies];

  }

  onSearch() {

    this.filteredCompanies = this.companies.filter(company =>

      company.name.toLowerCase().includes(this.search.toLowerCase())

    );

  }
  get paginatedCompanies() {

    const start = (this.currentPage - 1) * this.pageSize;

    return this.filteredCompanies.slice(start, start + this.pageSize);

  }

  get totalPages() {
    return Math.ceil(this.filteredCompanies.length / this.pageSize);
  }

  get pageNumbers() {
    return Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }

  previousPage() {
    if (this.currentPage > 1)
      this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages)
      this.currentPage++;
  }

  viewQuestion(companyName: string) {
    this.route.navigate(['/questions'], {
      queryParams: { company: companyName }
    })
  }

}
