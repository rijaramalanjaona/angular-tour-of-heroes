import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mock/mock-heroes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return Observable.of(HEROES);
  }

}
