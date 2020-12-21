import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
const query = gql`
      query user {
        users {
          name,
          gender,
          tags
        }
      }
    `;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  tables: any[];
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.apollo
      .watchQuery({
        query: query,
      })
      .valueChanges.subscribe((result:any)=>{
      console.log(result);
      this.tables = result.data.users;
    });
  }

}
