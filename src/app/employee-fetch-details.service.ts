import { Injectable } from '@angular/core';
import { IEmpDetails } from './sharedInterface/emp-details-type';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { EmpDetailsService } from './pages/emp-details/emp-details.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeFetchDetailsService {
  private employeesUrl = 'api/employees';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(  private http: HttpClient) { }
  /** GET Employees from the server */
  getEmployees(): Observable<IEmpDetails[]> {
    return this.http.get<IEmpDetails[]>(this.employeesUrl)
      .pipe(
        catchError(this.handleError<IEmpDetails[]>('getEmployees', []))
      );
  }
  /** GET Employee by id. Will 404 if id not found */
  getEmployee(id: number): Observable<IEmpDetails> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<IEmpDetails>(url).pipe(
      catchError(this.handleError<IEmpDetails>(`getEmployee id=${id}`))
    );
  }

  /** POST: add a new employee to the server */
  addEmployee(employee: IEmpDetails): Observable<IEmpDetails> {
    return this.http.post<IEmpDetails>(this.employeesUrl, employee, this.httpOptions).pipe(
      tap((newEmployee: IEmpDetails) => console.log(newEmployee)),
      catchError(this.handleError<IEmpDetails>('addEmployee'))
    );
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(employeeID: number): Observable<IEmpDetails> {
    const url = `${this.employeesUrl}/${employeeID}`;
    return this.http.delete<IEmpDetails>(url, this.httpOptions).pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<IEmpDetails>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
