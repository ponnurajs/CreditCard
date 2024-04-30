import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddComponent } from '../add/add.component';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from '../view/view.component';
import { DeleteComponent } from '../delete/delete.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, SidemenuComponent, AddComponent, ViewComponent, DeleteComponent, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sideToggle:boolean = false;

  togglesidebar(){
    this.sideToggle = this.sideToggle? false : true;
  }
}
