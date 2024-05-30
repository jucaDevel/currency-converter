
const apiKey = 'd42b62f48cc345e7fdba814d';
const baseURL = 'https://v6.exchangerate-api.com/v6/';

export const getExchangeRate = async () =>{
    const supportedRates = await fetch(`${baseURL + apiKey}/codes`)
                                        .then( (resp) => resp.json() )
                                            .then( (data) => {                                            
                                                const dataCodes = transformArray(data.supported_codes)
                                                return dataCodes
                                            })
                                        .catch( (err) => console.warn(err) )
    
    return supportedRates
}

export const getResult = async ({origin, target, amount}) =>{
    const conversionResult = await fetch(`${baseURL + apiKey}/pair/${origin}/${target}/${amount}`)
                                        .then( (resp) => resp.json() )
                                            .then( (data) => data.conversion_result)
                                        .catch( (err) => console.warn(err) )
    
    return conversionResult
}

const transformArray = (arrayTransform) => {
    const objectTransform = arrayTransform.reduce(( obj, item) => {
        obj.push({
            code: item[0],
            name: item[1]
        })
        return obj
    },[]);
    objectTransform.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })) //Ordena alfabeticamente y sin ser case sensitive
    return objectTransform
}

