import { Injectable } from '@angular/core';
import { getStorage, ref, getBlob } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor() { }

  getFileRef(refer){
    const storage = getStorage();
    return ref(storage, refer);
  }

  getDownload(refer){
    return getBlob(this.getFileRef(refer));
  }
}
