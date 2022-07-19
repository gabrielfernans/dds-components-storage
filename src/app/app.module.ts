import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// sandbox pages

// sandbox pages
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.page';
import { AccordionPageComponent } from './pages/accordion/accordion.page';
import { ActionMenuPageComponent } from './pages/actionmenu/actionmenu.page';
import { BadgePageComponent } from './pages/badge/badge.page';
import { BreadcrumbPageComponent } from './pages/breadcrumb/breadcrumb.page';
import { ButtonPageComponent } from './pages/button/button.page';
import { CheckPageComponent } from './pages/checkbox/check.page';
import { CheckboxPageComponent } from './pages/checkbox/checkbox.page';
import { DrawerPageComponent } from './pages/drawer/drawer.page';
import { FilterHorizontalPageComponent } from './pages/filter/horizontal.page';
import { FilterVerticalPageComponent } from './pages/filter/vertical.page';
import { FormPageComponent } from './pages/form/form.page';
import { LoadPageComponent } from './pages/load/load.page';
import { MessageBarPageComponent } from './pages/messagebar/messagebar.page';
import { ModalPageComponent } from './pages/modal/modal.page';
import { MoreLessPageComponent } from './pages/moreless/moreless.page';
import { PaginationPageComponent } from './pages/pagination/pagination.page';
import { PopoverPageComponent } from './pages/popover/popover.page';
import { ProgressPageComponent } from './pages/progress/progress.page';
import { SelectPageComponent } from './pages/select/select.page';
import { SidenavPageComponent } from './pages/sidenav/sidenav.page';
import { TabsPageComponent } from './pages/tabs/tabs.page';
import { TagPageComponent } from './pages/tag/tag.page';
import { TextAreaPageComponent } from './pages/textarea/textarea.page';
import { TextInputPageComponent } from './pages/textinput/textinput.page';
import { RadioPageComponent } from './pages/radio/radio.page';

// library components
import { AccordionModule } from './lib/accordion/accordion.module';
import { ActionMenuModule } from './lib/actionmenu/actionmenu.module';
import { BadgeComponent } from './lib/badge/badge.component';
import { BreadcrumbComponent } from './lib/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './lib/button/button.component';
import { CheckboxComponent } from './lib/checkbox/checkbox.component';
import { DatePickerComponent } from './lib/datepicker/datepicker.component';
import { DrawerComponent } from './lib/drawer/drawer.component';
import { DropdownComponent } from './lib/dropdown/dropdown.component';
import { FormComponent } from './lib/form/form.component';
import { HeaderComponent } from './lib/header/header.component';
import { LoadComponent } from './lib/load/load.component';
import { MessageBarComponent } from './lib/messagebar/messagebar.component';
import { ModalComponent } from './lib/modal/modal.component';
import { MoreLessComponent } from './lib/moreless/moreless.component';
import { PaginationComponent } from './lib/pagination/pagination.component';
import { PopoverComponent } from './lib/popover/popover.component';
import { ProgressComponent } from './lib/progress/progress.component';
import { RadioComponent } from './lib/radio/radio.component';
import { SelectComponent } from './lib/select/select.component';
import { SidenavModule } from './lib/sidenav/sidenav.module';
import { TableComponent } from './lib/table/table.component';
import { TabsModule } from './lib/tabs/tabs.module';
import { TagComponent } from './lib/tag/tag.component';
import { TextAreaComponent } from './lib/textarea/textarea.component';
import { TextInputComponent } from './lib/textinput/textinput.component';
import { TooltipComponent } from './lib/tooltip/tooltip.component';

// directives
import { IsSelectedDirective } from './lib/helpers/isselected.directive';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { NavComponent } from './core/layout/nav/nav.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './lib/card/card.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'accordion', component: AccordionPageComponent },
  { path: 'actionmenu', component: ActionMenuPageComponent },
  { path: 'badge', component: BadgePageComponent },
  { path: 'breadcrumb', component: BreadcrumbPageComponent },
  { path: 'button', component: ButtonPageComponent },
  { path: 'check', component: CheckPageComponent },
  { path: 'checkbox', component: CheckboxPageComponent },
  { path: 'drawer', component: DrawerPageComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'load', component: LoadPageComponent },
  { path: 'horizontal', component: FilterHorizontalPageComponent },
  { path: 'vertical', component: FilterVerticalPageComponent },
  { path: 'messagebar', component: MessageBarPageComponent },
  { path: 'modal', component: ModalPageComponent },
  { path: 'moreless', component: MoreLessPageComponent },
  { path: 'pagination', component: PaginationPageComponent },
  { path: 'popover', component: PopoverPageComponent },
  { path: 'progress', component: ProgressPageComponent },
  { path: 'radio', component: RadioPageComponent },
  { path: 'select', component: SelectPageComponent },
  { path: 'sidenav', component: SidenavPageComponent },
  { path: 'tabs', component: TabsPageComponent },
  { path: 'tag', component: TagPageComponent },
  { path: 'textarea', component: TextAreaPageComponent },
  { path: 'textinput', component: TextInputPageComponent },
  { path: 'search', component: SearchComponent },
];

const components = [
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CheckboxComponent,
  DatePickerComponent,
  DrawerComponent,
  DropdownComponent,
  FormComponent,
  HeaderComponent,
  LoadComponent,
  MessageBarComponent,
  ModalComponent,
  MoreLessComponent,
  PaginationComponent,
  PopoverComponent,
  ProgressComponent,
  RadioComponent,
  SelectComponent,
  TableComponent,
  TagComponent,
  TextAreaComponent,
  TextInputComponent,
  TooltipComponent,
];

const pages = [
  HomePageComponent,
  AccordionPageComponent,
  ActionMenuPageComponent,
  BadgePageComponent,
  BreadcrumbPageComponent,
  ButtonPageComponent,
  CheckPageComponent,
  CheckboxPageComponent,
  DrawerPageComponent,
  FilterHorizontalPageComponent,
  FilterVerticalPageComponent,
  FormPageComponent,
  LoadPageComponent,
  MessageBarPageComponent,
  ModalPageComponent,
  MoreLessPageComponent,
  PaginationPageComponent,
  PopoverPageComponent,
  ProgressPageComponent,
  RadioPageComponent,
  SelectPageComponent,
  SidenavPageComponent,
  TabsPageComponent,
  TagPageComponent,
  TextAreaPageComponent,
  TextInputPageComponent,
  SearchComponent,
];

const directives = [IsSelectedDirective];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pages,
    ...directives,
    MainLayoutComponent,
    NavComponent,
    SearchComponent,
    CardComponent,
  ],
  entryComponents: [...components],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AccordionModule,
    ActionMenuModule,
    SidenavModule,
    TabsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  ngOnInit() {
    console.clear();
  }
}
