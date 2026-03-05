import { Component } from '@angular/core';
import { ReimbursementsService } from '../../services/reimbursements.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reimbursement-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './reimbursement-list.component.html',
  styleUrl: './reimbursement-list.component.scss'
})
export class ReimbursementListComponent {
  reimbursements$ = this.service.getAll();

  constructor(private service: ReimbursementsService) { }
}
