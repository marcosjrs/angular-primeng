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
      },
      {
        label: 'About',
        icon: 'pi pi-about',
      },
      {
        label: 'Projects',
        icon: 'pi pi-github',
      },
      {
        label: 'Skills',
        icon: 'pi pi-code',
      }
    ];
  }
}
