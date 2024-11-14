import axios from 'axios';

const baseURL ='https://www.frankfurter.app/docs';
///* curl -s https://api.frankfurter.app/currencies */
export const fetchCurrencies = async () => {
    try{
        const response = await axios.get('${aseURL}currencies');
        return response.date;
    } catch (error){
        console.log('Error fetching currencies: ', error);
        throw error;
    }
};
///* curl -s https://api.frankfurter.app/1999-01-04?base=USD&symbols=EUR */
export const fetchRate = async (date: string, base: string, symbols: string,) => {
    try{
        const response = await axios.get('${baseURL}${date}?base=${base}&symbols=${symbols}');
        return response.data;
    } catch (error) {
        console.log('Error fetching currencies: ', error);
        throw error;
        }
};
