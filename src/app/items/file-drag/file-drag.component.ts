import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ImgToken } from 'src/app/interfaces/ImgToken';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-drag',
  templateUrl: './file-drag.component.html',
  styleUrls: ['./file-drag.component.scss']
})
export class FileDragComponent implements OnInit {

  public files: NgxFileDropEntry[] = [];
  private token: string;

  uploadedImg: string[] = new Array();
  uploadIsFinished : boolean = true;
  @Output()
  latestUploadedImg : EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient, private imgService: ImageService) { }

  ngOnInit(): void {
  }

  public async dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    await this.getToken();

     for(const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        this.uploadIsFinished = false;
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        
        fileEntry.file(async (file: File) => {

          // Here you can access the real file
          // console.log(droppedFile.relativePath, file);

          

          // console.log( "token is " +this.token)

          await this.imgService.uploadImg(file, this.token).then(img =>
             {
               this.uploadedImg.push(img);
               this.latestUploadedImg.emit(img);
               
           })
            .catch(err => console.log(err))
            .finally(()=> this.uploadIsFinished = true);
            
            
        });
        
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }


    }

    
  }
  
  uploadFiles(){

  } 
  

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  async getToken() {
    await this.http.get<ImgToken>(environment.BASE_URL + '/token')
      .toPromise().then(t => this.token = t.token).catch(err => console.log("error getting token"))
  }


 
}
