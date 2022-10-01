import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-author-information',
  templateUrl: './author-information.component.html',
  styleUrls: ['./author-information.component.css']
})
export class AuthorInformationComponent implements OnInit,AfterViewInit  {
  displayedColumns: string[] = ['title', 'PublishDate', 'imageUrl'];
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);

  @ViewChild(MatSort) sort: MatSort | any;
  
  valuesArr: any;
  desserts: any;
  sortedData: any;

  constructor(private httpservice : HttpService) {
   }

  ngOnInit(): void {
    this.getDataFromApi();
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getDataFromApi(){
    this.httpservice.getBooksData().subscribe((response : any) => {
      this.dataSource = (response['data']['books']);
      this.desserts = (response['data']['books']);
      this.sortedData = this.desserts.slice();
      this.valuesArr = (response['data']); 
    })
  }


  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
    } else {
      this.sortedData = data.sort((a : any, b : any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

}
