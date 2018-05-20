import {Component, OnInit} from '@angular/core';
import {ResetHomeService} from '../reset-to-home.service';
import {FileHandleService} from '../file-handle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allSelectedFiles1: String[];
  allSelectedFiles2: String[];
  constructor(private resetHomeService: ResetHomeService, private fileHandling: FileHandleService) {
   }
   ngOnInit() {
     this.resetHomeService.change.subscribe( () => {
       this.reset();
     });
     this.fileHandling.getAllProject1Files().subscribe((data: String[]) => {
       this.allSelectedFiles1 = data;
     });
     this.fileHandling.getAllProject2Files().subscribe((data: String[]) => {
       this.allSelectedFiles2 = data;
     });
   }
  reset() {
    this.resetHomeService.deleteAllFiles().subscribe(event => {});
    this.allSelectedFiles1 = [];
    this.allSelectedFiles2 = [];
  }

   onFileChange(event) {
    if (event.target.id === 'file1') {
      const tempArray = [];
      tempArray.push.apply(tempArray, event.target.files);
      for (const file of tempArray) {
        this.allSelectedFiles1.push(file.name);
        this.fileHandling.pushFileToProject1(file).subscribe(event => {
        });
      }
    } else if (event.target.id === 'file2') {
      const tempArray = [];
      tempArray.push.apply(tempArray, event.target.files);
      for (const file of tempArray) {
        this.allSelectedFiles2.push(file.name);
        this.fileHandling.pushFileToProject2(file).subscribe(event => {
        });
      }
    }
  }
}
