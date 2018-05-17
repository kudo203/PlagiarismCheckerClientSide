import {Component, OnInit} from '@angular/core';
import {ResetHomeService} from '../reset-to-home.service';
import {UploadFileServiceService} from '../upload-file-service.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allSelectedFiles1 = [];
  allSelectedFiles2 = [];
  constructor(private resetHomeService: ResetHomeService, private uploadService: UploadFileServiceService) {
   }
   ngOnInit() {
     this.resetHomeService.change.subscribe( () => {
       this.reset();
     });
   }
  reset() {
    this.allSelectedFiles1 = [];
    this.allSelectedFiles2 = [];
    this.resetHomeService.deleteAllFiles().subscribe(event => {});
  }

   onFileChange(event) {
    if (event.target.id === 'file1') {
      const tempArray = [];
      tempArray.push.apply(tempArray, event.target.files);
      for (const file of tempArray) {
        this.allSelectedFiles1.push(file.name);
        this.uploadService.pushFileToProject1(file).subscribe(event => {
        });
      }
    } else if (event.target.id === 'file2') {
      const tempArray = [];
      tempArray.push.apply(tempArray, event.target.files);
      for (const file of tempArray) {
        this.allSelectedFiles2.push(file.name);
        this.uploadService.pushFileToProject2(file).subscribe(event => {
        });
      }
    }
  }
}
