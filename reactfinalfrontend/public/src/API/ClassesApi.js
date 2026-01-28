import Next  from 'next';

const BASE_URL = 'https://cloud.mongodb.com/v2/6973b6c05e0ee70c3e7284c8#/overview';

export function GetClasses(){
    return axios.get('${BASE_URL}');
}

export function GetClassesById(id){
    return axios.get('${BASE_URL}${Id}');
}