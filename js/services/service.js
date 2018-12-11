define(['jquery'], function($) {
    const service = {
        loadModule(name){
            console.log('log loadModule name ', name);
            if(name){
                const path = `templates/${name}.html`;
                const fetchData =  fetch(path)
                    .then(resp => resp.text())
                    .then(data => data)
                    .catch(err => {
                        console.error('Hey got error from service catch', err);
                        return new Error(`<2>Page not found</h2>`);
                    });
                
                return fetchData;

            }
        }
    };
    return service;
});