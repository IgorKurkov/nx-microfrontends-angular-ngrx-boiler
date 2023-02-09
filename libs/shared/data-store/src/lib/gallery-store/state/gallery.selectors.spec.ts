import { GalleryEntity } from './gallery.models';
import {
  galleryAdapter,
  GalleryPartialState,
  initialGalleryState,
} from './gallery.reducer';
import * as GallerySelectors from './gallery.selectors';

describe('Gallery Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGalleryId = (it: GalleryEntity) => it.id;
  const createGalleryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GalleryEntity);

  let state: GalleryPartialState;

  beforeEach(() => {
    state = {
      gallery: galleryAdapter.setAll(
        [
          createGalleryEntity('PRODUCT-AAA'),
          createGalleryEntity('PRODUCT-BBB'),
          createGalleryEntity('PRODUCT-CCC'),
        ],
        {
          ...initialGalleryState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Gallery Selectors', () => {
    it('selectAllGallery() should return the list of Gallery', () => {
      const results = GallerySelectors.selectAllGallery(state);
      const selId = getGalleryId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = GallerySelectors.selectEntity(state) as GalleryEntity;
      const selId = getGalleryId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectGalleryLoaded() should return the current "loaded" status', () => {
      const result = GallerySelectors.selectGalleryLoaded(state);

      expect(result).toBe(true);
    });

    it('selectGalleryError() should return the current "error" state', () => {
      const result = GallerySelectors.selectGalleryError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
