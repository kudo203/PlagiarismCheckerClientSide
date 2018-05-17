import {Component} from '@angular/core';
import {ResetHomeService} from '../reset-to-home.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private resetHomeService: ResetHomeService, private http: HttpClient) {
  }

  reset() {
    this.resetHomeService.resetToHome();
  }
}
