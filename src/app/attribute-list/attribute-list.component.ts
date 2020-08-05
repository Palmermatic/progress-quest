import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';
import { Player } from '../player';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit {

  @Input() attributes: Attribute[];

  constructor() { }

  ngOnInit(): void {
  }
}
