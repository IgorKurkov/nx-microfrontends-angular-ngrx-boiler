import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GALLERY_FEATURE_KEY,
  GalleryState,
  galleryAdapter,
} from './gallery.reducer';

// Lookup the 'Gallery' feature state managed by NgRx
export const selectGalleryState =
  createFeatureSelector<GalleryState>(GALLERY_FEATURE_KEY);

const { selectAll, selectEntities } = galleryAdapter.getSelectors();

export const selectGalleryLoaded = createSelector(
  selectGalleryState,
  (state: GalleryState) => state.loaded
);

export const selectGalleryError = createSelector(
  selectGalleryState,
  (state: GalleryState) => state.error
);

export const selectAllGallery = createSelector(
  selectGalleryState,
  (state: GalleryState) => selectAll(state)
);

export const selectGalleryEntities = createSelector(
  selectGalleryState,
  (state: GalleryState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectGalleryState,
  (state: GalleryState) => state.selectedId
);

export const selectEntity = createSelector(
  selectGalleryEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
