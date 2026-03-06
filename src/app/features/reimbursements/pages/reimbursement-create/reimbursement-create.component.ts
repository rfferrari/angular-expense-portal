import { Component } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Reimbursement, ReimbursementsService } from '../../services/reimbursements.service';

@Component({
  selector: 'app-reimbursement-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatIconModule
  ],
  templateUrl: './reimbursement-create.component.html',
  styleUrl: './reimbursement-create.component.scss'
})
export class ReimbursementCreateComponent {
  form = this.fb.group({
    title: [null, [Validators.required]],
    amount: [null, [Validators.required, Validators.min(0)]],
    date: [new Date().toISOString().split('T')[0], [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private service: ReimbursementsService,
    private dialogRef: MatDialogRef<ReimbursementCreateComponent>,
  ) { }

  onSubmit() {
    if (this.form.valid) {
        const reimbursementData = {
          ...this.form.value,
          status: 'PENDING'
        } as Partial<Reimbursement>;
        this.service.create(reimbursementData).subscribe({
          next: (response) => {
            this.dialogRef.close();
          },
          error: (error) => {
            console.error('Error creating reimbursement:', error);
          }
        });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
