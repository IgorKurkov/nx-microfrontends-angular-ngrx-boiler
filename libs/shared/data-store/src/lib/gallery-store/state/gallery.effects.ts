import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as GalleryActions from './gallery.actions';
import * as GalleryFeature from './gallery.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class GalleryEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GalleryActions.initGallery),
      switchMap(() => of(GalleryActions.loadGallerySuccess({ gallery: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(GalleryActions.loadGalleryFailure({ error }));
      })
    )
  );
}
