import { Component } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {MenuService} from "./menu.service";
import {Menu} from "./menu";
@Component({
   selector: 'my-app',
   templateUrl:'/app/app.component.html',
   styleUrls: ['app/app.component.css'] 
})
export class AppComponent {
   private myGridOptions: GridOptions = <GridOptions>{};

   constructor(private appService: MenuService){}

   ngOnInit() {
      let data = this.appService.getDate();
      this.myGridOptions.rowData = data;
      this.myGridOptions.columnDefs = this.createColumnDefs(data[0]);
   }

   private createColumnDefs(friends: Menu) {
      let keyNames = Object.keys(friends);
      let headers = [];
      keyNames.map(key => {
         headers.push({
            headerName: key.toUpperCase(),
            field: key,
            width: 100
         })
      });

      return headers;
   }
}

