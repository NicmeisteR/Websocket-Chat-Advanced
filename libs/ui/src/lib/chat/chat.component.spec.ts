import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketChatComponent } from './chat.component';

describe('WebsocketChatComponent', () => {
  let component: WebsocketChatComponent;
  let fixture: ComponentFixture<WebsocketChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
