export default async function getDogsData(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    
    if(!response.ok){
        throw new Error('Faied to fetch dog breeds')
    }
    const data = await response.json();
    return Object.keys(data.message);
  };