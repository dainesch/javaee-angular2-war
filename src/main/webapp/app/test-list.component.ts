import { Item } from './item';
import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'test-list',
    templateUrl: 'test-list.component.html',
    providers: [SampleService],
    styles: ['.error {color:red;}']
})
export class TestListComponent implements OnInit {

    errorMessage: string;
    items: Item[];

    constructor(private sampleService: SampleService) { }

    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.sampleService.getItems()
            .subscribe(
            items => this.items = items,
            error => this.errorMessage = <any>error);
    }
}