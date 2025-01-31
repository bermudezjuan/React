// const getImagenPromesa = () => new Promise( resolve => resolve('https://sdadsfdfd.com'));

// getImagenPromesa().then( console.log );

const getImage = async () => {
    try {
        const apiKey = 'j4Hafx7tnJ423W71sbn5rNCCtWUvupqa';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    }
    catch(error){
        // manejo del error
        console.error(error);
    }    
}

getImage();