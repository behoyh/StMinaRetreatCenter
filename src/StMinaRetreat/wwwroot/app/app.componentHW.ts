import { Component, OnInit } from '@angular/core';
import { ProductService, IProduct } from './product.service';
import { ProductForm } from './productForm';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'myhw',
  template: `
      <div class='row'>
        <pform></pform>
      </div>
      <div class='row'>
       <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class='panel-heading'>Products List</div>
        <div class='panel-body'>
          <table class='table table-condensed'>
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
                <th></th>
            </thead>
             <tbody>
              <tr *ngFor="let person of persons"  >
                  <td> {{person.id}}  </td>
                  <td> <input type="text"  [(ngModel)]="person.name" name="pname" class="form-control" /> </td>
                  <td> <input type="text"  [(ngModel)]="person.description" name="pdescription"  class="form-control" /> </td>
                  <td> <input type="button" value="update" class="btn btn-default"  (click)="onUpdate(person)"/> <input type="button" value="remove" class="btn btn-danger"  (click)="onDelete(person.id)"/></td>
                </tr> 
            <tbody>
           </table>
           </div>
           </div>
        </div>
        `     
      })
export class HwComponent extends OnInit {
    subscription: Subscription;
    
     Refresh(){
         this._service.loadData().then(data => {
            this.persons = data;
        })
    }
    constructor(private _service: ProductService) {
        super();
          this.subscription = _service.RegenerateData$.subscribe(
          mission => {
              console.log("Good !! ", mission);
               this.Refresh();
           });
    }

    ngOnInit() {
        this.Refresh();
    }
    onUpdate(elem){
        console.log(elem); 
        this._service.Update(elem).then(data => {
         })
    }
    onDelete(elem : number){
        console.log("Delete Form ! ");
        console.log(elem); 
        this._service.Delete(elem).then(data => {
              this.Refresh();
        })
    }
    persons: IProduct[] = [];

     ngOnDestroy() {
    // prevent memory leak when component destroyed
       this.subscription.unsubscribe();
     }
}
