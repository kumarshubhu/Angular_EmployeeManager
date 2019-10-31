import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Emp } from '../emp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})


export class TablesComponent implements OnInit {
  employeeList: Emp[];
  editThisEmployee: Emp;
  userid = sessionStorage.getItem('id');

  constructor(private Employee: EmployeeService, private router: Router) {
    this.employeeList = this.Employee.employee;
  }

  ngOnInit() {
    if (sessionStorage.getItem('id') == null) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/Tables']);
    }
  }

 public onClickLogOut(): void {
    sessionStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  public onKeyUpSearch(): void {
// tslint:disable-next-line: one-variable-per-declaration
    let table, rowOfTable, td, txtval, searchBarValue;
    searchBarValue = ((document.getElementById('searchBar') as HTMLInputElement).value).toLowerCase();
    table = document.getElementById('tableId');
    rowOfTable = table.getElementsByTagName('tr');
// tslint:disable-next-line: forin
    for (const particularRow in rowOfTable) {
      td = rowOfTable[particularRow].getElementsByTagName('td')[3];
      if (td) {
        txtval = td.innerText;
        if (txtval.toLowerCase().indexOf(searchBarValue) >= 0) {
          rowOfTable[particularRow].style.display = '';
        } else {
          rowOfTable[particularRow].style.display = 'none';
        }
      }
    }
  }

  public onClickEditMe(employeeToBeEdited: Emp): void {
    this.editThisEmployee = employeeToBeEdited;
  }

  public onClickAddEmployeeToEmployeeList(empid: string, empName: string, Designation: string, Team: string): void {
// tslint:disable-next-line: object-literal-shorthand
    this.employeeList.push({ EmpId: empid, EmpName: empName, Designation: Designation, Team: Team });
  }
}
