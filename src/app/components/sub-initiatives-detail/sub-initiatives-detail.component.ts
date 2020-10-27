import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { AvenuesState } from '../../../state/avenues.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-initiatives-detail',
  templateUrl: './sub-initiatives-detail.component.html',
  styleUrls: ['./sub-initiatives-detail.component.css'],
})
export class SubInitiativesDetailComponent implements OnInit {
  constructor() {}
  @Select(AvenuesState.selectedSubIniciatives)
  subIniciativesDetail$: Observable<any>;
  detail: any = {};
  stickyNav: string = 'stickyNav';

  ngOnInit(): void {
    this.subIniciativesDetail$.subscribe((res) => (this.detail = res));
  }
}
