const promesa = new Promise((resolve, reject) => {

    resolve();

    reject();

    setTimeout(() => {

        const exito = true;

        if(exito){
            resolve();
        }else{
            reject();
        }

    }, 5000);

})

promesa.then(() => {
    console.log('Exito de verdad');
});

promesa.catch(() => {
    console.log('No funciono');
});
