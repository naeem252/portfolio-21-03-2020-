$(document).ready(function () {

    //my script

    // $("#resume").click(function (e) {
    //     e.preventDefault();
    //     $("link[href*='resume.css']").remove();
    // });







//    isotop

// init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
// filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };
// bind filter on select change
    $('.select-category').on( 'change', function() {
        // get filter value from option value
        var filterValue = this.value;
        // use filterFn if matches value
        // if(filterValue=="*"){
        //     changeFooterPosition();
        // }
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

    function changeFooterPosition(){
        $('footer').css('');
    }

});