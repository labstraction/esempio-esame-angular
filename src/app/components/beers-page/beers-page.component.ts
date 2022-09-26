import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-beers-page',
  templateUrl: './beers-page.component.html',
  styleUrls: ['./beers-page.component.scss']
})
export class BeersPageComponent implements OnInit {

  public beers: Beer[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBeers().subscribe({
      next: (beersData: Beer[]) => this.beers = beersData,
      error: (error: any) => console.error(error)
    })
  }

}
