//isotope filter
// $(document).ready(function() {
//     // init Isotope
//     let $grid = $('.gallery-items').isotope({
//         // options
//     });
//     // filter items on button click
//     $('.filter-button-group').on('click', 'button', function() {
//         let filterValue = $(this).attr('data-filter');
//         $grid.isotope({
//             filter: filterValue
//         });
//     });
//     //images loaded
//     $grid.imagesLoaded().progress(function() {
//         $grid.isotope('layout');
//     });
// });