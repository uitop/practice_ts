import { NewsFeed,NewsStore} from './types'

export default class Store implements NewsStore{
    private feeds:NewsFeed[];
    private _currentPage:number
    constructor (){
        this.feeds = [];
        this._currentPage = 1;
    }
    get currentPage(){
        return this._currentPage;
    }
    set currentPage(page:number){
        this._currentPage = page;
    }
    get nextPage():number {
        return this._currentPage +1;
    }
    get prevPage():number{
        return this._currentPage > 1? this._currentPage-1:1;
    }
    get feedsLength():number{
        return this.feeds.length;
    }
    get isMaximumPage():boolean{
        return this.feedsLength < this._currentPage *10;
    }
    get allFeeds():NewsFeed[]{
        return this.feeds
    }

    getfeed(position:number):NewsFeed{
        return this.feeds[position];
    }

    set setFeeds(feeds:NewsFeed[]){
        const newFeeds = feeds.map(feed =>({
            ...feed,read:false
        }));
        this.feeds =[...this.feeds,...newFeeds];
    }
    set makeRead(id:number){
        console.log(id);
        const feed = this.feeds.find((feed:NewsFeed) => feed.id === id);
        if(feed) feed.read = true;
    }
    
}