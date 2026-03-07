import { Component } from '@angular/core';
import { ReimbursementsService } from '../../services/reimbursements.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReimbursementCreateComponent } from '../reimbursement-create/reimbursement-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
export type StatusFilter = 'PENDING' | 'APPROVED' | 'REJECTED' | null;
@Component({
  selector: 'app-reimbursement-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    OverlayModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './reimbursement-list.component.html',
  styleUrl: './reimbursement-list.component.scss'
})
export class ReimbursementListComponent {
  displayedColumns: string[] = ['title', 'amount', 'date', 'status', 'actions'];
  private reimbursements$ = this.service.getAll();
  isOpen = false;
  isDropdownOpen = false;
  activeFilter: StatusFilter = null;

  constructor(
    private service: ReimbursementsService,
    private dialog: MatDialog
  ) { }

  get dataSource() {
    return this.reimbursements$;
  }

  create() {
    this.dialog.open(ReimbursementCreateComponent, {
      width: '400px',
      disableClose: true
     }
    )
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

  filterByStatus(value: any) {
    if (value === null) {
      this.reimbursements$ = this.service.getAll();
      return;
    }
    this.reimbursements$ = this.service.getAllByStatus(value);
  }

  getStatusClass(status: string): string {
    const baseClass = 'status-badge';
    const modifier = `--${status.toLowerCase()}`;
    return `${baseClass} ${modifier}`;
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
  
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  applyFilter(status: StatusFilter): void {
    this.activeFilter = status;
    this.filterByStatus(this.activeFilter);
    this.isDropdownOpen = false;
  }

  clearFilter(): void {
    this.applyFilter(null);
  }
}
