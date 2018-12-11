
define(['jquery'], function ($j) {
    // console.log(' load sidebar module ');

    const sidebarNav = ['Home', 'About Us', 'Contact Us', 'FAQ', 'Privacy Policy']
    const sidebarNavHTML = sidebarNav.map( text => `<li class="list-item"><a href="#">${text}</a></li>` ).join('');

    return `<ul class="nav-list">${sidebarNavHTML}</ul>`;
});