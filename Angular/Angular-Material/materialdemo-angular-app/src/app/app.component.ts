import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'materialdemo-angular-app';
  notificaions = 2;

  opened = false;

  selectedValue: string = '';

  options: string[] = ['Angular', 'React', 'Vue'];

  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' }
  ]

  displayFn(subject: { name: any; }) {
    return subject ? subject.name : undefined;
  }

  minDate = new Date();
  maxDate = new Date(2025, 5, 29);

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor(private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private fb: FormBuilder

  ) {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }

    this.profileForm = this.fb.group({
      dob: [null, Validators.required]
    });
  }

  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    })

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    })
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 });
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent, { width: '200px', height: '100px' });
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  numbers = [];

  // Problem with Datepicker solution
  profileForm: FormGroup;
  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData(): void {
    const userResponse = {
      name: 'John Doe',
      dob: '2025-06-05'//string from backend
    }

    // Convert string to Date object before patching
    const parsedDate = new Date(userResponse.dob);
    this.profileForm.patchValue({ dob: parsedDate });
  }

  onSubmit(): void {
    const selectedDate: Date = this.profileForm.value.dob;
    const formattedDate = selectedDate.toISOString().slice(0, 10); // YYYY-MM-DD
    alert('Submitted Date: ' + this.profileForm.value.dob)
    alert('Submitted Date: ' + formattedDate);
  }

  newDate: string = '';
}

@Component({
  selector: 'custom-snackbar',
  standalone: true,
  template: `<span style='color: orange'>Custom Snackbar</span>`
})
export class CustomSnackBarComponent { }