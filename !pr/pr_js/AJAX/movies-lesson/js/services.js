let url = 'https://raw.githubusercontent.com/RelHelen/cinema/main/film.JSON';
//http://www.omdbapi.com
export const getData=async(urlRes)=>{
   let urlReady = urlRes ? urlRes:url;
   try{
    const response = await fetch(urlReady);
    const data= await response.json();
   // console.log(data);
    return data;
   }catch(error){
      console.log("Ошибка: ",error);
   }
}
export default getData;