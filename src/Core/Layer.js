// ----------------------------------------------------------------------------
// File: Layer.js
//
// Copyright (c) 2013 VoodooJs Authors
// ----------------------------------------------------------------------------


/**
 * Enumeration for the different types of rendering passes called layers.
 *
 * @private
 * @enum {number}
 */
var LayerPass_ = {
  'Above': 0,
  'Below': 1,
  'BelowStencil': 2,
  'Seam': 3,
  'SeamStencil': 4
};



/**
 * A layer is essentially a render pass on a scene. Voodoo's engine
 * may create multiple layers, and each view is instantiated on
 * each layer when the model is created.
 *
 * @constructor
 * @private
 *
 * @param {LayerPass_} pass Type of graphics engine pass.
 * @param {Renderer} renderer The 3d graphics engine.
 * @param {Camera} camera This layer's virtual camera.
 * @param {SceneFactory_} sceneFactory Scene factory.
 * @param {TriggersFactory_} triggersFactory Triggers factory.
 * @param {CacheFactory_} cacheFactory Cache factory.
 */
function Layer_(pass, renderer, camera, sceneFactory, triggersFactory,
    cacheFactory) {
  log_.assert_(renderer == Renderer['ThreeJs'], 'Only ThreeJs is supported');

  this.pass_ = pass;
  this.renderer_ = renderer;
  this.camera_ = camera;
  this.sceneFactory_ = sceneFactory;
  this.triggersFactory_ = triggersFactory;
  this.cacheFactory_ = cacheFactory;
}


/**
 * The cache factory for this layer.
 *
 * @private
 * @type {CacheFactory_}
 */
Layer_.prototype.cacheFactory_ = null;


/**
 * The camera for this layer.
 *
 * @private
 * @type {Camera}
 */
Layer_.prototype.camera_ = null;


/**
 * The type of rendering pass.
 *
 * @private
 * @type {LayerPass_}
 */
Layer_.prototype.pass_ = null;


/**
 * The type of rendering engine.
 *
 * @private
 * @type {Renderer}
 */
Layer_.prototype.renderer_ = null;


/**
 * The scene factory for this layer.
 *
 * @private
 * @type {SceneFactory_}
 */
Layer_.prototype.sceneFactory_ = null;


/**
 * The triggers factory for this layer.
 *
 * @private
 * @type {TriggersFactory_}
 */
Layer_.prototype.triggersFactory_ = null;
