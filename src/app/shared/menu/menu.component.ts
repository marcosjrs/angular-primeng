import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  ngOnInit() {
    this.setItems();
  }

  setItems(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-Home',
        routerLink: 'home'
      },
      {
        label: 'About',
        icon: 'pi pi-about',
        routerLink: 'about'
      },
      {
        label: 'Projects',
        icon: 'pi pi-github',
        routerLink: 'projects'
      },
      {
        label: 'Skills',
        icon: 'pi pi-code',
        routerLink: 'skills'
      }
    ];
  }
}
