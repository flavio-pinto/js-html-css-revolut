$(document).ready(function () {
    /**
     * Rendere funzionali i menu dropdown all’interno della navigazione principale
     */

    // References dropdown
    var dropDown = $('.top-bar-right .menu-inline-right li.w-dropdown');
    var dropDownButtons = dropDown.children('a');
    var dropDownMenus = dropDown.children('.dropdown-menu');

    // Dropdown menu interactivity
    dropDown.click(function() {
        var activeDropDownMenu = $(this).children('.dropdown-menu');
        dropDownMenus.not(activeDropDownMenu).hide();
        activeDropDownMenu.toggle();
    });
}); // end ready method