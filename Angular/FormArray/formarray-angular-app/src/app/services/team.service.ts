import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private API_URL = 'http://localhost:3000/teams';

  constructor(private http: HttpClient) { }

  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.API_URL, team);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.API_URL);
  }

  deleteTeam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
