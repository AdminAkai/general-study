/**
 * Asynchronously loads the component for container
 */

import loadable from 'src/utils/loadable'

export default loadable(() => import('./Changelog'), {
  fallback: null,
})
