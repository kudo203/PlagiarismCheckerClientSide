import {Component} from '@angular/core';
import {ResetHomeService} from '../reset-to-home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private resetHomeService: ResetHomeService, private router: Router) {
  }

  reset() {
    this.resetHomeService.resetToHome();
    this.resetHomeService.deleteAllFiles().subscribe(event => {
    });
    this.router.navigateByUrl('/home');
  }
}
