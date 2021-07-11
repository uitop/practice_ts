import View from "../core/view";
export interface NewsStore {
    currentPage:number;
    nextPage:number;
    prevPage:number,
    feedsLength:number,
    isMaximumPage:boolean;
    allFeeds:NewsFeed[];
    makeRead:number;
    setFeeds:NewsFeed[];
    // setFeeds:(feeds:NewsFeed[]) => void;
    getfeed:(position:number) => NewsFeed;
}
export interface News {
    readonly id:number;
    readonly title:string;
    readonly points:number;
    readonly user:string;
    readonly time_ago:string;
    readonly url:string;
    readonly content:string;
    readonly comments:NewsComment[];
}
export interface NewsFeed extends News{
    readonly comments_count: number;
    readonly domain:string;
    read?: boolean;
}

export interface NewsComment extends News{
    readonly level:number;
}
export interface RouteInfo{
    path: string;
    page:View;
    param?:RegExpMatchArray;
}