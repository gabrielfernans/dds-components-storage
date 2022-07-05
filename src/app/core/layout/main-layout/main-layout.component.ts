import { Event, NavigationEnd, Router } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild(`sideNav`) sideNav!: ElementRef<HTMLElement>;
  public menuTags: Array<string> = [];
  public menuSorted: Array<any> = [];
  public menuItems: any = MENU_ITEMS;
  public currentRoute: any;
  public tags: any = {
    home: `home`,
    search: `search`,
  };
  constructor(private router: Router) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url.replace('/', '');
        // console.info(event);
      }
    });
  }

  ngOnInit(): void {
    this.sortMenu();
  }

  ngAfterViewInit(): void {
    if (this.sideNav) {
      // @ts-ignore
      this.sideNav.initializeNow();
    }
  }

  sortMenu() {
    if (!this.menuItems.sort) {
      const nonJsonMenu: any = [];
      Object.keys(this.menuItems).forEach((key) => {
        if (this.menuItems[key].icon) {
          nonJsonMenu.push({
            icon: this.menuItems[key].icon,
            text: this.menuItems[key].text,
            tags: this.menuItems[key].tags,
          });
        }
      });
      this.menuItems = nonJsonMenu;
    }
    // alpha-sort menuItems
    this.menuItems = [
      ...this.menuItems.sort((a: any, b: any) =>
        a.text > b.text ? 1 : b.text > a.text ? -1 : 0
      ),
    ];
    // sort tags into a unique array
    this.menuItems.forEach((mi: any) => {
      mi.tags.forEach((tag: any) => {
        if (!this.menuTags.includes(tag)) {
          this.menuTags.push(tag);
        }
      });
    });
    // alpha-sort tags
    // this.menuTags = [
    //   ...this.menuTags.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0)),
    // ];
  }

  menuToggle(e: any) {
    const clas = e.target.classList;
    const open = `dds__icon--close-x`;
    const clos = `dds__icon--menu-closed`;
    if (clas.contains(open)) {
      clas.add(clos);
      clas.remove(open);
    } else {
      clas.remove(clos);
      clas.add(open);
    }
    // @ts-ignore
    this.sideNav.ddsComponent.toggle();
  }
}

const MENU_ITEMS = [
  {
    icon: 'home',
    text: 'Home',
    route: '',
    tags: [],
    hidden: false,
  },
  {
    icon: 'search',
    text: 'Pesquisar',
    route: '/search',
    tags: [],
    hidden: false,
  },
];
