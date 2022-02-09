import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc, setDoc } from "firebase/firestore"; 
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: Firestore) { }

  async readPictures()
  {
    let key = (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
    const docRef = doc(this.db, "collage", key);
    return await getDoc(docRef);
  }
}
