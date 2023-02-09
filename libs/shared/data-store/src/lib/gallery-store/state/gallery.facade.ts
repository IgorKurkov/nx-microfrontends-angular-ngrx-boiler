import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as GalleryActions from './gallery.actions';
import * as GalleryFeature from './gallery.reducer';
import * as GallerySelectors from './gallery.selectors';

@Injectable()
export class GalleryFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GallerySelectors.selectGalleryLoaded));
  allGallery$ = this.store.pipe(select(GallerySelectors.selectAllGallery));
  selectedGallery$ = this.store.pipe(select(GallerySelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GalleryActions.initGallery());
  }
}
