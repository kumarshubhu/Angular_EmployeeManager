import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  employeeList: Emp[];
  employeeListToShow: Emp[] = [];
  employeeToBeEdited: Emp;
  userName = sessionStorage.getItem('username');

  constructor(private Employee: EmployeeService, private router: Router) {
    this.employeeList = this.Employee.employee;
  }

  ngOnInit() {
    if (sessionStorage.getItem('username') === null) {
      this.router.navigate(['/login']);
    }
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.employeeList.length; i++) {
      if (this.employeeList[i].UserId === this.userName) {
        if (this.employeeList[i].Designation === 'Team Lead') {
          const TLName = this.employeeList[i].EmpName;
// tslint:disable-next-line: prefer-for-of
          for (let j = 0; j < this.employeeList.length; j++) {
            if (this.employeeList[j].Team === TLName) {
              this.employeeListToShow.push(this.employeeList[j]);
            }
          }
        } else {
          this.employeeListToShow.push(this.employeeList[i]);
        }
      }
    }
  }

  public onClickeditEmployee(editThisEmployee: Emp): void {
    this.employeeToBeEdited = editThisEmployee;
  }

  public onClickLogOut(): void {
    this.router.navigate(['/login']);
    sessionStorage.removeItem('username');
  }
}
