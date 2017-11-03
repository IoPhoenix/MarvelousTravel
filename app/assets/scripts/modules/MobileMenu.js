import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
        
    }

    toggleMenu() {
        // won't work, as this refers to menuIcon, not object itself
        // use bind to change that
       this.menuContent.toggleClass('site-header__menu-content--is-visible');
       this.siteHeader.toggleClass('site-header--is-expanded');
       this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}

export default MobileMenu;