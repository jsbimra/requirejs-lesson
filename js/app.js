define(['service', 'welcome', 'sidebar', 'footer'], function (service, w, s, f) {

    console.log('load module js files under app', service, service.loadModule('home'));
    
    const header = $('#header');
    header.append(w);

    const sidebar = $('#sidebar');
    sidebar.append(s);

    const mainSection = $('#mainSection');
    const moduleDefualt = service.loadModule({fileName: 'home', localPathFLag: true});
        moduleDefualt.then( (htmlres) => {
            mainSection.html(htmlres); 
        });

    $('.nav-list li:first').addClass('active');

    sidebar.on('click', 'a', function(e) {
        const $this = $(this);
        $('.nav-list li').removeClass('active');
        $this.parent().addClass('active');
        let text = $.trim($this.text().replace(' ', '-')).toLowerCase();
        if(text !== '' ) {
            let paramData = text === 'about-us' ? {fileName: 'https://requirejs.org/index.html', localPathFLag: false} : {fileName: text, localPathFLag: true};
            const currentModuleLoad = service.loadModule(paramData);
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