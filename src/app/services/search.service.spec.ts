import { TestBed, inject } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JsonpModule } from '@angular/http';

import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService, MockBackend ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule, JsonpModule
      ],
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('getRecommendedItems should return a string',
  inject([SearchService , MockBackend], (searchService, mockBackend) => {

  const mockResponse = {
    data: 'test'
  };

  mockBackend.connections.subscribe((connection) => {
    connection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(mockResponse)
    })));
  });
  searchService.getRecommendedItems('12').subscribe((list) => {
    expect(list).toEqual('test');
  });
}));
it('getRecommendedItems should return an Observable',
inject([SearchService , MockBackend], (searchService, mockBackend) => {

const mockResponse = {
  data: [
    { id: 0, name: 'mock item 0' }
  ]
};

mockBackend.connections.subscribe((connection) => {
  connection.mockRespond(new Response(new ResponseOptions({
    body: JSON.stringify(mockResponse)
  })));
});
searchService.searchItems('chips').subscribe((list) => {
  expect(list.length).toBe(1);
  expect(list[0].name).toEqual('mock item 0');
});
}));

});

