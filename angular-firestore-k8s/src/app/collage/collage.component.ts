import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as heic2any from 'heic2any';
import { environment } from 'src/environments/environment';
import { FirebaseStorageService } from "../firebase-storage.service";
import { FirestoreService } from '../firestore.service';


@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {

  constructor(private drive:FirebaseStorageService, private firestore:FirestoreService, private http:HttpClient, private domSanitizer:DomSanitizer) { }
  ngOnInit(): void {
    this.list();
   }

  imglist = [];
  key = (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
  prod = environment.production

  async list() {
    if (!environment.production) {
      this.key = this.key + "-TST"
    }
    let items = await (await this.firestore.readPictures(this.key)).data();
    items.data.forEach((item)=>{
      this.drive.getDownload(item).then(async (blob) => {
        if(blob.type === 'image/heic')
        {
          blob = Object.assign(await heic2any.default({blob:blob, toType:"jpeg", quality:10000000000}));
        }
        this.imglist.push({ "filename": item, "data": URL.createObjectURL(blob) });
      })
      .catch((error) => {
        // Handle any errors
      });;
    });
    }

  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
