define(['service', 'welcome', 'sidebar', 'footer'], function (service, w, s, f) {

    console.log('load module js files under app', service, service.loadModule('home'));
    
    const header = $('#header');
    header.append(w);

    const sidebar = $('#sidebar');
    sidebar.append(s);

    const mainSection = $('#mainSection');
    const moduleDefualt = service.loadModule('home');
        moduleDefualt.then( (htmlres) => {
            mainSection.html(htmlres); 
        });

    sidebar.on('click', 'a', function(e) {
        let text = $.trim($(this).text().replace(' ', '-'));
        if(text !== '' ) {
            const currentModuleLoad = service.loadModule(text.toLowerCase())
            currentModuleLoad
                .then( htmlres => {
                    // console.log(htmlres);
                    mainSection.html(htmlres); 
                })
                .catch(err => {
                        console.error('Hey got error from app currentModule catch', err);
                    return new Error(`<2>Page not found</h2>`);
                });
                       
        }
    });
    const footer = $('#footer');
    footer.append(f);

});