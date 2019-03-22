// ************************************ //
// ********** ACCORDION MENU ********** //
// ************************************ //
// VAR DECLARATIONS //
var about = document.getElementById('about-btn');
var roles = document.getElementById('roles-btn');
var media = document.getElementById('media-btn');
var reviews = document.getElementById('reviews-btn');
var studio = document.getElementById('studio-btn');

var aboutCollapse = document.getElementById('about-collapse');
var rolesCollapse = document.getElementById('roles-collapse');
var mediaCollapse = document.getElementById('media-collapse');
var reviewsCollapse = document.getElementById('reviews-collapse');
var studioCollapse = document.getElementById('studio-collapse');

// ABOUT //
about.addEventListener('click', function() {
  // active toggle
  about.classList.toggle('active');

  roles.classList.remove('active');
  rolesCollapse.classList.remove('show');
  media.classList.remove('active');
  mediaCollapse.classList.remove('show');
  reviews.classList.remove('active');
  reviewsCollapse.classList.remove('show');
  studio.classList.remove('active');
  studioCollapse.classList.remove('show');
});

// ROLES //
roles.addEventListener('click', function() {
  // active toggle
  roles.classList.toggle('active');

  about.classList.remove('active');
  aboutCollapse.classList.remove('show');
  media.classList.remove('active');
  mediaCollapse.classList.remove('show');
  reviews.classList.remove('active');
  reviewsCollapse.classList.remove('show');
  studio.classList.remove('active');
  studioCollapse.classList.remove('show');
});


// MEDIA //
media.addEventListener('click', function() {
  media.classList.toggle('active')

  about.classList.remove('active');
  aboutCollapse.classList.remove('show');
  roles.classList.remove('active');
  rolesCollapse.classList.remove('show');
  reviews.classList.remove('active');
  reviewsCollapse.classList.remove('show');
  studio.classList.remove('active');
  studioCollapse.classList.remove('show');
});

// REVIEWS //
reviews.addEventListener('click', function() {
  reviews.classList.toggle('active')

  about.classList.remove('active');
  aboutCollapse.classList.remove('show');
  roles.classList.remove('active');
  rolesCollapse.classList.remove('show');
  media.classList.remove('active');
  mediaCollapse.classList.remove('show');
  studio.classList.remove('active');
  studioCollapse.classList.remove('show');
});

// STUDIO //
studio.addEventListener('click', function() {
  studio.classList.toggle('active')

  about.classList.remove('active');
  aboutCollapse.classList.remove('show');
  roles.classList.remove('active');
  rolesCollapse.classList.remove('show');
  media.classList.remove('active');
  mediaCollapse.classList.remove('show');
  reviews.classList.remove('active');
  reviewsCollapse.classList.remove('show');
});



// ************************************ //
// ********** DESKTOP MENU ********** //
// ************************************ //
// VAR DELCARATIONS
var aboutContent = document.getElementById('about-content');
var rolesContent = document.getElementById('roles-content');
var mediaContent = document.getElementById('media-content');
var reviewsContent = document.getElementById('reviews-content');
var studioContent = document.getElementById('studio-content');

// SET DEFAULTS //
aboutContent.style.display = 'block';
rolesContent.style.display = 'none';
mediaContent.style.display = 'none';
reviewsContent.style.display = 'none';
studioContent.style.display = 'none';

// ABOUT //
var desktopAbout = document.getElementById('desktop-about');
desktopAbout.addEventListener('click', function() {
  // active toggle
  desktopRoles.classList.remove('active');
  desktopMedia.classList.remove('active');
  desktopReviews.classList.remove('active');
  desktopStudio.classList.remove('active');
  desktopAbout.classList.add('active');

  // content toggle
  aboutContent.style.display = 'block';
  rolesContent.style.display = 'none';
  mediaContent.style.display = 'none';
  reviewsContent.style.display = 'none';
  studioContent.style.display = 'none';


});

// ROLES //
var desktopRoles = document.getElementById('desktop-roles');
desktopRoles.addEventListener('click', function() {
  // active toggle
  desktopAbout.classList.remove('active');
  desktopMedia.classList.remove('active');
  desktopReviews.classList.remove('active');
  desktopStudio.classList.remove('active');
  desktopRoles.classList.add('active');

  // content toggle
  rolesContent.style.display = 'block';
  aboutContent.style.display = 'none';
  mediaContent.style.display = 'none';
  reviewsContent.style.display = 'none';
  studioContent.style.display = 'none';


});

// MEDIA //
var desktopMedia = document.getElementById('desktop-media');
desktopMedia.addEventListener('click', function() {
  // active toggle
  desktopRoles.classList.remove('active');
  desktopAbout.classList.remove('active');
  desktopReviews.classList.remove('active');
  desktopStudio.classList.remove('active');
  desktopMedia.classList.add('active');

  // content toggle
  aboutContent.style.display = 'none';
  rolesContent.style.display = 'none';
  mediaContent.style.display = 'block';
  reviewsContent.style.display = 'none';
  studioContent.style.display = 'none';


});

// REVIEWS //
var desktopReviews = document.getElementById('desktop-reviews');
desktopReviews.addEventListener('click', function() {
  // active toggle
  desktopRoles.classList.remove('active');
  desktopMedia.classList.remove('active');
  desktopAbout.classList.remove('active');
  desktopStudio.classList.remove('active');
  desktopReviews.classList.add('active');

  // content toggle
  aboutContent.style.display = 'none';
  rolesContent.style.display = 'none';
  mediaContent.style.display = 'none';
  reviewsContent.style.display = 'block';
  studioContent.style.display = 'none';


});


// STUDIO //
var desktopStudio = document.getElementById('desktop-studio');
desktopStudio.addEventListener('click', function() {
  // active toggle
  desktopRoles.classList.remove('active');
  desktopMedia.classList.remove('active');
  desktopReviews.classList.remove('active');
  desktopAbout.classList.remove('active');
  desktopStudio.classList.add('active');

  // content toggle
  aboutContent.style.display = 'none';
  rolesContent.style.display = 'none';
  mediaContent.style.display = 'none';
  reviewsContent.style.display = 'none';
  studioContent.style.display = 'block';


});
