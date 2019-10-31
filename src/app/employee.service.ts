import { Login } from './login';
import { Injectable } from '@angular/core';
import { Emp } from './emp';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Emp[] = [{ UserId: 'jurgen12345', EmpId: 'IN123', EmpName: 'jurgen', Designation: 'Country Manager', Team: 'None' },
  { UserId: 'ashok12345', EmpId: 'IN124', EmpName: 'Ashok', Designation: 'Software head', Team: 'None' },
  { UserId: 'balaji12345', EmpId: 'IN125', EmpName: 'Balaji', Designation: 'Chief Architect', Team: 'None' },
  { UserId: 'hanumanthe12345', EmpId: 'IN126', EmpName: 'Hanumanthe', Designation: 'Team Lead', Team: 'Hanumanthe' },
  { UserId: 'nagrajan12345', EmpId: 'IN127', EmpName: 'Nagrajana', Designation: 'Senior Software Engineer', Team: 'Hanumanthe' },
  { UserId: 'anubhav12345', EmpId: 'IN128', EmpName: 'Anubhav', Designation: 'Software Engineer', Team: 'Hanumanthe' },
  { UserId: 'vishal12345', EmpId: 'IN129', EmpName: 'Vishal', Designation: 'Associate Software Engineer', Team: 'Hanumanthe' },
  { UserId: 'shubham12345', EmpId: 'IN290', EmpName: 'Shubham', Designation: 'Traine Software Engineer', Team: 'Hanumanthe' }, ] ;


  Credentials: Login[] = [{ UserId: 'jurgen12345', Password: '12345' },
  { UserId: 'ashok12345', Password: '12345' },
  { UserId: 'balaji12345', Password: '12345' },
  { UserId: 'hanumanthe12345', Password: '12345' },
  { UserId: 'nagrajan12345ashok12345', Password: '12345' },
  { UserId: 'anubhav12345', Password: '12345' },
  { UserId: 'vishal12345', Password: '12345' },
  { UserId: 'shubham12345', Password: '12345' }, ] ;


  constructor() { }

}
