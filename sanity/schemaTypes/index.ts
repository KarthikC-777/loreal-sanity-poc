import { type SchemaTypeDefinition } from 'sanity'

import {loHomeBanners} from './loHomeBanners'
import {loArtistsFile} from './loArtistsFile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [loHomeBanners, loArtistsFile],
}
