import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from "firebase/firestore"; 
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: Firestore) { }

  async readPictures(key: string)
  {
    const docRef = doc(this.db, "collage", key);
    return await getDoc(docRef);
  }
}
