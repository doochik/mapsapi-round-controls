(function (global){


var ym = {
	"project": {
		"preload": [
			"package.system"
		],
		"namespace": "ymaps",
		"jsonpPrefix": "",
		"loadLimit": 500
	},
	"ns": {},
	"env": {},
	"envCallbacks": []
};

ym.modules = global['ymaps'].modules;

ym.modules.define('maps-button-icon', ['system.provideCss'], function (provide, provideCss) {
provideCss(".ymaps_maps-button-icon{display:block;height:100%;background-position:50% 50%;background-repeat:no-repeat;transition:opacity .2s cubic-bezier(.455,.03,.515,.955)}.ymaps_maps-button-icon_geolocation{display:block;height:100%;background-position:50% 50%;background-repeat:no-repeat;transition:opacity .2s cubic-bezier(.455,.03,.515,.955);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuNTI4IDI1LjA3OGMtLjQ0IDEuMDEtLjk5My45NTYtMS4yMzctLjEybC0xLjYzMy03LjE4MmEuODcuODcgMCAwIDAtLjYwMi0uNjAybC03LjE5My0xLjYzYy0xLjA3Ny0uMjQ1LTEuMTItLjc3NC0uMDkyLTEuMTgzbDE2LjgwNS02LjdjMS4wMjYtLjQwOCAxLjUuMDggMS4wNjIgMS4wODdsLTcuMTEgMTYuMzN6IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjNEM0QzRDIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=\")}.ymaps_maps-button-icon_minus{display:block;height:100%;background-position:50% 50%;background-repeat:no-repeat;transition:opacity .2s cubic-bezier(.455,.03,.515,.955);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjxnIGZpbGw9IiM0RDRENEQiPjxwYXRoIGQ9Ik0yMyAxM2MwLS41NTItLjQ1NS0xLS45OTItMUgzLjk5MkMzLjQ0NCAxMiAzIDEyLjQ0NCAzIDEzYzAgLjU1Mi40NTUgMSAuOTkyIDFoMTguMDE2Yy41NDggMCAuOTkyLS40NDQuOTkyLTF6Ii8+PC9nPjwvZz48L2c+PC9zdmc+\")}.ymaps_maps-button-icon_plus{display:block;height:100%;background-position:50% 50%;background-repeat:no-repeat;transition:opacity .2s cubic-bezier(.455,.03,.515,.955);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjxnIGZpbGw9IiM0RDRENEQiPjxwYXRoIGQ9Ik0xMiAxMlYzLjk5NmMwLS41NDguNDQ4LS45OTYgMS0uOTk2LjU1NiAwIDEgLjQ0NCAxIC45OTJWMTJoOC4wMDhjLjUzNyAwIC45OTIuNDQ4Ljk5MiAxIDAgLjU1Ni0uNDQ0IDEtLjk5MiAxSDE0djguMDA4YzAgLjUzNy0uNDQ4Ljk5Mi0xIC45OTItLjU1NiAwLTEtLjQ0Ni0xLS45OTZWMTRIMy45OTJDMy40NTUgMTQgMyAxMy41NTIgMyAxM2MwLS41NTYuNDQ0LTEgLjk5Mi0xSDEyeiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==\")}", provide);
});
ym.modules.define('maps-button', ['system.provideCss'], function (provide, provideCss) {
provideCss(".ymaps_maps-button{display:inline-block;margin:0;padding:0;min-width:36px;height:36px;outline:0;border-width:0;border-radius:36px;background-color:#fff;box-shadow:0 2px 3px 1px rgba(0,0,0,.2);color:#333;vertical-align:middle;text-align:left;font-family:Arial,Helvetica,sans-serif;line-height:36px;cursor:pointer;transition:box-shadow .2s cubic-bezier(.455,.03,.515,.955),background-color .2s cubic-bezier(.455,.03,.515,.955),opacity .2s cubic-bezier(.455,.03,.515,.955);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;white-space:nowrap;font-size:15px}.ymaps_maps-button:hover{box-shadow:0 3px 4px 1px rgba(0,0,0,.3)}.ymaps_maps-button.ymaps__pressed{box-shadow:0 2px 3px 1px rgba(0,0,0,.12);opacity:.95}.ymaps_maps-button.ymaps__disabled{background-color:#ebebeb;box-shadow:none;cursor:default}.ymaps_maps-button__text,.ymaps_maps-button__icon{display:inline-block;vertical-align:top}.ymaps_maps-button__text{position:relative;display:block;overflow:hidden;margin:0;padding:0 20px 0 44px;border:none;background:0 0;color:#333;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;transition:color .2s cubic-bezier(.455,.03,.515,.955)}.ymaps_maps-button.ymaps__text_only .ymaps_maps-button__text{padding-left:20px}.ymaps_maps-button__icon{position:absolute;top:0;left:0;margin-left:6px;padding:5px;width:26px;height:26px;transition:opacity .2s cubic-bezier(.455,.03,.515,.955)}.ymaps_maps-button.ymaps__icon_only .ymaps_maps-button__icon{margin-left:0}.ymaps_maps-button.ymaps__checked{background-color:#ffeba0}.ymaps_maps-button.ymaps__checked .ymaps_maps-button__text{color:#746233}.ymaps_maps-button.ymaps__disabled .ymaps_maps-button__icon{opacity:.75}.ymaps_maps-button.ymaps__checked.ymaps__disabled{background:#fff8db}", provide);
});
ym.modules.define('maps-zoom', ['system.provideCss'], function (provide, provideCss) {
provideCss(".ymaps_maps-zoom{position:relative;display:block;padding:36px 0;width:36px;height:8px;line-height:0}.ymaps_maps-zoom__plus,.ymaps_maps-zoom__minus{display:inline-block;margin:0;padding:0;min-width:36px;height:36px;outline:0;border-width:0;border-radius:36px;background-color:#fff;box-shadow:0 2px 3px 1px rgba(0,0,0,.2);color:#333;vertical-align:middle;text-align:left;font-family:Arial,Helvetica,sans-serif;line-height:36px;cursor:pointer;transition:box-shadow .2s cubic-bezier(.455,.03,.515,.955),background-color .2s cubic-bezier(.455,.03,.515,.955),opacity .2s cubic-bezier(.455,.03,.515,.955);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;width:36px;height:36px;background-repeat:no-repeat;background-position:50% 50%;z-index:1}.ymaps_maps-zoom__plus:hover,.ymaps_maps-zoom__minus:hover{box-shadow:0 3px 4px 1px rgba(0,0,0,.3)}.ymaps_maps-zoom__plus.ymaps__pressed,.ymaps_maps-zoom__minus.ymaps__pressed{box-shadow:0 2px 3px 1px rgba(0,0,0,.12);opacity:.95}.ymaps_maps-zoom__plus.ymaps__disabled,.ymaps_maps-zoom__minus.ymaps__disabled{background-color:#ebebeb;box-shadow:none;cursor:default}.ymaps_maps-zoom__plus .ymaps_maps-button-icon_plus,.ymaps_maps-zoom__minus .ymaps_maps-button-icon_plus,.ymaps_maps-zoom__plus .ymaps_maps-button-icon_minus,.ymaps_maps-zoom__minus .ymaps_maps-button-icon_minus{transition:opacity .2s cubic-bezier(.455,.03,.515,.955)}.ymaps_maps-zoom__plus{top:0}.ymaps_maps-zoom__plus.ymaps__disabled .ymaps_maps-button-icon_plus{opacity:.75}.ymaps_maps-zoom__minus{bottom:0}.ymaps_maps-zoom__minus.ymaps__disabled .ymaps_maps-button-icon_minus{opacity:.75}", provide);
});
ym.modules.define('round.button.layout.html', ["maps-button","maps-button-icon"], function (provide) {
provide([0,"<ymaps class=\"ymaps_maps-button\" style=\"max-width: ",2001,["state.maxWidth",[["raw",null]]],0,"px\" title=\"",2001,["data.title",[["raw",null]]],0,"\"><ymaps class=\"ymaps_maps-button__icon\"><ymaps class=\"ymaps_maps-button-icon\"></ymaps></ymaps><ymaps class=\"ymaps_maps-button__text\">",2001,["data.content",[["default","\"\""],["raw",null]]],0,"</ymaps></ymaps>"]);
});
ym.modules.define('round.zoom.layout.html', ["maps-zoom","maps-button-icon"], function (provide) {
provide([0,"<ymaps class=\"ymaps_maps-zoom\"><ymaps class=\"ymaps_maps-zoom__plus\"><ymaps class=\"ymaps_maps-button-icon_plus\"></ymaps></ymaps><ymaps class=\"ymaps_maps-zoom__minus\"><ymaps class=\"ymaps_maps-button-icon_minus\"></ymaps></ymaps></ymaps>"]);
});
/**
 * @fileOverfiew Макет кнопки.
 */

ym.modules.define({
name: "theme.round.control.layout.Button",
key: 'round#buttonLayout',
storage: 'layout',
depends: [
    "round.button.layout.html",
    "Monitor",
    "templateLayoutFactory",

    "util.dom.reaction.hold",
    "util.dom.reaction.hover",
    "util.dom.element",
    "util.dom.className",
    "util.dom.style",
    "shape.Rectangle",
    "geometry.pixel.Rectangle",
    "layout.component.clientBounds",
    "util.css",
    "control.component.setupMarginManager",
    "util.pixelBounds",
    "system.browser"
],
    dynamicDepends: {
        contentLayout: function (data) {
            var key = data.options.get('contentLayout');
            return (typeof key == 'string') ? {
                key: key,
                storage: 'layout'
            } : key;
        }
    },

    declaration: function (provide, buttonLayoutHtml, Monitor, templateLayoutFactory,
                           domReactionHold, domReactionHover, domElement, domClassName, domStyle, ShapeRectangle,
                           PixelRectangleGeometry, clientBounds, utilCss, setupMarginManager, utilPixelBounds, browser) {

    var BUTTON_TYPE = {
        ICON_ONLY: 'iconOnly',
        CONTENT_ONLY: 'contentOnly',
        ICON_WITH_CONTENT: 'iconWithContent'
    };

    var ButtonLayout = templateLayoutFactory.createClass(buttonLayoutHtml, {
        _cssClassPrefix: 'ymaps_',

        build: function () {
            ButtonLayout.superclass.build.call(this);

            var parentElement = this.getParentElement(),
                layoutData = this.getData(),
                map = layoutData.control.getMap(),
                mapSize = map.container.getSize();

            this._buttonElement = domElement.findByClassName(parentElement, this._cssClassPrefix + 'maps-button');
            this._buttonTitleElement = domElement.findByClassName(parentElement, this._cssClassPrefix + 'maps-button__text');
            this._buttonIconContainerElement = domElement.findByClassName(parentElement, this._cssClassPrefix + 'maps-button__icon');
            this._buttonIconElement = domElement.findByClassName(parentElement, this._cssClassPrefix + 'maps-button-icon');

            this._buttonAppearance = null;
            this._iconType = null;
            this._checkButtonAppearance();

            this._applyEnabled();
            this._applySelected();

            this._stateMonitor = new Monitor(layoutData.state)
                .add('enabled', this._applyEnabled, this)
                .add('selected', this._applySelected, this)
                .add('size', this._checkButtonAppearance, this)
                .add('maxWidth', this._applyWidth, this);

            this._dataMonitor = new Monitor(layoutData.data)
                .add(['image', 'content', 'iconType'], this._checkButtonAppearance, this);

            if (mapSize[0] == 0 && mapSize[1] == 0) {
                map.events.once('sizechange', this._onMapSizeChange, this);
            } else {
                this._applyWidth();
            }

            setupMarginManager.add(this, function () {
                var shape = this.getShape(),
                    shapeSize = utilPixelBounds.getSize(shape.getBounds());
                return [shapeSize[0], 28];
            }, this);
        },

        getShape: function () {
            return this.getElement() ?
                new ShapeRectangle(new PixelRectangleGeometry(
                    clientBounds(this.getElement())
                )) :
                null;
        },

        clear: function () {
            if (this.getData().state.get('enabled')) {
                this._clearHoldReaction();
            }
            this._clearHoverReaction();

            this._stateMonitor.destroy();
            this._dataMonitor.destroy();

            setupMarginManager.remove(this);

            ButtonLayout.superclass.clear.call(this);
        },

        _applyEnabled: function () {
            if (this.getData().state.get('enabled')) {
                this._setupHoldReaction();
                domClassName.remove(this._buttonElement, this._cssClassPrefix + '_disabled');
            } else {
                this._clearHoldReaction();
                domClassName.add(this._buttonElement, this._cssClassPrefix + '_disabled');
            }
        },

        _applySelected: function (keys, values) {
            if (this.getData().state.get('selected')) {
                domClassName
                    .add(this._buttonElement, this._cssClassPrefix + '_pressed')
                    .add(this._buttonElement, this._cssClassPrefix + '_checked');
            } else {
                domClassName
                    .remove(this._buttonElement, this._cssClassPrefix + '_checked')
                    .remove(this._buttonElement, this._cssClassPrefix + '_pressed');
            }
        },

        _setupHoldReaction: function () {
            this._holdReaction = domReactionHold.reaction({
                element: this.getParentElement(),
                targetElement: this._buttonElement,
                toggleCssClass: this._cssClassPrefix + '_pressed'
            });
        },

        _clearHoldReaction: function () {
            if (this._holdReaction) {
                this._holdReaction.disable();
            }
        },

        _clearHoverReaction: function () {
            if (this._hoverReaction) {
                this._hoverReaction.disable();
            }
        },

        _checkButtonAppearance: function () {
            var newAppearance = this._resolveAppearance();
            if (newAppearance != this._buttonAppearance) {
                if (this._buttonAppearance) {
                    this._clearAppearance(this._buttonAppearance);
                }
                this._applyAppearance(newAppearance);
            } else if (newAppearance == 'iconOnly') {
                this._applyIcon();
            }
            this._buttonAppearance = newAppearance;
        },

        _applyAppearance: function (appearance) {
            switch (appearance) {

                case BUTTON_TYPE.ICON_ONLY:
                    domClassName.add(this._buttonElement, this._cssClassPrefix + '_icon_only');
                    domStyle.css(this._buttonTitleElement, {
                        display: 'none'
                    });
                    this._applyIcon();
                    break;

                case BUTTON_TYPE.CONTENT_ONLY:
                    domClassName.add(this._buttonElement, this._cssClassPrefix + '_text_only');
                    domStyle.css(this._buttonIconContainerElement, {
                        display: 'none'
                    });
                    break;

                case BUTTON_TYPE.ICON_WITH_CONTENT:
                    this._applyIcon();
                    break;
            }
        },

        _clearAppearance: function (appearance) {
            switch (appearance) {
                case BUTTON_TYPE.ICON_ONLY:
                    domClassName.remove(this._buttonElement, this._cssClassPrefix + '_icon_only');
                    domStyle.css(this._buttonTitleElement, {
                        display: 'block'
                    });
                    break;

                case BUTTON_TYPE.CONTENT_ONLY:
                    domClassName.remove(this._buttonElement, this._cssClassPrefix + '_text_only');
                    domStyle.css(this._buttonIconElement, {
                        display: 'block'
                    });
                    break;
            }
        },

        _resolveAppearance: function () {
            var state = this.getData().state,
                data = this.getData().data,
                hasImage = data.get('image') || data.get('iconType'),
                hasContent = data.get('content'),
                size = state.get('size');

            if (!hasImage && !hasContent) {
                return BUTTON_TYPE.CONTENT_ONLY;
            }
            if ((size == 'small' && hasImage) || (!hasContent)) {
                return BUTTON_TYPE.ICON_ONLY;
            }
            if ((size == 'medium' && hasContent) || (!hasImage)) {
                return BUTTON_TYPE.CONTENT_ONLY;
            }
            return BUTTON_TYPE.ICON_WITH_CONTENT;
        },

        _applyIcon: function () {
            var data = this.getData().data;
            if (data.get('image')) {
                if (this._iconType) {
                    domClassName.remove(this._buttonIconElement, this._cssClassPrefix + 'maps-button-icon_' + this._iconType);
                    this._iconType = null;
                }
                domStyle.css(this._buttonIconElement, {
                    'backgroundImage': 'url("' + data.get('image') + '")'
                });
            } else {
                var newIconType = data.get('iconType');
                if (this._iconType != newIconType) {
                    if (this._iconType) {
                        domClassName.remove(this._buttonIconElement, this._cssClassPrefix + 'maps-button-icon_' + this._iconType);
                    }
                    domClassName.add(this._buttonIconElement, this._cssClassPrefix + 'maps-button-icon_' + newIconType);
                    this._iconType = newIconType;
                }
            }
        },

        _applyWidth: function () {
            if (browser.oldIE) {
                var layoutData = this.getData(),
                    element = this._buttonElement,
                    currentWidth = domStyle.getSize(element, {
                            includePadding: true,
                            includeBorder: true
                        })[0] + 4,
                    stateWidth = layoutData.state.get('maxWidth');

                if (currentWidth < stateWidth) {
                    domStyle.css(element, {width: currentWidth});
                } else {
                    domStyle.css(element, {width: stateWidth});
                }
            }
        },

        _onMapSizeChange: function () {
            this._applyWidth();
        }
    });

    provide(ButtonLayout);
    }
});

/**
 * @fileOverfiew Макет зум-контрола.
 */

ym.modules.define({
    name: "theme.round.control.layout.Zoom",
    key: 'round#zoomLayout',
    storage: 'layout',
    depends: [
        "round.zoom.layout.html",
        "templateLayoutFactory",
        "Monitor",
        "domEvent.manager",
        "util.dom.reaction.hover",
        "util.dom.reaction.hold",
        "util.dom.className",
        "util.dom.element",
        "util.dom.style",
        "util.array",
        "shape.Rectangle",
        "geometry.pixel.Rectangle",
        "layout.component.clientBounds",
        "util.css",
        "control.component.setupMarginManager"
    ],
    dynamicDepends: {
        contentLayout: function (data) {
            var key = data.options.get('contentLayout');
            return (typeof key == 'string') ? {
                key: key,
                storage: 'layout'
            } : key;
        }
    },
    declaration: function (provide,
                           layoutHtml,
                           templateLayoutFactory,
                           Monitor,
                           domEventManager,
                           utilHover,
                           utilHold,
                           utilDomClassName,
                           utilDomElement,
                           utilDomStyle,
                           utilArray,
                           ShapeRectangle,
                           PixelRectangleGeometry,
                           clientBounds,
                           utilCss,
                           setupMarginManager) {
        var ZoomLayout = templateLayoutFactory.createClass(layoutHtml, {
            _cssClassPrefix: 'ymaps_',

            build: function () {
                var parentElement = this.getParentElement(),
                    position = this.getData().options.get('position');

                this._offset = position ?
                position.top || position.bottom || 0 :
                    utilDomStyle.getOffset(parentElement)[1];

                ZoomLayout.superclass.build.call(this);
                this._setupZoom();
                setupMarginManager.add(this, function () {
                    return [28, 61];
                }, this);
            },

            getShape: function () {
                var element = this.getElement();
                return element ?
                    new ShapeRectangle(
                        new PixelRectangleGeometry(
                            clientBounds(element)
                        )
                    ) :
                    null;
            },

            _setupZoom: function () {
                var parentElement = this.getParentElement();

                this._plusButton = utilDomElement.findByClassName(parentElement, this._cssClassPrefix + 'maps-zoom__plus');
                this._minusButton = utilDomElement.findByClassName(parentElement, this._cssClassPrefix + 'maps-zoom__minus');

                this._isPlusEnabled = true;
                this._isMinusEnabled = true;

                this._zoomReactions = null;

                this._setupZoomMonitors();
                this._setupZoomEvents();

                this._setupZoomReactions();
                this._applyView();
            },

            clear: function () {
                this._clearZoomMonitors();
                this._clearZoomEvents();
                this._clearZoomReactions();

                setupMarginManager.remove(this);
                ZoomLayout.superclass.clear.call(this);
            },

            _setupZoomMonitors: function () {
                this._stateMonitor = new Monitor(this.getData().state)
                    .add('zoom', this._applyView, this)
                    .add('zoomRange', this._applyView, this);
            },

            _clearZoomMonitors: function () {
                this._stateMonitor.removeAll();
            },

            _setupZoomEvents: function () {
                this._plusButtonListener = domEventManager.group(this._plusButton)
                    .add('click', this._onPlusButtonClick, this);

                this._minusButtonListener = domEventManager.group(this._minusButton)
                    .add('click', this._onMinusButtonClick, this);
            },

            _clearZoomEvents: function () {
                this._plusButtonListener.removeAll();
                this._minusButtonListener.removeAll();
            },

            _onPlusButtonClick: function () {
                if (this._isPlusEnabled) {
                    var zoomStep = this.getData().options.get('zoomStep');
                    this._changeZoom(zoomStep);
                }
            },

            _onMinusButtonClick: function () {
                if (this._isMinusEnabled) {
                    var zoomStep = this.getData().options.get('zoomStep');
                    this._changeZoom(-zoomStep);
                }
            },

            _setupZoomReactions: function () {
                var pressedCss = this._cssClassPrefix + '_pressed';

                this._zoomReactions = {
                    plus: [
                        utilHold.reaction({
                            element: this._plusButton,
                            toggleCssClass: pressedCss
                        })
                    ],
                    minus: [
                        utilHold.reaction({
                            element: this._minusButton,
                            toggleCssClass: pressedCss
                        })
                    ]
                };
            },

            _clearZoomReactions: function () {
                this._disableReactions('plus');
                this._disableReactions('minus');
            },

            /**
             * @ignore
             * Включает реакции на кнопке.
             * @param {String} button "plus" || "minus".
             */
            _enableReactions: function (button) {
                utilArray.each(this._zoomReactions[button], function (reaction) {
                    reaction.enable();
                });
            },

            /**
             * @ignore
             * Выключает реакции на кнопке.
             * @param {String} button "plus" || "minus".
             */
            _disableReactions: function (button) {
                utilArray.each(this._zoomReactions[button], function (reaction) {
                    reaction.disable();
                });
            },

            _getZoomRange: function () {
                return this.getData().state.get('zoomRange') || [0, 23];
            },

            _changeZoom: function (delta) {
                var state = this.getData().state,
                    oldZoom = state.get('zoom'),
                    newZoom = oldZoom + delta,
                    zoomRange = this._getZoomRange();

                newZoom = Math.max(zoomRange[0], Math.min(zoomRange[1], newZoom));

                if (Math.abs(newZoom - oldZoom) > 1e-2) {
                    this.events.fire('zoomchange', {
                        newZoom: newZoom
                    });
                }
            },

            /**
             * @ignore
             * «Выключает» кнопки на максимальном и минимальном зумах.
             */
            _applyView: function () {
                var state = this.getData().state,
                    zoomRange = state.get('zoomRange'),
                    zoom = state.get('zoom'),
                    disabledCss = this._cssClassPrefix + '_disabled';

                // Max zoom.
                this._isPlusEnabled = zoom < zoomRange[1];
                if (!this._isPlusEnabled) {
                    utilDomClassName.add(this._plusButton, disabledCss);
                    this._disableReactions('plus');
                } else {
                    utilDomClassName.remove(this._plusButton, disabledCss);
                    this._enableReactions('plus');
                }

                // Min zoom.
                this._isMinusEnabled = zoom > zoomRange[0];
                if (!this._isMinusEnabled) {
                    utilDomClassName.add(this._minusButton, disabledCss);
                    this._disableReactions('minus');
                } else {
                    utilDomClassName.remove(this._minusButton, disabledCss);
                    this._enableReactions('minus');
                }
            }
        });

        provide(ZoomLayout);
    }
});


})(this);