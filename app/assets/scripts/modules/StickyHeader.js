// make header background darker on scroll
// highlight active header link on scroll

import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    // refresh waypoints measurements when any image is loaded in
    refreshWaypoints() {
        this.lazyImages.on('load', function() {
            // refresh all waypoints that exist in browser memory
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
      }
    

    createHeaderWaypoint() {
        let that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == 'down') {
                    that.siteHeader.addClass('site-header--dark');                    
                } else {
                    that.siteHeader.removeClass('site-header--dark');                    
                }
            }
        });
    }

    createPageSectionWaypoints() {
        const that = this;
        this.pageSections.each(function() {
          const currentPageSection = this;
          new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
              if (direction == "down") {
                const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                that.headerLinks.removeClass("is-current-link");
                $(matchingHeaderLink).addClass("is-current-link");
              }
            },
            offset: "18%"
          });
    
          new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
              if (direction == "up") {
                const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                that.headerLinks.removeClass("is-current-link");
                $(matchingHeaderLink).addClass("is-current-link");
              }
            },
            offset: "-40%"
          });
        });
    }
}

export default StickyHeader;
