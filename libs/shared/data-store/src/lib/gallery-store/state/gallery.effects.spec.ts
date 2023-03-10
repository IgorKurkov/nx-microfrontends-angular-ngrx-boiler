import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GalleryActions from './gallery.actions';
import { GalleryEffects } from './gallery.effects';

describe('GalleryEffects', () => {
  let actions: Observable<Action>;
  let effects: GalleryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GalleryEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GalleryEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GalleryActions.initGallery() });

      const expected = hot('-a-|', {
        a: GalleryActions.loadGallerySuccess({ gallery: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
