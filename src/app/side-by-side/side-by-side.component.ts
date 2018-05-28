import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Match} from '../models/matches.model';
import {GetMatchService} from '../get-match.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.css']
})
export class SideBySideComponent implements OnInit {
  id: number;
  match: Match;
  constructor(private route: ActivatedRoute, private getMatchService: GetMatchService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.match = this.getMatchService.getMatches(this.id);
  }

}
