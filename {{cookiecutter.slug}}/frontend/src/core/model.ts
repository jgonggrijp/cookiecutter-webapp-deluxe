import { Model as BackboneModel } from 'backbone';
import { syncWithCSRF } from './csrf';

/**
 * This is the base model class that all models in the application
 * should derive from, either directly or indirectly. If you want to
 * apply a customization to all models in the application, do it here.
 */
export default class Model extends BackboneModel {}

Model.prototype.sync = syncWithCSRF;

// Example: suppose we want to type-check the attributes of every
// model. We could do something like the following.
//
// Note: we should NOT do this if we want to go real ReST!

// export default class TypedModel<Content extends {}> extends BackboneModel {
//     attributes: Content;
// }