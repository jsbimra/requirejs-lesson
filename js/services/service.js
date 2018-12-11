define(['jquery'], function($) {
    const service = {
        loadModule(loadData){
            console.log('log loadModule data ', loadData);
            const {fileName, localPathFLag} = loadData;

            console.log('log loadModule data ', fileName, localPathFLag);

            let fetchData = null;
            if(fileName && localPathFLag){
                const path = `templates/${fileName}.html`;
                fetchData =  fetch(path)
                    .then(resp => resp.text())
                    .then(data => data)
                    .catch(err => {
                        console.error('Hey got error from service catch', err);
                        return new Error(`<2>Page not found</h2>`);
                    });                
            } else {
                fetchData =  fetch(fileName)
                .then(resp => resp.text())
                .then(data => {
                    return $(data).find('#intro').html();
                })
                .catch(err => {
                    console.error('Hey got error from service catch', err);
                    return new Error(`<2>Page not found</h2>`);
                });
            }

            return fetchData;
        }
    };
    return service;
});