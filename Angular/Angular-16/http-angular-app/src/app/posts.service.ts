import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, Subject, catchError, throwError, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostsService {

    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http.post<{ name: string }>('https://crudcrud.com/api/0f53e8c5d40a48719cf948b0095cd77a/posts',
            postData,
            {
                // observe: 'body'
                observe: 'response',
                // responseType: 'text' -> error as we defined it as a JS object 
            }
        ).subscribe(responseData => {
            console.log(responseData);
        },
            error => {
                this.error.next(error.message)
            }
        );
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty')
        searchParams = searchParams.append('custom', 'key')
        return this.http.get<{ [key: string]: Post }>(
            'https://crudcrud.com/api/0f53e8c5d40a48719cf948b0095cd77a/posts',
            {
                headers: new HttpHeaders({ 'Custom-Header': 'Helllo' }),
                // params: new HttpParams().set('print', 'pretty')
                params: searchParams
            }
        )
            .pipe(
                map(responseData => {
                    const postsArray = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key })
                        }
                    }
                    return postsArray;
                }),
                catchError(errorRes => {
                    // Send to analytics server
                    return throwError(errorRes);
                })
            );
    }

    deletePosts() {
        return this.http.delete('https://crudcrud.com/api/0f53e8c5d40a48719cf948b0095cd77a/posts',
            {
                observe: 'events',
                // responseType: 'json'
                responseType: 'text'
            }
        ).pipe(tap(event => {
            console.log(event)
            if (event.type === HttpEventType.Sent) {
                console.log();

            }
            if (event.type === HttpEventType.Response) {
                console.log(event.body);

            }
        }))
    }
}