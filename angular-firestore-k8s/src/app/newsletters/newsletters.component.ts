import { Component, OnInit } from '@angular/core';
import { NewslettersService } from "./newsletters.service"

export class FilePath {
  path: string;
  name: string;
}

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss']
})
export class NewslettersComponent implements OnInit {

  selectedPath: boolean;
  paths: FilePath[] = [{ path: "", name: "" }];

  newest: FilePath = { path: "", name: "" };
  
  errorMessage: string;

  constructor(private newslettersService: NewslettersService) { }

  ngOnInit() {

    this.getNewsletterDirectories();

    this.newslettersService.getNewsletterDirectories()
      .subscribe(
        path => this.newestSearch(path),
        error => this.errorMessage = <any>error);

  }

  getNewsletterDirectories() {
    this.newslettersService.getNewsletterDirectories()
      .subscribe(
        path => this.paths = path,
        error => this.errorMessage = <any>error);
    this.selectedPath = false;
  }

  getNewsletters(path: FilePath) {
    this.newslettersService.getNewsletters(path.path)
      .subscribe(
        path => this.paths = path,
        error => this.errorMessage = <any>error);
    this.selectedPath = true;
  }

  getNewsletter(path: FilePath, id: string) {
    this.newslettersService.getNewsletter(path.path)
      .subscribe(data => this.downloadFile(data, id),
        error => this.errorMessage = <any>error);
    this.selectedPath = true;

  }

  downloadFile(data: Blob, id: string) {
    var blob = new Blob([data], { type: 'application/pdf' });
    var url = window.URL.createObjectURL(blob);

    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(blob, 'Newsletter.pdf');
    }

    else {
      window.open(url, "_blank");
    }
    this.selectedPath = true;
  }

  onSelect(path: FilePath): void {
    var trunPath = new FilePath();

    var firstLevel = path.path.indexOf('Newsletters\\') !== -1;

    if (firstLevel) {
      trunPath.path = path.path.split('\\').pop();
      this.getNewsletters(trunPath);
    }
    else {
      trunPath.path = path.path.replace('Newsletters/', '').replace('\\', '/');
      this.getNewsletter(trunPath, path.path);
    }
  }

  newestSearch(path: FilePath[]) {
    var trunPath = new FilePath();

    var newest = path.pop();
    trunPath.path = newest.path.split('\\').pop();
    debugger;
    this.newslettersService.getNewsletters(trunPath.path)
      .subscribe(
        path => this.newest = path.pop(),
        error => this.errorMessage = <any>error);
  }

}
