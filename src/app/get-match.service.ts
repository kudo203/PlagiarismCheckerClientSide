import {Injectable} from '@angular/core';
import {Match} from './models/matches.model';

@Injectable()
export class GetMatchService {
  match: Match[];

  getMatches(index: number) {
    return this.match[index];
  }

  setMatches(data: Match[]) {
    this.match = data;
  }
}
