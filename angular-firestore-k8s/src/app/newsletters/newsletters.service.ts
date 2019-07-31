import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewslettersService {
  getNewsletter(path: string) : Observable<any> {
    throw new Error("Method not implemented.");
  }
  getNewsletters(path: string) :Observable<any>  {
    throw new Error("Method not implemented.");
  }
  getNewsletterDirectories():Observable<any>  {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
