import { BreadcrumbComponent } from './../../../lib/breadcrumb/breadcrumb.component';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild(`breadcrumb`) breadcrumb!: BreadcrumbComponent;
  @ViewChild(`sideNav`) sideNav!: ElementRef<HTMLElement>;
  public menuTags: Array<string> = [];
  public menuSorted: Array<any> = [];
  public menuItems: any = MENU_ITEMS;
  public bcData: any = [
    {
      name: 'home',
      link: '/',
    },
  ];
  public bcIcon: any = 'home';
  public currentRoute: any;
  public tags: any = {
    home: `home`,
    search: `search`,
  };
  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.bcData = [this.bcData[0]];
        this.currentRoute = event.url.replace('/', '');
        this.bcIcon = this.currentRoute === '' ? 'home' : this.currentRoute;
        this.bcData =
          this.currentRoute === ''
            ? [
                ...this.bcData,
                {
                  name: `Home page`,
                  link: `/`,
                },
              ]
            : [
                ...this.bcData,
                {
                  name: `${
                    this.currentRoute.charAt(0).toUpperCase() +
                    this.currentRoute.slice(1)
                  }`,
                  link: `/${this.currentRoute}`,
                },
              ];

        this.breadcrumb.data = this.bcData;
        console.log(this.currentRoute);
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

  isSelected(item: any): boolean {
    if (item.childs.length === 0) {
      return this.currentRoute === item.route.toLowerCase();
    } else {
      let flag = false;

      item.childs.forEach((child: any) => {
        if (this.currentRoute === child.route.toLowerCase()) {
          flag = true;
        }
      });
      return flag;
    }
  }
}

const MENU_ITEMS = [
  {
    icon: 'home',
    text: 'Home',
    route: '',
    hidden: false,
    childs: [],
  },
  {
    icon: 'search',
    text: 'Search',
    route: 'search',
    hidden: false,
    childs: [],
  },
  {
    icon: 'hand-touch',
    text: 'Button',
    childs: [
      {
        icon: 'hand-touch',
        text: 'Button',
        route: 'button',
        hidden: false,
        childs: [],
      },
    ],
  },
];
