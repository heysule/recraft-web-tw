import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  //TODO: Check on why mobile nav doesnt close when screenwidth changes
  //TODO: Finish on flyover menus
  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  showMobileMenu: boolean = false;
  selectedMobileMenuTab: string = 'tabs-1-tab-2';
  screenWidth?: number; // the viewport width

  setShowMobileMenu(state: boolean): void {
    this.showMobileMenu = state;
  }

  setSelectedMobileMenuTab(state: string) {
    this.selectedMobileMenuTab = state;
  }

  /**
   * Listens for the screen width of the viewport and then closes the mobile menu
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth > 399) {
      this.showMobileMenu = false;
    }
  }
}
