export const Api = "https://reqres.in/api/";
export const NewApi = "https://hotelbudget.us/api5.3.1/api/";
export const BASE_URL = 'http://staging.ancubate.com/hotel-budget-services-new/api/';

const accessToken ="enter yot token"

export const headers = {  
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export const headers1= {
    'Content-Type': 'application/json',
    'Accept' : 'application/json',
    'Authorization' : 'Bearer' + accessToken
}