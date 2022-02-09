import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL, getBlob } from "firebase/storage";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor() { }

  listFiles(){
    initializeApp(environment.firebase);
    const storage = getStorage();

    // Create a reference under which you want to list
    const listRef = ref(storage, '/');
    // Find all the prefixes and items.
    return listAll(listRef);
  }

  getFileRef(refer){
    const storage = getStorage();
    return ref(storage, refer);
  }

  getDownload(refer){
    return getBlob(this.getFileRef(refer));
  }
}
