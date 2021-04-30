import { Component, ContentChild,OnInit, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  @Input() props: {
    head: string[],
    body: any[]
  };

  @ContentChild(TemplateRef, {static: false}) tableRow: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
