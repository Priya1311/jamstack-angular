import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {sampleData} from './home-data'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private API_KEY = "18eb5d874c0b496799cae7766c26266d";
  private API_ENDPOINT = `http://newsapi.org/v2/everything?q=tesla&from=2021-01-18&sortBy=publishedAt&apiKey=${this.API_KEY}`;
  data: Array<any> = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // NOTE: API is served on HTTP and netlify serves using Https so therefore using json file for now
    // this.httpClient.get(this.API_ENDPOINT).subscribe((data: any) =>{
    //   console.log(data['articles']);
    //   this.data = data['articles'];
    // });
    this.data = sampleData.articles
  }

}
