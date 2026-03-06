import { Component } from '@angular/core';
import { ReimbursementsService } from '../../services/reimbursements.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReimbursementCreateComponent } from '../reimbursement-create/reimbursement-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-reimbursement-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
  ],
  templateUrl: './reimbursement-list.component.html',
  styleUrl: './reimbursement-list.component.scss'
})
export class ReimbursementListComponent {
  displayedColumns: string[] = ['title', 'amount', 'date', 'status', 'actions'];
  private reimbursements$ = this.service.getAll();

  constructor(
    private service: ReimbursementsService,
    private dialog: MatDialog
  ) { }

  get dataSource() {
    return this.reimbursements$;
  }

  create() {
    this.dialog.open(ReimbursementCreateComponent)
      .afterClosed()
      .subscribe(() => this.reimbursements$ = this.service.getAll());
  }

  approve(id: number) {
    this.service.updateStatus(id, 'APPROVED').subscribe(() => {
      this.reimbursements$ = this.service.getAll();
    });
  }

  reject(id: number) {
    this.service.updateStatus(id, 'REJECTED').subscribe(() => {
      this.reimbursements$ = this.service.getAll();
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'green';
      case 'REJECTED':
        return 'red';
      case 'PENDING':
        return 'orange';
      default:
        return 'black';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'Aprovado';
      case 'REJECTED':
        return 'Rejeitado';
      case 'PENDING':
        return 'Pendente';
      default:
        return status;
    }
  }
}
