import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team.model';
import { CommonModule } from '@angular/common';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-team-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.scss'
})
export class TeamFormComponent implements OnInit {

  teamForm!: FormGroup;
  submittedData: Team[] = [];

  constructor(private fb: FormBuilder, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      teamName: ['', Validators.required],
      members: this.fb.array([this.createMember()])
    });

    this.loadTeams();
  }

  get members(): FormArray {
    return this.teamForm.get('members') as FormArray;
  }

  createMember(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      skills: this.fb.array([new FormControl('', Validators.required)])
    })
  }

  getSkills(i: number): FormArray {
    return this.members.at(i).get('skills') as FormArray;
  }

  addMember() {
    this.members.push(this.createMember());
  }

  removeMember(index: number) {
    this.members.removeAt(index);
  }

  addSkill(memberIndex: number) {
    this.getSkills(memberIndex).push(new FormControl('', Validators.required));
  }

  removeSkill(memberIndex: number, skillIndex: number) {
    this.getSkills(memberIndex).removeAt(skillIndex);
  }

  deleteTeam(id: number) {
    if (confirm('Are you sure you want to delete this team?')) {
      this.teamService.deleteTeam(id).subscribe(() => {
        this.submittedData = this.submittedData.filter(team => team.id !== id);
      })
    }
  }

  onSubmit() {
    if (this.teamForm.valid) {
      this.teamService.createTeam(this.teamForm.value).subscribe(() => {
        alert('Team submitted!');
        this.teamForm.reset();
        this.members.clear();
        this.members.push(this.createMember());
        this.loadTeams();
      })
    }
  }

  loadTeams() {
    this.teamService.getTeams().subscribe(data => this.submittedData = data);
  }
}
