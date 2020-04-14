$(document).ready(function () {
    /**
     * Rendere funzionali i menu dropdown all’interno della navigazione principale
     */

    // References dropdown
    var dropDown = $('.top-bar-right .menu-inline-right li.w-dropdown');
    var dropDownMenus = dropDown.children('.dropdown-menu');

    // Dropdown menu interactivity
    dropDown.click(function() {
        var activeDropDownMenu = $(this).children('.dropdown-menu');
        dropDownMenus.not(activeDropDownMenu).hide();
        activeDropDownMenu.toggle();
    });

    // Close dropdown when click any other area of page
    dropDownMenus.click(function(event) {
        event.stopPropagation();
    });

    $('#app').click(function(e) {
        if(dropDown !== e.target && !dropDown.has(e.target).length) {
            dropDownMenus.hide();
        }
    });
}); // end ready method