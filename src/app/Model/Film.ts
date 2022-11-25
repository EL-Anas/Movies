export class Film{
    id:number;
    title:string;
    original_title:string;
    poster_path:string;
    overview:string;
    vote_average:string;
    release_date:string;
    original_language:string;
    popularity:string;
    vote_count:string;
    runtime:string;
    backdrop_path:string;

    constructor(id:number,titre:string,original_title:string,imageUrl:string,overview:string,vote_average:string,release_date:string,original_language:string,popularity:string,vote_count:string,runtime:string,backdrop_path:string){
        this.id=id;
        this.title=titre;
        this.original_title=original_title;
        this.poster_path=imageUrl;
        this.overview=overview;
        this.vote_average=vote_average;
        this.release_date=release_date;
        this.original_language=original_language;
        this.popularity=popularity;
        this.vote_count=vote_count;
        this.runtime=runtime;
        this.backdrop_path=backdrop_path

    }

}