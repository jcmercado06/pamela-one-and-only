import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BGreeting } from 'app/greetings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor(private http : HttpClient) { }
  
  getAnswers(): Observable<[]> {
    return this.http.get<[]>("https://sheet.best/api/sheets/20774206-bbe5-4b28-802e-43ca78efabf5")
  }
}
