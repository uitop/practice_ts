import {News,NewsFeed} from '../types';

export default class Api {
    async request<AjaxRespones>(url:string):Promise<AjaxRespones> {
        const response =await fetch(url)
        return await response.json() as AjaxRespones;
    }
}
export class NewsFeedApi extends Api{
    async getData(url:string): Promise<NewsFeed[]>{
        console.log(url)
        return this.request<NewsFeed[]>(url);
    }
}
export class NewsDetailApi extends Api{
    async getData(url:string): Promise<News>{
        console.log(url)
        return this.request<News>(url);
    }
}