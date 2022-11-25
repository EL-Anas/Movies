import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  API_TOKEN :any= "d74e9d49f080c64456f37f788abce628";
  popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=' +this.API_TOKEN
  searchUrl='https://api.themoviedb.org/3/search/movie?api_key=' +this.API_TOKEN + '&query='


  getAllFilm(){
    return this.http.get(this.popularUrl).toPromise()
    .then((response:any)=>response)
    .catch((error)=>console.log(error))
  }
  getFilm(id:String){
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=' +this.API_TOKEN).toPromise()
    .then((response:any)=>response)
    .catch((error)=>console.log(error))
  }
  searchFilm(text:String){
    return this.http.get(this.searchUrl + text).toPromise()
    .then((response:any)=>response)
    .catch((error)=>console.log(error))
  }
  constructor(private http:HttpClient) { }
}
