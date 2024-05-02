import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddComponent } from '../add/add.component';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from '../view/view.component';
import { DeleteComponent } from '../delete/delete.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import {MatCardModule} from '@angular/material/card';
import { Creditcard } from '../model/creditcard';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';

const TABLE_DATA : Creditcard[] = [
  {  id:1,
    name:"Bank of America",
    maxCredit:1000,
    interestRate: 2.3,
    active:true,
    recommendedScore: "700-900"
  },
  {  id:2,
    name:"Bank of America",
    maxCredit:1000,
    interestRate: 2.3,
    active:true,
    recommendedScore: "700-900"
  },
  {  id:3,
    name:"Bank of America",
    maxCredit:1000,
    interestRate: 2.3,
    active:true,
    recommendedScore: "700-900"
  }
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, 
    SidemenuComponent, AddComponent, ViewComponent, DeleteComponent, 
    RouterOutlet, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sideToggle:boolean = false;

  dispalyColumn = ['select', 'id', 'name', 'maxCredit', 'InterestRate', 'RecommededScore', 'Active'];

  dataSource = new MatTableDataSource(TABLE_DATA);

  togglesidebar(){
    this.sideToggle = this.sideToggle? false : true;
  }
}
