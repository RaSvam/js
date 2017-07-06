//all credit goes to http://citron.blueboard.cz/clanek/jednoduche-potvrzovani-akce-jquery-html5


$(document).ready( function() {


        $('a[data-confirm], button[data-confirm], input[data-confirm]').live('click', function (e) {
                 if (!confirm($(this).attr('data-confirm'))) {
                         e.preventDefault();
                         e.stopImmediatePropagation();
                         return false;
                 }
         });
});