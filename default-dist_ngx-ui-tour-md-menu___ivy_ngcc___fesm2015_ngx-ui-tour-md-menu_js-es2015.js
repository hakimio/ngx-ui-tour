(self["webpackChunkngx_ui_tour"] = self["webpackChunkngx_ui_tour"] || []).push([["default-dist_ngx-ui-tour-md-menu___ivy_ngcc___fesm2015_ngx-ui-tour-md-menu_js"],{

/***/ 9238:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A11yModule": function() { return /* binding */ A11yModule; },
/* harmony export */   "ActiveDescendantKeyManager": function() { return /* binding */ ActiveDescendantKeyManager; },
/* harmony export */   "AriaDescriber": function() { return /* binding */ AriaDescriber; },
/* harmony export */   "CDK_DESCRIBEDBY_HOST_ATTRIBUTE": function() { return /* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE; },
/* harmony export */   "CDK_DESCRIBEDBY_ID_PREFIX": function() { return /* binding */ CDK_DESCRIBEDBY_ID_PREFIX; },
/* harmony export */   "CdkAriaLive": function() { return /* binding */ CdkAriaLive; },
/* harmony export */   "CdkMonitorFocus": function() { return /* binding */ CdkMonitorFocus; },
/* harmony export */   "CdkTrapFocus": function() { return /* binding */ CdkTrapFocus; },
/* harmony export */   "ConfigurableFocusTrap": function() { return /* binding */ ConfigurableFocusTrap; },
/* harmony export */   "ConfigurableFocusTrapFactory": function() { return /* binding */ ConfigurableFocusTrapFactory; },
/* harmony export */   "EventListenerFocusTrapInertStrategy": function() { return /* binding */ EventListenerFocusTrapInertStrategy; },
/* harmony export */   "FOCUS_MONITOR_DEFAULT_OPTIONS": function() { return /* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS; },
/* harmony export */   "FOCUS_TRAP_INERT_STRATEGY": function() { return /* binding */ FOCUS_TRAP_INERT_STRATEGY; },
/* harmony export */   "FocusKeyManager": function() { return /* binding */ FocusKeyManager; },
/* harmony export */   "FocusMonitor": function() { return /* binding */ FocusMonitor; },
/* harmony export */   "FocusTrap": function() { return /* binding */ FocusTrap; },
/* harmony export */   "FocusTrapFactory": function() { return /* binding */ FocusTrapFactory; },
/* harmony export */   "HighContrastModeDetector": function() { return /* binding */ HighContrastModeDetector; },
/* harmony export */   "InteractivityChecker": function() { return /* binding */ InteractivityChecker; },
/* harmony export */   "IsFocusableConfig": function() { return /* binding */ IsFocusableConfig; },
/* harmony export */   "LIVE_ANNOUNCER_DEFAULT_OPTIONS": function() { return /* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS; },
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN": function() { return /* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN; },
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY": function() { return /* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; },
/* harmony export */   "ListKeyManager": function() { return /* binding */ ListKeyManager; },
/* harmony export */   "LiveAnnouncer": function() { return /* binding */ LiveAnnouncer; },
/* harmony export */   "MESSAGES_CONTAINER_ID": function() { return /* binding */ MESSAGES_CONTAINER_ID; },
/* harmony export */   "TOUCH_BUFFER_MS": function() { return /* binding */ TOUCH_BUFFER_MS; },
/* harmony export */   "isFakeMousedownFromScreenReader": function() { return /* binding */ isFakeMousedownFromScreenReader; },
/* harmony export */   "isFakeTouchstartFromScreenReader": function() { return /* binding */ isFakeTouchstartFromScreenReader; },
/* harmony export */   "ɵangular_material_src_cdk_a11y_a11y_a": function() { return /* binding */ FocusTrapManager; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/observers */ 8553);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** IDs are delimited by an empty space, as per the spec. */



const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function addAriaReferencedId(el, attr, id) {
    const ids = getAriaReferenceIds(el, attr);
    if (ids.some(existingId => existingId.trim() == id.trim())) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function removeAriaReferencedId(el, attr, id) {
    const ids = getAriaReferenceIds(el, attr);
    const filteredIds = ids.filter(val => val != id.trim());
    if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
    }
    else {
        el.removeAttribute(attr);
    }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace delimited) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** ID used for the body container where all messages are appended. */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/** ID prefix used for each created message element. */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/** Attribute given to each host element that is described by a message element. */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */
let nextId = 0;
/** Global map of all registered message elements that have been placed into the document. */
const messageRegistry = new Map();
/** Container for all registered messages. */
let messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
class AriaDescriber {
    constructor(_document) {
        this._document = _document;
    }
    describe(hostElement, message, role) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        const key = getKey(message, role);
        if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            setMessageId(message);
            messageRegistry.set(key, { messageElement: message, referenceCount: 0 });
        }
        else if (!messageRegistry.has(key)) {
            this._createMessageElement(message, role);
        }
        if (!this._isElementDescribedByMessage(hostElement, key)) {
            this._addMessageReference(hostElement, key);
        }
    }
    removeDescription(hostElement, message, role) {
        if (!message || !this._isElementNode(hostElement)) {
            return;
        }
        const key = getKey(message, role);
        if (this._isElementDescribedByMessage(hostElement, key)) {
            this._removeMessageReference(hostElement, key);
        }
        // If the message is a string, it means that it's one that we created for the
        // consumer so we can remove it safely, otherwise we should leave it in place.
        if (typeof message === 'string') {
            const registeredMessage = messageRegistry.get(key);
            if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(key);
            }
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    }
    /** Unregisters all created message elements and removes the message container. */
    ngOnDestroy() {
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}]`);
        for (let i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    _createMessageElement(message, role) {
        const messageElement = this._document.createElement('div');
        setMessageId(messageElement);
        messageElement.textContent = message;
        if (role) {
            messageElement.setAttribute('role', role);
        }
        this._createMessagesContainer();
        messagesContainer.appendChild(messageElement);
        messageRegistry.set(getKey(message, role), { messageElement, referenceCount: 0 });
    }
    /** Deletes the message element from the global messages container. */
    _deleteMessageElement(key) {
        const registeredMessage = messageRegistry.get(key);
        const messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */
    _createMessagesContainer() {
        if (!messagesContainer) {
            const preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
            // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.
            if (preExistingContainer && preExistingContainer.parentNode) {
                preExistingContainer.parentNode.removeChild(preExistingContainer);
            }
            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            // We add `visibility: hidden` in order to prevent text in this container from
            // being searchable by the browser's Ctrl + F functionality.
            // Screen-readers will still read the description for elements with aria-describedby even
            // when the description element is not visible.
            messagesContainer.style.visibility = 'hidden';
            // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
            // the description element doesn't impact page layout.
            messagesContainer.classList.add('cdk-visually-hidden');
            this._document.body.appendChild(messagesContainer);
        }
    }
    /** Deletes the global messages container. */
    _deleteMessagesContainer() {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */
    _removeCdkDescribedByReferenceIds(element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    _addMessageReference(element, key) {
        const registeredMessage = messageRegistry.get(key);
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    _removeMessageReference(element, key) {
        const registeredMessage = messageRegistry.get(key);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */
    _isElementDescribedByMessage(element, key) {
        const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        const registeredMessage = messageRegistry.get(key);
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */
    _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
            return false;
        }
        if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
        }
        const trimmedMessage = message == null ? '' : `${message}`.trim();
        const ariaLabel = element.getAttribute('aria-label');
        // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
        // element, because screen readers will end up reading out the same text twice in a row.
        return trimmedMessage ? (!ariaLabel || ariaLabel.trim() !== trimmedMessage) : false;
    }
    /** Checks whether a node is an Element node. */
    _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
    }
}
AriaDescriber.ɵfac = function AriaDescriber_Factory(t) { return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
AriaDescriber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AriaDescriber_Factory() { return new AriaDescriber(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); }, token: AriaDescriber, providedIn: "root" });
AriaDescriber.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaDescriber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, null); })();
/** Gets a key that can be used to look messages up in the registry. */
function getKey(message, role) {
    return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */
function setMessageId(element) {
    if (!element.id) {
        element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
    constructor(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        this._homeAndEnd = false;
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = (item) => item.disabled;
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Stream that emits whenever the active item of the list manager changes. */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
            _items.changes.subscribe((newItems) => {
                if (this._activeItem) {
                    const itemArray = newItems.toArray();
                    const newIndex = itemArray.indexOf(this._activeItem);
                    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                        this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    skipPredicate(predicate) {
        this._skipPredicateFn = predicate;
        return this;
    }
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */
    withWrap(shouldWrap = true) {
        this._wrap = shouldWrap;
        return this;
    }
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    withVerticalOrientation(enabled = true) {
        this._vertical = enabled;
        return this;
    }
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    withHorizontalOrientation(direction) {
        this._horizontal = direction;
        return this;
    }
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     */
    withAllowedModifierKeys(keys) {
        this._allowedModifierKeys = keys;
        return this;
    }
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    withTypeAhead(debounceInterval = 200) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && (this._items.length &&
            this._items.some(item => typeof item.getLabel !== 'function'))) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        this._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        this._typeaheadSubscription = this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(debounceInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => this._pressedLetters.join(''))).subscribe(inputString => {
            const items = this._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (let i = 1; i < items.length + 1; i++) {
                const index = (this._activeItemIndex + i) % items.length;
                const item = items[index];
                if (!this._skipPredicateFn(item) &&
                    item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                    this.setActiveItem(index);
                    break;
                }
            }
            this._pressedLetters = [];
        });
        return this;
    }
    /**
     * Configures the key manager to activate the first and last items
     * respectively when the Home or End key is pressed.
     * @param enabled Whether pressing the Home or End key activates the first/last item.
     */
    withHomeAndEnd(enabled = true) {
        this._homeAndEnd = enabled;
        return this;
    }
    setActiveItem(item) {
        const previousActiveItem = this._activeItem;
        this.updateActiveItem(item);
        if (this._activeItem !== previousActiveItem) {
            this.change.next(this._activeItemIndex);
        }
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    onKeydown(event) {
        const keyCode = event.keyCode;
        const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        const isModifierAllowed = modifiers.every(modifier => {
            return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        });
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.TAB:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
                if (this._vertical && isModifierAllowed) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
                if (this._vertical && isModifierAllowed) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
                if (this._homeAndEnd && isModifierAllowed) {
                    this.setFirstItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
                if (this._homeAndEnd && isModifierAllowed) {
                    this.setLastItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                if (isModifierAllowed || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, 'shiftKey')) {
                    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                    // otherwise fall back to resolving alphanumeric characters via the keyCode.
                    if (event.key && event.key.length === 1) {
                        this._letterKeyStream.next(event.key.toLocaleUpperCase());
                    }
                    else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.Z) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.NINE)) {
                        this._letterKeyStream.next(String.fromCharCode(keyCode));
                    }
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    }
    /** Index of the currently active item. */
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    /** The active item. */
    get activeItem() {
        return this._activeItem;
    }
    /** Gets whether the user is currently typing into the manager using the typeahead feature. */
    isTyping() {
        return this._pressedLetters.length > 0;
    }
    /** Sets the active item to the first enabled item in the list. */
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
    }
    /** Sets the active item to the last enabled item in the list. */
    setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    /** Sets the active item to the next enabled item in the list. */
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    /** Sets the active item to a previous enabled item in the list. */
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(item) {
        const itemArray = this._getItemsArray();
        const index = typeof item === 'number' ? item : itemArray.indexOf(item);
        const activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    _setActiveInWrapMode(delta) {
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
            const index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            const item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    _setActiveItemByIndex(index, fallbackDelta) {
        const items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    }
    /** Returns the items as an array. */
    _getItemsArray() {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ActiveDescendantKeyManager extends ListKeyManager {
    setActiveItem(index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class FocusKeyManager extends ListKeyManager {
    constructor() {
        super(...arguments);
        this._origin = 'program';
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    setFocusOrigin(origin) {
        this._origin = origin;
        return this;
    }
    setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Configuration for the isFocusable method.
 */
class IsFocusableConfig {
    constructor() {
        /**
         * Whether to count an element as focusable even if it is not currently visible.
         */
        this.ignoreVisibility = false;
    }
}
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
class InteractivityChecker {
    constructor(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    isDisabled(element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    isTabbable(element) {
        // Nothing is tabbable on the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Browsers disable tabbing to an element inside of an invisible frame.
            if (!this.isVisible(frameElement)) {
                return false;
            }
        }
        let nodeName = element.nodeName.toLowerCase();
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe' || nodeName === 'object') {
            // The frame or object's content may be tabbable depending on the content, but it's
            // not possibly to reliably detect the content of the frames. We always consider such
            // elements as non-tabbable.
            return false;
        }
        // In iOS, the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        if (nodeName === 'audio') {
            // Audio elements without controls enabled are never tabbable, regardless
            // of the tabindex attribute explicitly being set.
            if (!element.hasAttribute('controls')) {
                return false;
            }
            // Audio elements with controls are by default tabbable unless the
            // tabindex attribute is set to `-1` explicitly.
            return tabIndexValue !== -1;
        }
        if (nodeName === 'video') {
            // For all video elements, if the tabindex attribute is set to `-1`, the video
            // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
            // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
            // tabindex attribute is the source of truth here.
            if (tabIndexValue === -1) {
                return false;
            }
            // If the tabindex is explicitly set, and not `-1` (as per check before), the
            // video element is always tabbable (regardless of whether it has controls or not).
            if (tabIndexValue !== null) {
                return true;
            }
            // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
            // has controls enabled. Firefox is special as videos are always tabbable regardless
            // of whether there are controls or not.
            return this._platform.FIREFOX || element.hasAttribute('controls');
        }
        return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @param config The config object with options to customize this method's behavior
     * @returns Whether the element is focusable.
     */
    isFocusable(element, config) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) &&
            ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
    }
}
InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) { return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform)); };
InteractivityChecker.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform)); }, token: InteractivityChecker, providedIn: "root" });
InteractivityChecker.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractivityChecker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform }]; }, null); })();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */
function getFrameElement(window) {
    try {
        return window.frameElement;
    }
    catch (_a) {
        return null;
    }
}
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
    let nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    let tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
    let nodeName = element.nodeName.toLowerCase();
    let inputType = nodeName === 'input' && element.type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
    // ownerDocument is null if `node` itself *is* a document.
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */
class FocusTrap {
    constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this.startAnchorListener = () => this.focusLastTabbableElement();
        this.endAnchorListener = () => this.focusFirstTabbableElement();
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    /** Whether the focus trap is active. */
    get enabled() { return this._enabled; }
    set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);
            this._toggleAnchorTabIndex(value, this._endAnchor);
        }
    }
    /** Destroys the focus trap by cleaning up the anchors. */
    destroy() {
        const startAnchor = this._startAnchor;
        const endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
        this._hasAttached = false;
    }
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfully. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    attachAnchors() {
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(() => {
            if (!this._startAnchor) {
                this._startAnchor = this._createAnchor();
                this._startAnchor.addEventListener('focus', this.startAnchorListener);
            }
            if (!this._endAnchor) {
                this._endAnchor = this._createAnchor();
                this._endAnchor.addEventListener('focus', this.endAnchorListener);
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore(this._startAnchor, this._element);
            this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    }
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusInitialElementWhenReady(options) {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusInitialElement(options)));
        });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusFirstTabbableElementWhenReady(options) {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
        });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusLastTabbableElementWhenReady(options) {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
        });
    }
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    _getRegionBoundary(bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        let markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` +
            `[cdkFocusRegion${bound}], ` +
            `[cdk-focus-${bound}]`);
        for (let i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated ` +
                    `attribute will be removed in 8.0.0.`, markers[i]);
            }
            else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0.`, markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    }
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfully.
     */
    focusInitialElement(options) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` +
            `[cdkFocusInitial]`);
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute(`cdk-focus-initial`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` +
                    `use 'cdkFocusInitial' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0`, redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
                !this._checker.isFocusable(redirectToElement)) {
                console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
            }
            if (!this._checker.isFocusable(redirectToElement)) {
                const focusableChild = this._getFirstTabbableElement(redirectToElement);
                focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus(options);
                return !!focusableChild;
            }
            redirectToElement.focus(options);
            return true;
        }
        return this.focusFirstTabbableElement(options);
    }
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */
    focusFirstTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus(options);
        }
        return !!redirectToElement;
    }
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */
    focusLastTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus(options);
        }
        return !!redirectToElement;
    }
    /**
     * Checks whether the focus trap has successfully been attached.
     */
    hasAttached() {
        return this._hasAttached;
    }
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        let children = root.children || root.childNodes;
        for (let i = 0; i < children.length; i++) {
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        let children = root.children || root.childNodes;
        for (let i = children.length - 1; i >= 0; i--) {
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Creates an anchor element. */
    _createAnchor() {
        const anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
    }
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    _toggleAnchorTabIndex(isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    }
    /**
     * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
     * @param enabled: Whether the anchors should trap Tab.
     */
    toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);
            this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
    }
    /** Executes a function when the zone is stable. */
    _executeOnStable(fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(fn);
        }
    }
}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change 11.0.0
 */
class FocusTrapFactory {
    constructor(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    }
}
FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) { return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
FocusTrapFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); }, token: FocusTrapFactory, providedIn: "root" });
FocusTrapFactory.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: InteractivityChecker }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, null); })();
/** Directive for trapping focus within a region. */
class CdkTrapFocus {
    constructor(_elementRef, _focusTrapFactory, 
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 13.0.0
     */
    _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /** Previously focused element to restore focus to upon destroy when using autoCapture. */
        this._previouslyFocusedElement = null;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    /** Whether the focus trap is active. */
    get enabled() { return this.focusTrap.enabled; }
    set enabled(value) { this.focusTrap.enabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value); }
    /**
     * Whether the directive should automatically move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */
    get autoCapture() { return this._autoCapture; }
    set autoCapture(value) { this._autoCapture = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value); }
    ngOnDestroy() {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    }
    ngAfterContentInit() {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._captureFocus();
        }
    }
    ngDoCheck() {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    }
    ngOnChanges(changes) {
        const autoCaptureChange = changes['autoCapture'];
        if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture &&
            this.focusTrap.hasAttached()) {
            this._captureFocus();
        }
    }
    _captureFocus() {
        this._previouslyFocusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getFocusedElementPierceShadowDom)();
        this.focusTrap.focusInitialElementWhenReady();
    }
}
CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) { return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
CdkTrapFocus.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkTrapFocus, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: ["cdkTrapFocus", "enabled"], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"] }, exportAs: ["cdkTrapFocus"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
CdkTrapFocus.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: FocusTrapFactory },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
CdkTrapFocus.propDecorators = {
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['cdkTrapFocus',] }],
    autoCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['cdkTrapFocusAutoCapture',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkTrapFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkTrapFocus]',
                exportAs: 'cdkTrapFocus'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: FocusTrapFactory }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, { enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkTrapFocus']
        }], autoCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkTrapFocusAutoCapture']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
class ConfigurableFocusTrap extends FocusTrap {
    constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        super(_element, _checker, _ngZone, _document, config.defer);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
    }
    /** Whether the FocusTrap is enabled. */
    get enabled() { return this._enabled; }
    set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
            this._focusTrapManager.register(this);
        }
        else {
            this._focusTrapManager.deregister(this);
        }
    }
    /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
    destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The injection token used to specify the inert strategy. */
const FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */
function closest(element, selector) {
    if (!(element instanceof Node)) {
        return null;
    }
    let curr = element;
    while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
    }
    return curr && (hasNativeClosest ?
        curr.closest(selector) : polyfillClosest(curr, selector));
}
/** Polyfill for browsers without Element.closest. */
function polyfillClosest(element, selector) {
    let curr = element;
    while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
    }
    return (curr || null);
}
const hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
/** IE 11 compatible matches implementation. */
function matches(element, selector) {
    return element.matches ?
        element.matches(selector) :
        element['msMatchesSelector'](selector);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
class EventListenerFocusTrapInertStrategy {
    constructor() {
        /** Focus event handler. */
        this._listener = null;
    }
    /** Adds a document event listener that keeps focus inside the FocusTrap. */
    preventFocus(focusTrap) {
        // Ensure there's only one listener per document
        if (this._listener) {
            focusTrap._document.removeEventListener('focus', this._listener, true);
        }
        this._listener = (e) => this._trapFocus(focusTrap, e);
        focusTrap._ngZone.runOutsideAngular(() => {
            focusTrap._document.addEventListener('focus', this._listener, true);
        });
    }
    /** Removes the event listener added in preventFocus. */
    allowFocus(focusTrap) {
        if (!this._listener) {
            return;
        }
        focusTrap._document.removeEventListener('focus', this._listener, true);
        this._listener = null;
    }
    /**
     * Refocuses the first element in the FocusTrap if the focus event target was outside
     * the FocusTrap.
     *
     * This is an event listener callback. The event listener is added in runOutsideAngular,
     * so all this code runs outside Angular as well.
     */
    _trapFocus(focusTrap, event) {
        const target = event.target;
        const focusTrapRoot = focusTrap._element;
        // Don't refocus if target was in an overlay, because the overlay might be associated
        // with an element inside the FocusTrap, ex. mat-select.
        if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
            // Some legacy FocusTrap usages have logic that focuses some element on the page
            // just before FocusTrap is destroyed. For backwards compatibility, wait
            // to be sure FocusTrap is still enabled before refocusing.
            setTimeout(() => {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                    focusTrap.focusFirstTabbableElement();
                }
            });
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injectable that ensures only the most recently enabled FocusTrap is active. */
class FocusTrapManager {
    constructor() {
        // A stack of the FocusTraps on the page. Only the FocusTrap at the
        // top of the stack is active.
        this._focusTrapStack = [];
    }
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    register(focusTrap) {
        // Dedupe focusTraps that register multiple times.
        this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
        let stack = this._focusTrapStack;
        if (stack.length) {
            stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    deregister(focusTrap) {
        focusTrap._disable();
        const stack = this._focusTrapStack;
        const i = stack.indexOf(focusTrap);
        if (i !== -1) {
            stack.splice(i, 1);
            if (stack.length) {
                stack[stack.length - 1]._enable();
            }
        }
    }
}
FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) { return new (t || FocusTrapManager)(); };
FocusTrapManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function FocusTrapManager_Factory() { return new FocusTrapManager(); }, token: FocusTrapManager, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Factory that allows easy instantiation of configurable focus traps. */
class ConfigurableFocusTrapFactory {
    constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._focusTrapManager = _focusTrapManager;
        this._document = _document;
        // TODO split up the strategies into different modules, similar to DateAdapter.
        this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
    }
    create(element, config = { defer: false }) {
        let configObject;
        if (typeof config === 'boolean') {
            configObject = { defer: config };
        }
        else {
            configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
    }
}
ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) { return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8)); };
ConfigurableFocusTrapFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function ConfigurableFocusTrapFactory_Factory() { return new ConfigurableFocusTrapFactory(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8)); }, token: ConfigurableFocusTrapFactory, providedIn: "root" });
ConfigurableFocusTrapFactory.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: FocusTrapManager },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [FOCUS_TRAP_INERT_STRATEGY,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: InteractivityChecker }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: FocusTrapManager }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [FOCUS_TRAP_INERT_STRATEGY]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/** @docs-private */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class LiveAnnouncer {
    constructor(elementToken, _ngZone, _document, _defaultOptions) {
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.
        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
    }
    announce(message, ...args) {
        const defaultOptions = this._defaultOptions;
        let politeness;
        let duration;
        if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
        }
        else {
            [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
            politeness =
                (defaultOptions && defaultOptions.politeness) ? defaultOptions.politeness : 'polite';
        }
        if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
        }
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return this._ngZone.runOutsideAngular(() => {
            return new Promise(resolve => {
                clearTimeout(this._previousTimeout);
                this._previousTimeout = setTimeout(() => {
                    this._liveElement.textContent = message;
                    resolve();
                    if (typeof duration === 'number') {
                        this._previousTimeout = setTimeout(() => this.clear(), duration);
                    }
                }, 100);
            });
        });
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    clear() {
        if (this._liveElement) {
            this._liveElement.textContent = '';
        }
    }
    ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
            this._liveElement = null;
        }
    }
    _createLiveElement() {
        const elementClass = 'cdk-live-announcer-element';
        const previousElements = this._document.getElementsByClassName(elementClass);
        const liveEl = this._document.createElement('div');
        // Remove any old containers. This can happen when coming in from a server-side-rendered page.
        for (let i = 0; i < previousElements.length; i++) {
            previousElements[i].parentNode.removeChild(previousElements[i]);
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    }
}
LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) { return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8)); };
LiveAnnouncer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8)); }, token: LiveAnnouncer, providedIn: "root" });
LiveAnnouncer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveAnnouncer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
            }] }]; }, null); })();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
class CdkAriaLive {
    constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'polite';
    }
    /** The aria-live politeness level to use when announcing messages. */
    get politeness() { return this._politeness; }
    set politeness(value) {
        this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';
        if (this._politeness === 'off') {
            if (this._subscription) {
                this._subscription.unsubscribe();
                this._subscription = null;
            }
        }
        else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular(() => {
                return this._contentObserver
                    .observe(this._elementRef)
                    .subscribe(() => {
                    // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                    const elementText = this._elementRef.nativeElement.textContent;
                    // The `MutationObserver` fires also for attribute
                    // changes which we don't want to announce.
                    if (elementText !== this._previousAnnouncedText) {
                        this._liveAnnouncer.announce(elementText, this._politeness);
                        this._previousAnnouncedText = elementText;
                    }
                });
            });
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) { return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
CdkAriaLive.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkAriaLive, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: ["cdkAriaLive", "politeness"] }, exportAs: ["cdkAriaLive"] });
CdkAriaLive.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: LiveAnnouncer },
    { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ContentObserver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
CdkAriaLive.propDecorators = {
    politeness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['cdkAriaLive',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAriaLive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkAriaLive]',
                exportAs: 'cdkAriaLive'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: LiveAnnouncer }, { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ContentObserver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { politeness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkAriaLive']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */
function isFakeMousedownFromScreenReader(event) {
    // We can typically distinguish between these faked mousedown events and real mousedown events
    // using the "buttons" property. While real mousedowns will indicate the mouse button that was
    // pressed (e.g. "1" for the left mouse button), faked mousedowns will usually set the property
    // value to 0.
    return event.buttons === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */
function isFakeTouchstartFromScreenReader(event) {
    const touch = (event.touches && event.touches[0]) ||
        (event.changedTouches && event.changedTouches[0]);
    // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
    // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
    // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
    // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.
    return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) &&
        (touch.radiusY == null || touch.radiusY === 1);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
const TOUCH_BUFFER_MS = 650;
/** InjectionToken for FocusMonitorOptions. */
const FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */
const captureEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.normalizePassiveListenerOptions)({
    passive: true,
    capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */
class FocusMonitor {
    constructor(_ngZone, _platform, 
    /** @breaking-change 11.0.0 make document required */
    document, options) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /** The focus origin that the next focus event is a result of. */
        this._origin = null;
        /** Whether the window has just been focused. */
        this._windowFocused = false;
        /** Map of elements being monitored to their info. */
        this._elementInfo = new Map();
        /** The number of elements currently being monitored. */
        this._monitoredElementCount = 0;
        /**
         * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
         * as well as the number of monitored elements that they contain. We have to treat focus/blur
         * handlers differently from the rest of the events, because the browser won't emit events
         * to the document when focus moves inside of a shadow root.
         */
        this._rootNodeFocusListenerCount = new Map();
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentKeydownListener = () => {
            // On keydown record the origin and clear any touch event that may be in progress.
            this._lastTouchTarget = null;
            this._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentMousedownListener = (event) => {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!this._lastTouchTarget) {
                // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
                // Resolve the focus source to `keyboard` if we detect one of them.
                const source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';
                this._setOriginForCurrentEventQueue(source);
            }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentTouchstartListener = (event) => {
            // Some screen readers will fire a fake `touchstart` event if an element is activated using
            // the keyboard while on a device with a touchsreen. Consider such events as keyboard focus.
            if (!isFakeTouchstartFromScreenReader(event)) {
                // When the touchstart event fires the focus event is not yet in the event queue. This means
                // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
                // see if a focus happens.
                if (this._touchTimeoutId != null) {
                    clearTimeout(this._touchTimeoutId);
                }
                this._lastTouchTarget = getTarget(event);
                this._touchTimeoutId = setTimeout(() => this._lastTouchTarget = null, TOUCH_BUFFER_MS);
            }
            else if (!this._lastTouchTarget) {
                this._setOriginForCurrentEventQueue('keyboard');
            }
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._windowFocusListener = () => {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            this._windowFocused = true;
            this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
        };
        /**
         * Event listener for `focus` and 'blur' events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._rootNodeFocusAndBlurListener = (event) => {
            const target = getTarget(event);
            const handler = event.type === 'focus' ? this._onFocus : this._onBlur;
            // We need to walk up the ancestor chain in order to support `checkChildren`.
            for (let element = target; element; element = element.parentElement) {
                handler.call(this, event, element);
            }
        };
        this._document = document;
        this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0 /* IMMEDIATE */;
    }
    monitor(element, checkChildren = false) {
        const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);
        // Do nothing if we're not on the browser platform or the passed in node isn't an element.
        if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null);
        }
        // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
        // the shadow root, rather than the `document`, because the browser won't emit focus events
        // to the `document`, if focus is moving within the same shadow root.
        const rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getShadowRoot)(nativeElement) || this._getDocument();
        const cachedInfo = this._elementInfo.get(nativeElement);
        // Check if we're already monitoring this element.
        if (cachedInfo) {
            if (checkChildren) {
                // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
                // observers into ones that behave as if `checkChildren` was turned on. We need a more
                // robust solution.
                cachedInfo.checkChildren = true;
            }
            return cachedInfo.subject;
        }
        // Create monitored element info.
        const info = {
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(),
            rootNode
        };
        this._elementInfo.set(nativeElement, info);
        this._registerGlobalListeners(info);
        return info.subject;
    }
    stopMonitoring(element) {
        const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
            elementInfo.subject.complete();
            this._setClasses(nativeElement);
            this._elementInfo.delete(nativeElement);
            this._removeGlobalListeners(elementInfo);
        }
    }
    focusVia(element, origin, options) {
        const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);
        const focusedElement = this._getDocument().activeElement;
        // If the element is focused already, calling `focus` again won't trigger the event listener
        // which means that the focus classes won't be updated. If that's the case, update the classes
        // directly without waiting for an event.
        if (nativeElement === focusedElement) {
            this._getClosestElementsInfo(nativeElement)
                .forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
        }
        else {
            this._setOriginForCurrentEventQueue(origin);
            // `focus` isn't available on the server
            if (typeof nativeElement.focus === 'function') {
                nativeElement.focus(options);
            }
        }
    }
    ngOnDestroy() {
        this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    /** Access injected document if available or fallback to global document reference */
    _getDocument() {
        return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    _toggleClass(element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    }
    _getFocusOrigin(event) {
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        if (this._origin) {
            return this._origin;
        }
        if (this._windowFocused && this._lastFocusOrigin) {
            return this._lastFocusOrigin;
        }
        else if (this._wasCausedByTouch(event)) {
            return 'touch';
        }
        else {
            return 'program';
        }
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    _setClasses(element, origin) {
        this._toggleClass(element, 'cdk-focused', !!origin);
        this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
        this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
        this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
        this._toggleClass(element, 'cdk-program-focused', origin === 'program');
    }
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * If the detection mode is 'eventual', the origin is never cleared.
     * @param origin The origin to set.
     */
    _setOriginForCurrentEventQueue(origin) {
        this._ngZone.runOutsideAngular(() => {
            this._origin = origin;
            if (this._detectionMode === 0 /* IMMEDIATE */) {
                // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                // tick after the interaction event fired. To ensure the focus origin is always correct,
                // the focus origin will be determined at the beginning of the next tick.
                this._originTimeoutId = setTimeout(() => this._origin = null, 1);
            }
        });
    }
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */
    _wasCausedByTouch(event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        const focusTarget = getTarget(event);
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    _onFocus(event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== getTarget(event))) {
            return;
        }
        this._originChanged(element, this._getFocusOrigin(event), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo.subject, null);
    }
    _emitOrigin(subject, origin) {
        this._ngZone.run(() => subject.next(origin));
    }
    _registerGlobalListeners(elementInfo) {
        if (!this._platform.isBrowser) {
            return;
        }
        const rootNode = elementInfo.rootNode;
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
        if (!rootNodeFocusListeners) {
            this._ngZone.runOutsideAngular(() => {
                rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            });
        }
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount === 1) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular(() => {
                const document = this._getDocument();
                const window = this._getWindow();
                document.addEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', this._windowFocusListener);
            });
        }
    }
    _removeGlobalListeners(elementInfo) {
        const rootNode = elementInfo.rootNode;
        if (this._rootNodeFocusListenerCount.has(rootNode)) {
            const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
            if (rootNodeFocusListeners > 1) {
                this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
            }
            else {
                rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                this._rootNodeFocusListenerCount.delete(rootNode);
            }
        }
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            const document = this._getDocument();
            const window = this._getWindow();
            document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
            document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
            document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
            window.removeEventListener('focus', this._windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
        }
    }
    /** Updates all the state on an element once its focus origin has changed. */
    _originChanged(element, origin, elementInfo) {
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo.subject, origin);
        this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */
    _getClosestElementsInfo(element) {
        const results = [];
        this._elementInfo.forEach((info, currentElement) => {
            if (currentElement === element || (info.checkChildren && currentElement.contains(element))) {
                results.push([currentElement, info]);
            }
        });
        return results;
    }
}
FocusMonitor.ɵfac = function FocusMonitor_Factory(t) { return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8)); };
FocusMonitor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function FocusMonitor_Factory() { return new FocusMonitor(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8)); }, token: FocusMonitor, providedIn: "root" });
FocusMonitor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [FOCUS_MONITOR_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
            }] }]; }, null); })();
/** Gets the target of an event, accounting for Shadow DOM. */
function getTarget(event) {
    // If an event is bound outside the Shadow DOM, the `event.target` will
    // point to the shadow root so we have to use `composedPath` instead.
    return (event.composedPath ? event.composedPath()[0] : event.target);
}
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
class CdkMonitorFocus {
    constructor(_elementRef, _focusMonitor) {
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(origin => this.cdkFocusChange.emit(origin));
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        if (this._monitorSubscription) {
            this._monitorSubscription.unsubscribe();
        }
    }
}
CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) { return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusMonitor)); };
CdkMonitorFocus.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkMonitorFocus, selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]], outputs: { cdkFocusChange: "cdkFocusChange" } });
CdkMonitorFocus.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: FocusMonitor }
];
CdkMonitorFocus.propDecorators = {
    cdkFocusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkMonitorFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: FocusMonitor }]; }, { cdkFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** CSS class applied to the document body when in black-on-white high-contrast mode. */
const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */
const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
class HighContrastModeDetector {
    constructor(_platform, document) {
        this._platform = _platform;
        this._document = document;
    }
    /** Gets the current high-contrast-mode for the page. */
    getHighContrastMode() {
        if (!this._platform.isBrowser) {
            return 0 /* NONE */;
        }
        // Create a test element with an arbitrary background-color that is neither black nor
        // white; high-contrast mode will coerce the color to either black or white. Also ensure that
        // appending the test element to the DOM does not affect layout by absolutely positioning it
        const testElement = this._document.createElement('div');
        testElement.style.backgroundColor = 'rgb(1,2,3)';
        testElement.style.position = 'absolute';
        this._document.body.appendChild(testElement);
        // Get the computed style for the background color, collapsing spaces to normalize between
        // browsers. Once we get this color, we no longer need the test element. Access the `window`
        // via the document so we can fake it in tests. Note that we have extra null checks, because
        // this logic will likely run during app bootstrap and throwing can break the entire app.
        const documentWindow = this._document.defaultView || window;
        const computedStyle = (documentWindow && documentWindow.getComputedStyle) ?
            documentWindow.getComputedStyle(testElement) : null;
        const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
        this._document.body.removeChild(testElement);
        switch (computedColor) {
            case 'rgb(0,0,0)': return 2 /* WHITE_ON_BLACK */;
            case 'rgb(255,255,255)': return 1 /* BLACK_ON_WHITE */;
        }
        return 0 /* NONE */;
    }
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
    _applyBodyHighContrastModeCssClasses() {
        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
            const bodyClasses = this._document.body.classList;
            // IE11 doesn't support `classList` operations with multiple arguments
            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
            bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
            this._hasCheckedHighContrastMode = true;
            const mode = this.getHighContrastMode();
            if (mode === 1 /* BLACK_ON_WHITE */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
            }
            else if (mode === 2 /* WHITE_ON_BLACK */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
            }
        }
    }
}
HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) { return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
HighContrastModeDetector.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function HighContrastModeDetector_Factory() { return new HighContrastModeDetector(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); }, token: HighContrastModeDetector, providedIn: "root" });
HighContrastModeDetector.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighContrastModeDetector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class A11yModule {
    constructor(highContrastModeDetector) {
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }
}
A11yModule.ɵfac = function A11yModule_Factory(t) { return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HighContrastModeDetector)); };
A11yModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: A11yModule });
A11yModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ObserversModule]] });
A11yModule.ctorParameters = () => [
    { type: HighContrastModeDetector }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A11yModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ObserversModule],
                declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
            }]
    }], function () { return [{ type: HighContrastModeDetector }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](A11yModule, { declarations: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ObserversModule]; }, exports: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=a11y.js.map

/***/ }),

/***/ 8553:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkObserveContent": function() { return /* binding */ CdkObserveContent; },
/* harmony export */   "ContentObserver": function() { return /* binding */ ContentObserver; },
/* harmony export */   "MutationObserverFactory": function() { return /* binding */ MutationObserverFactory; },
/* harmony export */   "ObserversModule": function() { return /* binding */ ObserversModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4395);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */

class MutationObserverFactory {
    create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
}
MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) { return new (t || MutationObserverFactory)(); };
MutationObserverFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MutationObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** An injectable service that allows watching elements for changes to their content. */
class ContentObserver {
    constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /** Keeps track of the existing MutationObservers so they can be reused. */
        this._observedElements = new Map();
    }
    ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(elementOrRef) {
        const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((observer) => {
            const stream = this._observeElement(element);
            const subscription = stream.subscribe(observer);
            return () => {
                subscription.unsubscribe();
                this._unobserveElement(element);
            };
        });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    _observeElement(element) {
        if (!this._observedElements.has(element)) {
            const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
            const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    _unobserveElement(element) {
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).count--;
            if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
            }
        }
    }
    /** Clean up the underlying MutationObserver for the specified element. */
    _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
            const { observer, stream } = this._observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    }
}
ContentObserver.ɵfac = function ContentObserver_Factory(t) { return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory)); };
ContentObserver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function ContentObserver_Factory() { return new ContentObserver(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
ContentObserver.ctorParameters = () => [
    { type: MutationObserverFactory }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MutationObserverFactory }]; }, null); })();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
class CdkObserveContent {
    constructor(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /** Event emitted for each change in the element's content. */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._disabled = false;
        this._currentSubscription = null;
    }
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
        this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /** Debounce interval for emitting the changes. */
    get debounce() { return this._debounce; }
    set debounce(value) {
        this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);
        this._subscribe();
    }
    ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    }
    ngOnDestroy() {
        this._unsubscribe();
    }
    _subscribe() {
        this._unsubscribe();
        const stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular(() => {
            this._currentSubscription =
                (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
        });
    }
    _unsubscribe() {
        var _a;
        (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) { return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
CdkObserveContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkObserveContent, selectors: [["", "cdkObserveContent", ""]], inputs: { disabled: ["cdkObserveContentDisabled", "disabled"], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"] });
CdkObserveContent.ctorParameters = () => [
    { type: ContentObserver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
CdkObserveContent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['cdkObserveContent',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['cdkObserveContentDisabled',] }],
    debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkObserveContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkObserveContent]',
                exportAs: 'cdkObserveContent'
            }]
    }], function () { return [{ type: ContentObserver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['cdkObserveContent']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkObserveContentDisabled']
        }], debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class ObserversModule {
}
ObserversModule.ɵfac = function ObserversModule_Factory(t) { return new (t || ObserversModule)(); };
ObserversModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObserversModule });
ObserversModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MutationObserverFactory] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [CdkObserveContent],
                declarations: [CdkObserveContent],
                providers: [MutationObserverFactory]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObserversModule, { declarations: [CdkObserveContent], exports: [CdkObserveContent] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=observers.js.map

/***/ }),

/***/ 5772:
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": function() { return /* binding */ VERSION; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of the Angular Component Development Kit. */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('12.0.3');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


//# sourceMappingURL=cdk.js.map


/***/ }),

/***/ 1841:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_INTERCEPTORS": function() { return /* binding */ HTTP_INTERCEPTORS; },
/* harmony export */   "HttpBackend": function() { return /* binding */ HttpBackend; },
/* harmony export */   "HttpClient": function() { return /* binding */ HttpClient; },
/* harmony export */   "HttpClientJsonpModule": function() { return /* binding */ HttpClientJsonpModule; },
/* harmony export */   "HttpClientModule": function() { return /* binding */ HttpClientModule; },
/* harmony export */   "HttpClientXsrfModule": function() { return /* binding */ HttpClientXsrfModule; },
/* harmony export */   "HttpContext": function() { return /* binding */ HttpContext; },
/* harmony export */   "HttpContextToken": function() { return /* binding */ HttpContextToken; },
/* harmony export */   "HttpErrorResponse": function() { return /* binding */ HttpErrorResponse; },
/* harmony export */   "HttpEventType": function() { return /* binding */ HttpEventType; },
/* harmony export */   "HttpHandler": function() { return /* binding */ HttpHandler; },
/* harmony export */   "HttpHeaderResponse": function() { return /* binding */ HttpHeaderResponse; },
/* harmony export */   "HttpHeaders": function() { return /* binding */ HttpHeaders; },
/* harmony export */   "HttpParams": function() { return /* binding */ HttpParams; },
/* harmony export */   "HttpRequest": function() { return /* binding */ HttpRequest; },
/* harmony export */   "HttpResponse": function() { return /* binding */ HttpResponse; },
/* harmony export */   "HttpResponseBase": function() { return /* binding */ HttpResponseBase; },
/* harmony export */   "HttpUrlEncodingCodec": function() { return /* binding */ HttpUrlEncodingCodec; },
/* harmony export */   "HttpXhrBackend": function() { return /* binding */ HttpXhrBackend; },
/* harmony export */   "HttpXsrfTokenExtractor": function() { return /* binding */ HttpXsrfTokenExtractor; },
/* harmony export */   "JsonpClientBackend": function() { return /* binding */ JsonpClientBackend; },
/* harmony export */   "JsonpInterceptor": function() { return /* binding */ JsonpInterceptor; },
/* harmony export */   "XhrFactory": function() { return /* binding */ XhrFactory; },
/* harmony export */   "ɵHttpInterceptingHandler": function() { return /* binding */ HttpInterceptingHandler; },
/* harmony export */   "ɵangular_packages_common_http_http_a": function() { return /* binding */ NoopInterceptor; },
/* harmony export */   "ɵangular_packages_common_http_http_b": function() { return /* binding */ JsonpCallbackContext; },
/* harmony export */   "ɵangular_packages_common_http_http_c": function() { return /* binding */ jsonpCallbackContext; },
/* harmony export */   "ɵangular_packages_common_http_http_d": function() { return /* binding */ XSRF_COOKIE_NAME; },
/* harmony export */   "ɵangular_packages_common_http_http_e": function() { return /* binding */ XSRF_HEADER_NAME; },
/* harmony export */   "ɵangular_packages_common_http_http_f": function() { return /* binding */ HttpXsrfCookieExtractor; },
/* harmony export */   "ɵangular_packages_common_http_http_g": function() { return /* binding */ HttpXsrfInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/**
 * @license Angular v12.0.3
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */


class HttpHandler {
}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = () => {
                this.headers = new Map();
                headers.split('\n').forEach(line => {
                    const index = line.indexOf(':');
                    if (index > 0) {
                        const name = line.slice(0, index);
                        const key = name.toLowerCase();
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            this.headers.get(key).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = () => {
                this.headers = new Map();
                Object.keys(headers).forEach(name => {
                    let values = headers[name];
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(update => this.applyUpdate(update));
                this.lazyUpdate = null;
            }
        }
    }
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach(key => {
            this.headers.set(key, other.headers.get(key));
            this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    }
    clone(update) {
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                let value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                const toDelete = update.value;
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(value => toDelete.indexOf(value) === -1);
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * @internal
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    encodeKey(key) {
        return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    encodeValue(value) {
        return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
function paramParser(rawParams, codec) {
    const map = new Map();
    if (rawParams.length > 0) {
        // The `window.location.search` can be used while creating an instance of the `HttpParams` class
        // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
        // may start with the `?` char, so we strip it if it's present.
        const params = rawParams.replace(/^\?/, '').split('&');
        params.forEach((param) => {
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
function valueToString(value) {
    return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
    constructor(options = {}) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(key => {
                const value = options.fromObject[key];
                this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return this.map.has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return this.map.get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from(this.map.keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param, value) {
        return this.clone({ param, value, op: 'a' });
    }
    /**
     * Constructs a new body with appended values for the given parameter name.
     * @param params parameters and values
     * @return A new body with the new value.
     */
    appendAll(params) {
        const updates = [];
        Object.keys(params).forEach(param => {
            const value = params[param];
            if (Array.isArray(value)) {
                value.forEach(_value => {
                    updates.push({ param, value: _value, op: 'a' });
                });
            }
            else {
                updates.push({ param, value: value, op: 'a' });
            }
        });
        return this.clone(updates);
    }
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param, value) {
        return this.clone({ param, value, op: 's' });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) {
        return this.clone({ param, value, op: 'd' });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString() {
        this.init();
        return this.keys()
            .map(key => {
            const eKey = this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value))
                .join('&');
        })
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(param => param !== '')
            .join('&');
    }
    clone(update) {
        const clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
    }
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
            this.updates.forEach(update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
                        base.push(valueToString(update.value));
                        this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            let base = this.map.get(update.param) || [];
                            const idx = base.indexOf(valueToString(update.value));
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                this.map.set(update.param, base);
                            }
                            else {
                                this.map.delete(update.param);
                            }
                        }
                        else {
                            this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */
class HttpContextToken {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */
class HttpContext {
    constructor() {
        this.map = new Map();
    }
    /**
     * Store a value in the context. If a value is already present it will be overwritten.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     * @param value The value to store.
     *
     * @returns A reference to itself for easy chaining.
     */
    set(token, value) {
        this.map.set(token, value);
        return this;
    }
    /**
     * Retrieve the value associated with the given token.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     *
     * @returns The stored value or default if one is defined.
     */
    get(token) {
        if (!this.map.has(token)) {
            this.map.set(token, token.defaultValue());
        }
        return this.map.get(token);
    }
    /**
     * Delete the value associated with the given token.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     *
     * @returns A reference to itself for easy chaining.
     */
    delete(token) {
        this.map.delete(token);
        return this;
    }
    /**
     * @returns a list of tokens currently stored in the context.
     */
    keys() {
        return this.map.keys();
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.context) {
                this.context = options.context;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no context have been passed in, construct a new HttpContext instance.
        if (!this.context) {
            this.context = new HttpContext();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, boolean and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            typeof this.body === 'boolean') {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    clone(update = {}) {
        var _a;
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        // Pass on context if needed
        const context = (_a = update.context) !== null && _a !== void 0 ? _a : this.context;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((params, param) => params.set(param, update.setParams[param]), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params,
            headers,
            context,
            reportProgress,
            responseType,
            withCredentials,
        });
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    constructor(init, defaultStatus = 200 /* Ok */, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        context: options.context,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */
class HttpClient {
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    request(first, url, options = {}) {
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers,
                context: options.context,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)((req) => this.handler.handle(req)));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((event) => event instanceof HttpResponse));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res.body));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    get(url, options = {}) {
        return this.request('GET', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    head(url, options = {}) {
        return this.request('HEAD', url, options);
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.ɵfac = function HttpClient_Factory(t) { return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpHandler)); };
HttpClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpClient, factory: HttpClient.ɵfac });
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: HttpHandler }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTORS');
class NoopInterceptor {
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
NoopInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NoopInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
class JsonpClientBackend {
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
        /**
         * A resolved promise that can be used to schedule microtasks in the event handlers.
         */
        this.resolvedPromise = Promise.resolve();
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            const callback = this.nextCallback();
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            let body = null;
            // Whether the response callback has been called.
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            const cleanup = () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            const onLoad = (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // We wrap it in an extra Promise, to ensure the microtask
                // is scheduled after the loaded endpoint has executed any potential microtask itself,
                // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
                this.resolvedPromise.then(() => {
                    // Cleanup the page.
                    cleanup();
                    // Check whether the response callback has run.
                    if (!finished) {
                        // It hasn't, something went wrong with the request. Return an error via
                        // the Observable error path. All JSONP errors have status 0.
                        observer.error(new HttpErrorResponse({
                            url,
                            status: 0,
                            statusText: 'JSONP Error',
                            error: new Error(JSONP_ERR_NO_CALLBACK),
                        }));
                        return;
                    }
                    // Success. body either contains the response body or null if none was
                    // returned.
                    observer.next(new HttpResponse({
                        body,
                        status: 200 /* Ok */,
                        statusText: 'OK',
                        url,
                    }));
                    // Complete the stream, the response is over.
                    observer.complete();
                });
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            const onError = (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error',
                    url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    }
}
JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) { return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
JsonpClientBackend.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: JsonpClientBackend, factory: JsonpClientBackend.ɵfac });
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpClientBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: JsonpCallbackContext }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }] }]; }, null); })();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
class JsonpInterceptor {
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) { return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpClientBackend)); };
JsonpInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: JsonpInterceptor, factory: JsonpInterceptor.ɵfac });
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: JsonpClientBackend }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
class HttpXhrBackend {
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the HttpClientJsonpModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            const partialFromXhr = () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).
                const status = xhr.status === 1223 ? 204 /* NoContent */ : xhr.status;
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            const onLoad = () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                let body = null;
                if (status !== 204 /* NoContent */) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 /* Ok */ : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            const onError = (error) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            const onDownProgress = (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            const onUpProgress = (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            xhr.addEventListener('timeout', onError);
            xhr.addEventListener('abort', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('abort', onError);
                xhr.removeEventListener('load', onLoad);
                xhr.removeEventListener('timeout', onError);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                if (xhr.readyState !== xhr.DONE) {
                    xhr.abort();
                }
            };
        });
    }
}
HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) { return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory)); };
HttpXhrBackend.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpXhrBackend, factory: HttpXhrBackend.ɵfac });
HttpXhrBackend.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXhrBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {
}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) { return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_COOKIE_NAME)); };
HttpXsrfCookieExtractor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpXsrfCookieExtractor, factory: HttpXsrfCookieExtractor.ɵfac });
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [XSRF_COOKIE_NAME,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [XSRF_COOKIE_NAME]
            }] }]; }, null); })();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    intercept(req, next) {
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) { return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_HEADER_NAME)); };
HttpXsrfInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpXsrfInterceptor, factory: HttpXsrfInterceptor.ɵfac });
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [XSRF_HEADER_NAME,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: HttpXsrfTokenExtractor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [XSRF_HEADER_NAME]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    handle(req) {
        if (this.chain === null) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) { return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector)); };
HttpInterceptingHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpInterceptingHandler, factory: HttpInterceptingHandler.ɵfac });
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: HttpBackend }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }]; }, null); })();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) { return new (t || HttpClientXsrfModule)(); };
HttpClientXsrfModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HttpClientXsrfModule });
HttpClientXsrfModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ]
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientModule {
}
HttpClientModule.ɵfac = function HttpClientModule_Factory(t) { return new (t || HttpClientModule)(); };
HttpClientModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HttpClientModule });
HttpClientModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        HttpClient,
        { provide: HttpHandler, useClass: HttpInterceptingHandler },
        HttpXhrBackend,
        { provide: HttpBackend, useExisting: HttpXhrBackend },
    ], imports: [[
            HttpClientXsrfModule.withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-XSRF-TOKEN'
            }),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN'
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HttpClientModule, { imports: [HttpClientXsrfModule] }); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) { return new (t || HttpClientJsonpModule)(); };
HttpClientJsonpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HttpClientJsonpModule });
HttpClientJsonpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        JsonpClientBackend,
        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */
const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=http.js.map

/***/ }),

/***/ 1095:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatAnchor": function() { return /* binding */ MatAnchor; },
/* harmony export */   "MatButton": function() { return /* binding */ MatButton; },
/* harmony export */   "MatButtonModule": function() { return /* binding */ MatButtonModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default color palette for round buttons (mat-fab and mat-mini-fab) */




const _c0 = ["mat-button", ""];
const _c1 = ["*"];
const _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n";
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
    'mat-button',
    'mat-flat-button',
    'mat-icon-button',
    'mat-raised-button',
    'mat-stroked-button',
    'mat-mini-fab',
    'mat-fab',
];
// Boilerplate for applying mixins to MatButton.
/** @docs-private */
class MatButtonBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatButtonMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisableRipple)(MatButtonBase)));
/**
 * Material design button.
 */
class MatButton extends _MatButtonMixinBase {
    constructor(elementRef, _focusMonitor, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._animationMode = _animationMode;
        /** Whether the button is round. */
        this.isRoundButton = this._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /** Whether the button is icon button. */
        this.isIconButton = this._hasHostAttributes('mat-icon-button');
        // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                this._getHostElement().classList.add(attr);
            }
        }
        // Add a class that applies to all buttons. This makes it easier to target if somebody
        // wants to target all Material buttons. We do it here rather than `host` to ensure that
        // the class is applied to derived classes.
        elementRef.nativeElement.classList.add('mat-button-base');
        if (this.isRoundButton) {
            this.color = DEFAULT_ROUND_BUTTON_COLOR;
        }
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the button. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
    }
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /** Gets whether the button has one of the given attributes. */
    _hasHostAttributes(...attributes) {
        return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    }
}
MatButton.ɵfac = function MatButton_Factory(t) { return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8)); };
MatButton.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatButton, selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]], viewQuery: function MatButton_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-focus-indicator"], hostVars: 5, hostBindings: function MatButton_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color" }, exportAs: ["matButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 5, consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]], template: function MatButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple], styles: [_c2], encapsulation: 2, changeDetection: 0 });
MatButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE,] }] }
];
MatButton.propDecorators = {
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: `button[mat-button], button[mat-raised-button], button[mat-icon-button],
             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
             button[mat-flat-button]`,
                exportAs: 'matButton',
                host: {
                    '[attr.disabled]': 'disabled || null',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    // Add a class for disabled button styling instead of the using attribute
                    // selector or pseudo-selector.  This allows users to create focusabled
                    // disabled buttons without recreating the styles.
                    '[class.mat-button-disabled]': 'disabled',
                    'class': 'mat-focus-indicator'
                },
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
                inputs: ['disabled', 'disableRipple', 'color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
            }] }]; }, { ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple]
        }] }); })();
/**
 * Material design anchor button.
 */
class MatAnchor extends MatButton {
    constructor(focusMonitor, elementRef, animationMode) {
        super(elementRef, focusMonitor, animationMode);
    }
    _haltDisabledEvents(event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
MatAnchor.ɵfac = function MatAnchor_Factory(t) { return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8)); };
MatAnchor.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatAnchor, selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]], hostAttrs: [1, "mat-focus-indicator"], hostVars: 7, hostBindings: function MatAnchor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) { return ctx._haltDisabledEvents($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex" }, exportAs: ["matButton", "matAnchor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 5, consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]], template: function MatAnchor_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple], styles: [_c2], encapsulation: 2, changeDetection: 0 });
MatAnchor.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE,] }] }
];
MatAnchor.propDecorators = {
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: `a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],
             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]`,
                exportAs: 'matButton, matAnchor',
                host: {
                    // Note that we ignore the user-specified tabindex when it's disabled for
                    // consistency with the `mat-button` applied on native buttons where even
                    // though they have an index, they're not tabbable.
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '(click)': '_haltDisabledEvents($event)',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-button-disabled]': 'disabled',
                    'class': 'mat-focus-indicator'
                },
                inputs: ['disabled', 'disableRipple', 'color'],
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
            }] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatButtonModule {
}
MatButtonModule.ɵfac = function MatButtonModule_Factory(t) { return new (t || MatButtonModule)(); };
MatButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatButtonModule });
MatButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule,
                ],
                exports: [
                    MatButton,
                    MatAnchor,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule,
                ],
                declarations: [
                    MatButton,
                    MatAnchor,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatButtonModule, { declarations: function () { return [MatButton, MatAnchor]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; }, exports: function () { return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=button.js.map

/***/ }),

/***/ 3738:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCard": function() { return /* binding */ MatCard; },
/* harmony export */   "MatCardActions": function() { return /* binding */ MatCardActions; },
/* harmony export */   "MatCardAvatar": function() { return /* binding */ MatCardAvatar; },
/* harmony export */   "MatCardContent": function() { return /* binding */ MatCardContent; },
/* harmony export */   "MatCardFooter": function() { return /* binding */ MatCardFooter; },
/* harmony export */   "MatCardHeader": function() { return /* binding */ MatCardHeader; },
/* harmony export */   "MatCardImage": function() { return /* binding */ MatCardImage; },
/* harmony export */   "MatCardLgImage": function() { return /* binding */ MatCardLgImage; },
/* harmony export */   "MatCardMdImage": function() { return /* binding */ MatCardMdImage; },
/* harmony export */   "MatCardModule": function() { return /* binding */ MatCardModule; },
/* harmony export */   "MatCardSmImage": function() { return /* binding */ MatCardSmImage; },
/* harmony export */   "MatCardSubtitle": function() { return /* binding */ MatCardSubtitle; },
/* harmony export */   "MatCardTitle": function() { return /* binding */ MatCardTitle; },
/* harmony export */   "MatCardTitleGroup": function() { return /* binding */ MatCardTitleGroup; },
/* harmony export */   "MatCardXlImage": function() { return /* binding */ MatCardXlImage; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 7817);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


const _c0 = ["*", [["mat-card-footer"]]];
const _c1 = ["*", "mat-card-footer"];
const _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
const _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];
class MatCardContent {
}
MatCardContent.ɵfac = function MatCardContent_Factory(t) { return new (t || MatCardContent)(); };
MatCardContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardContent, selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]], hostAttrs: [1, "mat-card-content"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-card-content, [mat-card-content], [matCardContent]',
                host: { 'class': 'mat-card-content' }
            }]
    }], null, null); })();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardTitle {
}
MatCardTitle.ɵfac = function MatCardTitle_Factory(t) { return new (t || MatCardTitle)(); };
MatCardTitle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardTitle, selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]], hostAttrs: [1, "mat-card-title"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
                host: {
                    'class': 'mat-card-title'
                }
            }]
    }], null, null); })();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardSubtitle {
}
MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) { return new (t || MatCardSubtitle)(); };
MatCardSubtitle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardSubtitle, selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]], hostAttrs: [1, "mat-card-subtitle"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
                host: {
                    'class': 'mat-card-subtitle'
                }
            }]
    }], null, null); })();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardActions {
    constructor() {
        /** Position of the actions inside the card. */
        this.align = 'start';
    }
}
MatCardActions.ɵfac = function MatCardActions_Factory(t) { return new (t || MatCardActions)(); };
MatCardActions.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardActions, selectors: [["mat-card-actions"]], hostAttrs: [1, "mat-card-actions"], hostVars: 2, hostBindings: function MatCardActions_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
    } }, inputs: { align: "align" }, exportAs: ["matCardActions"] });
MatCardActions.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-card-actions',
                exportAs: 'matCardActions',
                host: {
                    'class': 'mat-card-actions',
                    '[class.mat-card-actions-align-end]': 'align === "end"'
                }
            }]
    }], function () { return []; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardFooter {
}
MatCardFooter.ɵfac = function MatCardFooter_Factory(t) { return new (t || MatCardFooter)(); };
MatCardFooter.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardFooter, selectors: [["mat-card-footer"]], hostAttrs: [1, "mat-card-footer"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-card-footer',
                host: { 'class': 'mat-card-footer' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardImage {
}
MatCardImage.ɵfac = function MatCardImage_Factory(t) { return new (t || MatCardImage)(); };
MatCardImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardImage, selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]], hostAttrs: [1, "mat-card-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-image], [matCardImage]',
                host: { 'class': 'mat-card-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardSmImage {
}
MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) { return new (t || MatCardSmImage)(); };
MatCardSmImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardSmImage, selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]], hostAttrs: [1, "mat-card-sm-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-sm-image], [matCardImageSmall]',
                host: { 'class': 'mat-card-sm-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardMdImage {
}
MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) { return new (t || MatCardMdImage)(); };
MatCardMdImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardMdImage, selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]], hostAttrs: [1, "mat-card-md-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-md-image], [matCardImageMedium]',
                host: { 'class': 'mat-card-md-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardLgImage {
}
MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) { return new (t || MatCardLgImage)(); };
MatCardLgImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardLgImage, selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]], hostAttrs: [1, "mat-card-lg-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-lg-image], [matCardImageLarge]',
                host: { 'class': 'mat-card-lg-image' }
            }]
    }], null, null); })();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardXlImage {
}
MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) { return new (t || MatCardXlImage)(); };
MatCardXlImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardXlImage, selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], hostAttrs: [1, "mat-card-xl-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-xl-image], [matCardImageXLarge]',
                host: { 'class': 'mat-card-xl-image' }
            }]
    }], null, null); })();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardAvatar {
}
MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) { return new (t || MatCardAvatar)(); };
MatCardAvatar.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardAvatar, selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], hostAttrs: [1, "mat-card-avatar"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-avatar], [matCardAvatar]',
                host: { 'class': 'mat-card-avatar' }
            }]
    }], null, null); })();
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */
class MatCard {
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    constructor(_animationMode) {
        this._animationMode = _animationMode;
    }
}
MatCard.ɵfac = function MatCard_Factory(t) { return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatCard.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCard, selectors: [["mat-card"]], hostAttrs: [1, "mat-card", "mat-focus-indicator"], hostVars: 2, hostBindings: function MatCard_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, exportAs: ["matCard"], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatCard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    } }, styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"], encapsulation: 2, changeDetection: 0 });
MatCard.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-card',
                exportAs: 'matCard',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'mat-card mat-focus-indicator',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
class MatCardHeader {
}
MatCardHeader.ɵfac = function MatCardHeader_Factory(t) { return new (t || MatCardHeader)(); };
MatCardHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCardHeader, selectors: [["mat-card-header"]], hostAttrs: [1, "mat-card-header"], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [[1, "mat-card-header-text"]], template: function MatCardHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-card-header',
                template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-header' }
            }]
    }], null, null); })();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */
class MatCardTitleGroup {
}
MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) { return new (t || MatCardTitleGroup)(); };
MatCardTitleGroup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCardTitleGroup, selectors: [["mat-card-title-group"]], hostAttrs: [1, "mat-card-title-group"], ngContentSelectors: _c5, decls: 4, vars: 0, template: function MatCardTitleGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-card-title-group',
                template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-title-group' }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatCardModule {
}
MatCardModule.ɵfac = function MatCardModule_Factory(t) { return new (t || MatCardModule)(); };
MatCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCardModule });
MatCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
                exports: [
                    MatCard,
                    MatCardHeader,
                    MatCardTitleGroup,
                    MatCardContent,
                    MatCardTitle,
                    MatCardSubtitle,
                    MatCardActions,
                    MatCardFooter,
                    MatCardSmImage,
                    MatCardMdImage,
                    MatCardLgImage,
                    MatCardImage,
                    MatCardXlImage,
                    MatCardAvatar,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                ],
                declarations: [
                    MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle,
                    MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage,
                    MatCardXlImage, MatCardAvatar,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, { declarations: function () { return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; }, exports: function () { return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=card.js.map

/***/ }),

/***/ 7817:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationCurves": function() { return /* binding */ AnimationCurves; },
/* harmony export */   "AnimationDurations": function() { return /* binding */ AnimationDurations; },
/* harmony export */   "DateAdapter": function() { return /* binding */ DateAdapter; },
/* harmony export */   "ErrorStateMatcher": function() { return /* binding */ ErrorStateMatcher; },
/* harmony export */   "MATERIAL_SANITY_CHECKS": function() { return /* binding */ MATERIAL_SANITY_CHECKS; },
/* harmony export */   "MAT_DATE_FORMATS": function() { return /* binding */ MAT_DATE_FORMATS; },
/* harmony export */   "MAT_DATE_LOCALE": function() { return /* binding */ MAT_DATE_LOCALE; },
/* harmony export */   "MAT_DATE_LOCALE_FACTORY": function() { return /* binding */ MAT_DATE_LOCALE_FACTORY; },
/* harmony export */   "MAT_NATIVE_DATE_FORMATS": function() { return /* binding */ MAT_NATIVE_DATE_FORMATS; },
/* harmony export */   "MAT_OPTGROUP": function() { return /* binding */ MAT_OPTGROUP; },
/* harmony export */   "MAT_OPTION_PARENT_COMPONENT": function() { return /* binding */ MAT_OPTION_PARENT_COMPONENT; },
/* harmony export */   "MAT_RIPPLE_GLOBAL_OPTIONS": function() { return /* binding */ MAT_RIPPLE_GLOBAL_OPTIONS; },
/* harmony export */   "MatCommonModule": function() { return /* binding */ MatCommonModule; },
/* harmony export */   "MatLine": function() { return /* binding */ MatLine; },
/* harmony export */   "MatLineModule": function() { return /* binding */ MatLineModule; },
/* harmony export */   "MatNativeDateModule": function() { return /* binding */ MatNativeDateModule; },
/* harmony export */   "MatOptgroup": function() { return /* binding */ MatOptgroup; },
/* harmony export */   "MatOption": function() { return /* binding */ MatOption; },
/* harmony export */   "MatOptionModule": function() { return /* binding */ MatOptionModule; },
/* harmony export */   "MatOptionSelectionChange": function() { return /* binding */ MatOptionSelectionChange; },
/* harmony export */   "MatPseudoCheckbox": function() { return /* binding */ MatPseudoCheckbox; },
/* harmony export */   "MatPseudoCheckboxModule": function() { return /* binding */ MatPseudoCheckboxModule; },
/* harmony export */   "MatRipple": function() { return /* binding */ MatRipple; },
/* harmony export */   "MatRippleModule": function() { return /* binding */ MatRippleModule; },
/* harmony export */   "NativeDateAdapter": function() { return /* binding */ NativeDateAdapter; },
/* harmony export */   "NativeDateModule": function() { return /* binding */ NativeDateModule; },
/* harmony export */   "RippleRef": function() { return /* binding */ RippleRef; },
/* harmony export */   "RippleRenderer": function() { return /* binding */ RippleRenderer; },
/* harmony export */   "ShowOnDirtyErrorStateMatcher": function() { return /* binding */ ShowOnDirtyErrorStateMatcher; },
/* harmony export */   "VERSION": function() { return /* binding */ VERSION$1; },
/* harmony export */   "_MatOptgroupBase": function() { return /* binding */ _MatOptgroupBase; },
/* harmony export */   "_MatOptionBase": function() { return /* binding */ _MatOptionBase; },
/* harmony export */   "_countGroupLabelsBeforeOption": function() { return /* binding */ _countGroupLabelsBeforeOption; },
/* harmony export */   "_getOptionScrollPosition": function() { return /* binding */ _getOptionScrollPosition; },
/* harmony export */   "defaultRippleAnimationConfig": function() { return /* binding */ defaultRippleAnimationConfig; },
/* harmony export */   "mixinColor": function() { return /* binding */ mixinColor; },
/* harmony export */   "mixinDisableRipple": function() { return /* binding */ mixinDisableRipple; },
/* harmony export */   "mixinDisabled": function() { return /* binding */ mixinDisabled; },
/* harmony export */   "mixinErrorState": function() { return /* binding */ mixinErrorState; },
/* harmony export */   "mixinInitialized": function() { return /* binding */ mixinInitialized; },
/* harmony export */   "mixinTabIndex": function() { return /* binding */ mixinTabIndex; },
/* harmony export */   "setLines": function() { return /* binding */ setLines; },
/* harmony export */   "ɵ0": function() { return /* binding */ ɵ0; },
/* harmony export */   "ɵangular_material_src_material_core_core_a": function() { return /* binding */ MATERIAL_SANITY_CHECKS_FACTORY; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk */ 5772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of Angular Material. */





const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];
function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
} }
function MatOption_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
} }
const _c2 = ["*"];
const VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('12.0.3');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
class AnimationCurves {
}
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/** @docs-private */
class AnimationDurations {
}
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('12.0.3');
/** @docs-private */
function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/** Injection token that configures whether the Material sanity checks are enabled. */
const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
class MatCommonModule {
    constructor(highContrastModeDetector, sanityChecks, document) {
        /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
        this._hasDoneGlobalChecks = false;
        this._document = document;
        // While A11yModule also does this, we repeat it here to avoid importing A11yModule
        // in MatCommonModule.
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
        // Note that `_sanityChecks` is typed to `any`, because AoT
        // throws an error if we use the `SanityChecks` type directly.
        this._sanityChecks = sanityChecks;
        if (!this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();
            this._checkThemeIsPresent();
            this._checkCdkVersionMatch();
            this._hasDoneGlobalChecks = true;
        }
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        const win = this._document.defaultView || window;
        return typeof win === 'object' && win ? win : null;
    }
    /** Whether any sanity checks are enabled. */
    _checksAreEnabled() {
        // TODO(crisbeto): we can't use `ngDevMode` here yet, because ViewEngine apps might not support
        // it. Since these checks can have performance implications and they aren't tree shakeable
        // in their current form, we can leave the `isDevMode` check in for now.
        // tslint:disable-next-line:ban
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() && !this._isTestEnv();
    }
    /** Whether the code is running in tests. */
    _isTestEnv() {
        const window = this._getWindow();
        return window && (window.__karma__ || window.jasmine);
    }
    _checkDoctypeIsDefined() {
        const isEnabled = this._checksAreEnabled() &&
            (this._sanityChecks === true || this._sanityChecks.doctype);
        if (isEnabled && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    }
    _checkThemeIsPresent() {
        // We need to assert that the `body` is defined, because these checks run very early
        // and the `body` won't be defined if the consumer put their scripts in the `head`.
        const isDisabled = !this._checksAreEnabled() ||
            (this._sanityChecks === false || !this._sanityChecks.theme);
        if (isDisabled || !this._document.body || typeof getComputedStyle !== 'function') {
            return;
        }
        const testElement = this._document.createElement('div');
        testElement.classList.add('mat-theme-loaded-marker');
        this._document.body.appendChild(testElement);
        const computedStyle = getComputedStyle(testElement);
        // In some situations the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' +
                'components may not work as expected. For more info refer ' +
                'to the theming guide: https://material.angular.io/guide/theming');
        }
        this._document.body.removeChild(testElement);
    }
    /** Checks whether the material version matches the cdk version */
    _checkCdkVersionMatch() {
        const isEnabled = this._checksAreEnabled() &&
            (this._sanityChecks === true || this._sanityChecks.version);
        if (isEnabled && VERSION.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_1__.VERSION.full) {
            console.warn('The Angular Material version (' + VERSION.full + ') does not match ' +
                'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_1__.VERSION.full + ').\n' +
                'Please ensure the versions of these two packages exactly match.');
        }
    }
}
MatCommonModule.ɵfac = function MatCommonModule_Factory(t) { return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
MatCommonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCommonModule });
MatCommonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule] });
MatCommonModule.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MATERIAL_SANITY_CHECKS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule],
                exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MATERIAL_SANITY_CHECKS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, { imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]; }, exports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function mixinDisabled(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        get disabled() { return this._disabled; }
        set disabled(value) { this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value); }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function mixinColor(base, defaultColor) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this.defaultColor = defaultColor;
            // Set the default color that can be specified from the mixin.
            this.color = defaultColor;
        }
        get color() { return this._color; }
        set color(value) {
            const colorPalette = value || this.defaultColor;
            if (colorPalette !== this._color) {
                if (this._color) {
                    this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
                }
                if (colorPalette) {
                    this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
                }
                this._color = colorPalette;
            }
        }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function mixinDisableRipple(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /** Whether the ripple effect is disabled or not. */
        get disableRipple() { return this._disableRipple; }
        set disableRipple(value) { this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value); }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function mixinTabIndex(base, defaultTabIndex = 0) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._tabIndex = defaultTabIndex;
            this.defaultTabIndex = defaultTabIndex;
        }
        get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
        set tabIndex(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value) : this.defaultTabIndex;
        }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function mixinErrorState(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            /** Whether the component is in an error state. */
            this.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        }
        updateErrorState() {
            const oldState = this.errorState;
            const parent = this._parentFormGroup || this._parentForm;
            const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            const control = this.ngControl ? this.ngControl.control : null;
            const newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */
function mixinInitialized(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            /** Whether this directive has been marked as initialized. */
            this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(subscriber => {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (this._isInitialized) {
                    this._notifySubscriber(subscriber);
                }
                else {
                    this._pendingSubscribers.push(subscriber);
                }
            });
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * @docs-private
         */
        _markInitialized() {
            if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true;
            this._pendingSubscribers.forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        }
        /** Emits and completes the subscriber stream (should only emit once). */
        _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
        }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** InjectionToken for datepicker that can be used to override default locale code. */
const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_LOCALE', {
    providedIn: 'root',
    factory: MAT_DATE_LOCALE_FACTORY,
});
/** @docs-private */
function MAT_DATE_LOCALE_FACTORY() {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */
class DateAdapter {
    constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** A stream that emits when the locale changes. */
        this.localeChanges = this._localeChanges;
    }
    /**
     * Given a potential date object, returns that same date object if it is
     * a valid date, or `null` if it's not a valid date.
     * @param obj The object to check.
     * @returns A date or `null`.
     */
    getValidDateOrNull(obj) {
        return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
    }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param value The value to be deserialized into a date object.
     * @returns The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    }
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    sameDate(first, second) {
        if (first && second) {
            let firstValid = this.isValid(first);
            let secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-date-formats');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): Remove when we no longer support safari 9.
/** Whether the browser supports the Intl API. */
let SUPPORTS_INTL_API;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    SUPPORTS_INTL_API = typeof Intl != 'undefined';
}
catch (_a) {
    SUPPORTS_INTL_API = false;
}
/** The default month names to use if Intl API is not available. */
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
const ɵ0$1 = i => String(i + 1);
/** The default date names to use if Intl API is not available. */
const DEFAULT_DATE_NAMES = range(31, ɵ0$1);
/** The default day of the week names to use if Intl API is not available. */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */
class NativeDateAdapter extends DateAdapter {
    constructor(matDateLocale, platform) {
        super();
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */
        this.useUtcForDisplay = true;
        super.setLocale(matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    getYear(date) {
        return date.getFullYear();
    }
    getMonth(date) {
        return date.getMonth();
    }
    getDate(date) {
        return date.getDate();
    }
    getDayOfWeek(date) {
        return date.getDay();
    }
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
        }
        return DEFAULT_DATE_NAMES;
    }
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    getFirstDayOfWeek() {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    }
    getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    clone(date) {
        return new Date(date.getTime());
    }
    createDate(year, month, date) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            // Check for invalid month and date (except upper bound on date which we have to check after
            // creating the Date).
            if (month < 0 || month > 11) {
                throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
            }
            if (date < 1) {
                throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
            }
        }
        let result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    today() {
        return new Date();
    }
    parse(value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object.assign(Object.assign({}, displayFormat), { timeZone: 'utc' });
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    }
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    addCalendarMonths(date, months) {
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    }
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    toIso8601(date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                let date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    isValid(date) {
        return !isNaN(date.getTime());
    }
    invalid() {
        return new Date(NaN);
    }
    /** Creates a date but allows the month and date to overflow. */
    _createDateWithOverflow(year, month, date) {
        // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
        // To work around this we use `setFullYear` and `setHours` instead.
        const d = new Date();
        d.setFullYear(year, month, date);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    _2digit(n) {
        return ('00' + n).slice(-2);
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param str The string to strip direction characters from.
     * @returns The stripped string.
     */
    _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param date Date from which we want to get the string representation according to dtf
     * @returns A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
        // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
        // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
        const d = new Date();
        d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
        return dtf.format(d);
    }
}
NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) { return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform)); };
NativeDateAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NativeDateAdapter, factory: NativeDateAdapter.ɵfac });
NativeDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_LOCALE,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_LOCALE]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class NativeDateModule {
}
NativeDateModule.ɵfac = function NativeDateModule_Factory(t) { return new (t || NativeDateModule)(); };
NativeDateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NativeDateModule });
NativeDateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: DateAdapter, useClass: NativeDateAdapter },
    ], imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule],
                providers: [
                    { provide: DateAdapter, useClass: NativeDateAdapter },
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, { imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule]; } }); })();
const ɵ0 = MAT_NATIVE_DATE_FORMATS;
class MatNativeDateModule {
}
MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(t) { return new (t || MatNativeDateModule)(); };
MatNativeDateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatNativeDateModule });
MatNativeDateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0 }], imports: [[NativeDateModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [NativeDateModule],
                providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0 }]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, { imports: [NativeDateModule] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Error state matcher that matches when a control is invalid and dirty. */
class ShowOnDirtyErrorStateMatcher {
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    }
}
ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) { return new (t || ShowOnDirtyErrorStateMatcher)(); };
ShowOnDirtyErrorStateMatcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowOnDirtyErrorStateMatcher, factory: ShowOnDirtyErrorStateMatcher.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();
/** Provider that defines how form controls behave with regards to displaying error messages. */
class ErrorStateMatcher {
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    }
}
ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) { return new (t || ErrorStateMatcher)(); };
ErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
class MatLine {
}
MatLine.ɵfac = function MatLine_Factory(t) { return new (t || MatLine)(); };
MatLine.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatLine, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-line], [matLine]',
                host: { 'class': 'mat-line' }
            }]
    }], null, null); })();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
function setLines(lines, element, prefix = 'mat') {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(lines)).subscribe(({ length }) => {
        setClass(element, `${prefix}-2-line`, false);
        setClass(element, `${prefix}-3-line`, false);
        setClass(element, `${prefix}-multi-line`, false);
        if (length === 2 || length === 3) {
            setClass(element, `${prefix}-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `${prefix}-multi-line`, true);
        }
    });
}
/** Adds or removes a class from an element. */
function setClass(element, className, isAdd) {
    const classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
class MatLineModule {
}
MatLineModule.ɵfac = function MatLineModule_Factory(t) { return new (t || MatLineModule)(); };
MatLineModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatLineModule });
MatLineModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatCommonModule], MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [MatCommonModule],
                exports: [MatLine, MatCommonModule],
                declarations: [MatLine]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, { declarations: [MatLine], imports: [MatCommonModule], exports: [MatLine, MatCommonModule] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
    constructor(_renderer, 
    /** Reference to the ripple HTML element. */
    element, 
    /** Ripple configuration used for the ripple. */
    config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /** Current state of the ripple. */
        this.state = 3 /* HIDDEN */;
    }
    /** Fades out the ripple element. */
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
}

/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */
const defaultRippleAnimationConfig = {
    enterDuration: 450,
    exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */
const ignoreMouseEventsTimeout = 800;
/** Options that apply to all the event listeners that are bound by the ripple renderer. */
const passiveEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.normalizePassiveListenerOptions)({ passive: true });
/** Events that signal that the pointer is down. */
const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */
const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */
class RippleRenderer {
    constructor(_target, _ngZone, elementOrElementRef, platform) {
        this._target = _target;
        this._ngZone = _ngZone;
        /** Whether the pointer is currently down or not. */
        this._isPointerDown = false;
        /** Set of currently active ripple references. */
        this._activeRipples = new Set();
        /** Whether pointer-up event listeners have been registered. */
        this._pointerUpEventsRegistered = false;
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceElement)(elementOrElementRef);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param x Coordinate within the element, along the X axis at which to start the ripple.
     * @param y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param config Extra ripple options.
     */
    fadeInRipple(x, y, config = {}) {
        const containerRect = this._containerRect =
            this._containerRect || this._containerElement.getBoundingClientRect();
        const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        const offsetX = x - containerRect.left;
        const offsetY = y - containerRect.top;
        const duration = animationConfig.enterDuration;
        const ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        // If a custom color has been specified, set it as inline style. If no color is
        // set, the default color will be applied through the ripple theme styles.
        if (config.color != null) {
            ripple.style.backgroundColor = config.color;
        }
        ripple.style.transitionDuration = `${duration}ms`;
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        const rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = 0 /* FADING_IN */;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this._runTimeoutOutsideZone(() => {
            const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
            rippleRef.state = 1 /* VISIBLE */;
            // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.
            if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
                rippleRef.fadeOut();
            }
        }, duration);
        return rippleRef;
    }
    /** Fades out a ripple reference. */
    fadeOutRipple(rippleRef) {
        const wasActive = this._activeRipples.delete(rippleRef);
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        // Clear out the cached bounding rect if we have no more ripples.
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        // For ripples that are not active anymore, don't re-run the fade-out animation.
        if (!wasActive) {
            return;
        }
        const rippleEl = rippleRef.element;
        const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = '0';
        rippleRef.state = 2 /* FADING_OUT */;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this._runTimeoutOutsideZone(() => {
            rippleRef.state = 3 /* HIDDEN */;
            rippleEl.parentNode.removeChild(rippleEl);
        }, animationConfig.exitDuration);
    }
    /** Fades out all currently active ripples. */
    fadeOutAll() {
        this._activeRipples.forEach(ripple => ripple.fadeOut());
    }
    /** Fades out all currently active non-persistent ripples. */
    fadeOutAllNonPersistent() {
        this._activeRipples.forEach(ripple => {
            if (!ripple.config.persistent) {
                ripple.fadeOut();
            }
        });
    }
    /** Sets up the trigger event listeners */
    setupTriggerEvents(elementOrElementRef) {
        const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceElement)(elementOrElementRef);
        if (!element || element === this._triggerElement) {
            return;
        }
        // Remove all previously registered event listeners from the trigger element.
        this._removeTriggerEvents();
        this._triggerElement = element;
        this._registerEvents(pointerDownEvents);
    }
    /**
     * Handles all registered events.
     * @docs-private
     */
    handleEvent(event) {
        if (event.type === 'mousedown') {
            this._onMousedown(event);
        }
        else if (event.type === 'touchstart') {
            this._onTouchStart(event);
        }
        else {
            this._onPointerUp();
        }
        // If pointer-up events haven't been registered yet, do so now.
        // We do this on-demand in order to reduce the total number of event listeners
        // registered by the ripples, which speeds up the rendering time for large UIs.
        if (!this._pointerUpEventsRegistered) {
            this._registerEvents(pointerUpEvents);
            this._pointerUpEventsRegistered = true;
        }
    }
    /** Function being called whenever the trigger is being pressed using mouse. */
    _onMousedown(event) {
        // Screen readers will fire fake mouse events for space/enter. Skip launching a
        // ripple in this case for consistency with the non-screen-reader experience.
        const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeMousedownFromScreenReader)(event);
        const isSyntheticEvent = this._lastTouchStartEvent &&
            Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
        if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            this._isPointerDown = true;
            this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
        }
    }
    /** Function being called whenever the trigger is being pressed using touch. */
    _onTouchStart(event) {
        if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeTouchstartFromScreenReader)(event)) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            this._lastTouchStartEvent = Date.now();
            this._isPointerDown = true;
            // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.
            const touches = event.changedTouches;
            for (let i = 0; i < touches.length; i++) {
                this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
        }
    }
    /** Function being called whenever the trigger is being released. */
    _onPointerUp() {
        if (!this._isPointerDown) {
            return;
        }
        this._isPointerDown = false;
        // Fade-out all ripples that are visible and not persistent.
        this._activeRipples.forEach(ripple => {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
            const isVisible = ripple.state === 1 /* VISIBLE */ ||
                ripple.config.terminateOnPointerUp && ripple.state === 0 /* FADING_IN */;
            if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
            }
        });
    }
    /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */
    _runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
    /** Registers event listeners for a given list of events. */
    _registerEvents(eventTypes) {
        this._ngZone.runOutsideAngular(() => {
            eventTypes.forEach((type) => {
                this._triggerElement.addEventListener(type, this, passiveEventOptions);
            });
        });
    }
    /** Removes previously registered event listeners from the trigger element. */
    _removeTriggerEvents() {
        if (this._triggerElement) {
            pointerDownEvents.forEach((type) => {
                this._triggerElement.removeEventListener(type, this, passiveEventOptions);
            });
            if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach((type) => {
                    this._triggerElement.removeEventListener(type, this, passiveEventOptions);
                });
            }
        }
    }
}
/** Enforces a style recalculation of a DOM element by computing its styles. */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x, y, rect) {
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to specify the global ripple options. */
const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-ripple-global-options');
class MatRipple {
    constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
        this._elementRef = _elementRef;
        this._animationMode = _animationMode;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        this._disabled = false;
        /** Whether ripple directive is initialized and the input bindings are set. */
        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
    }
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        if (value) {
            this.fadeOutAllNonPersistent();
        }
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     */
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
    }
    ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    }
    ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
    }
    /** Fades out all currently showing ripple elements. */
    fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
    }
    /** Fades out all currently showing non-persistent ripple elements. */
    fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
    }
    /**
     * Ripple configuration from the directive's input values.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleConfig() {
        return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), (this._animationMode === 'NoopAnimations' ? { enterDuration: 0, exitDuration: 0 } : {})), this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
    }
    /** Sets up the trigger event listeners if ripples are enabled. */
    _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    }
    /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
    launch(configOrX, y = 0, config) {
        if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
        }
    }
}
MatRipple.ɵfac = function MatRipple_Factory(t) { return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE, 8)); };
MatRipple.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRipple, selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]], hostAttrs: [1, "mat-ripple"], hostVars: 2, hostBindings: function MatRipple_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
    } }, inputs: { radius: ["matRippleRadius", "radius"], disabled: ["matRippleDisabled", "disabled"], trigger: ["matRippleTrigger", "trigger"], color: ["matRippleColor", "color"], unbounded: ["matRippleUnbounded", "unbounded"], centered: ["matRippleCentered", "centered"], animation: ["matRippleAnimation", "animation"] }, exportAs: ["matRipple"] });
MatRipple.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE,] }] }
];
MatRipple.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matRippleColor',] }],
    unbounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matRippleUnbounded',] }],
    centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matRippleCentered',] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matRippleRadius',] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matRippleAnimation',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matRippleDisabled',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matRippleTrigger',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-ripple], [matRipple]',
                exportAs: 'matRipple',
                host: {
                    'class': 'mat-ripple',
                    '[class.mat-ripple-unbounded]': 'unbounded'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE]
            }] }]; }, { radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matRippleRadius']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matRippleDisabled']
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matRippleTrigger']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matRippleColor']
        }], unbounded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matRippleUnbounded']
        }], centered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matRippleCentered']
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matRippleAnimation']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatRippleModule {
}
MatRippleModule.ɵfac = function MatRippleModule_Factory(t) { return new (t || MatRippleModule)(); };
MatRippleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatRippleModule });
MatRippleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule], MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule],
                exports: [MatRipple, MatCommonModule],
                declarations: [MatRipple]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, { declarations: function () { return [MatRipple]; }, imports: function () { return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule]; }, exports: function () { return [MatRipple, MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
class MatPseudoCheckbox {
    constructor(_animationMode) {
        this._animationMode = _animationMode;
        /** Display state of the checkbox. */
        this.state = 'unchecked';
        /** Whether the checkbox is disabled. */
        this.disabled = false;
    }
}
MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) { return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE, 8)); };
MatPseudoCheckbox.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatPseudoCheckbox, selectors: [["mat-pseudo-checkbox"]], hostAttrs: [1, "mat-pseudo-checkbox"], hostVars: 8, hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { state: "state", disabled: "disabled" }, decls: 0, vars: 0, template: function MatPseudoCheckbox_Template(rf, ctx) { }, styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"], encapsulation: 2, changeDetection: 0 });
MatPseudoCheckbox.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE,] }] }
];
MatPseudoCheckbox.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                selector: 'mat-pseudo-checkbox',
                template: '',
                host: {
                    'class': 'mat-pseudo-checkbox',
                    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE]
            }] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatPseudoCheckboxModule {
}
MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(t) { return new (t || MatPseudoCheckboxModule)(); };
MatPseudoCheckboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatPseudoCheckboxModule });
MatPseudoCheckboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [MatCommonModule],
                exports: [MatPseudoCheckbox],
                declarations: [MatPseudoCheckbox]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, { declarations: [MatPseudoCheckbox], imports: [MatCommonModule], exports: [MatPseudoCheckbox] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide the parent component to options.
 */
const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_OPTION_PARENT_COMPONENT');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
// Boilerplate for applying mixins to MatOptgroup.
/** @docs-private */
class MatOptgroupBase {
}
const _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
let _uniqueOptgroupIdCounter = 0;
class _MatOptgroupBase extends _MatOptgroupMixinBase {
    constructor(parent) {
        var _a;
        super();
        /** Unique id for the underlying label. */
        this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
        this._inert = (_a = parent === null || parent === void 0 ? void 0 : parent.inertGroups) !== null && _a !== void 0 ? _a : false;
    }
}
_MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) { return new (t || _MatOptgroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8)); };
_MatOptgroupBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatOptgroupBase, inputs: { label: "label" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatOptgroupBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_OPTION_PARENT_COMPONENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
_MatOptgroupBase.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptgroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_OPTION_PARENT_COMPONENT]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_OPTGROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatOptgroup');
/**
 * Component that is used to group instances of `mat-option`.
 */
class MatOptgroup extends _MatOptgroupBase {
}
MatOptgroup.ɵfac = /*@__PURE__*/ function () { let ɵMatOptgroup_BaseFactory; return function MatOptgroup_Factory(t) { return (ɵMatOptgroup_BaseFactory || (ɵMatOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup)))(t || MatOptgroup); }; }();
MatOptgroup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatOptgroup, selectors: [["mat-optgroup"]], hostAttrs: [1, "mat-optgroup"], hostVars: 5, hostBindings: function MatOptgroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, exportAs: ["matOptgroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_OPTGROUP, useExisting: MatOptgroup }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 4, vars: 2, consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]], template: function MatOptgroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
    } }, styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-optgroup',
                exportAs: 'matOptgroup',
                template: "<span class=\"mat-optgroup-label\" aria-hidden=\"true\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></span>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                inputs: ['disabled'],
                host: {
                    'class': 'mat-optgroup',
                    '[attr.role]': '_inert ? null : "group"',
                    '[attr.aria-disabled]': '_inert ? null : disabled.toString()',
                    '[attr.aria-labelledby]': '_inert ? null : _labelId',
                    '[class.mat-optgroup-disabled]': 'disabled'
                },
                providers: [{ provide: MAT_OPTGROUP, useExisting: MatOptgroup }],
                styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */
class MatOptionSelectionChange {
    constructor(
    /** Reference to the option that emitted the event. */
    source, 
    /** Whether the change in the option's value was a result of a user action. */
    isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
class _MatOptionBase {
    constructor(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /** The unique ID of the option. */
        this.id = `mat-option-${_uniqueIdCounter++}`;
        /** Event emitted when the option is selected or deselected. */
        // tslint:disable-next-line:no-output-on-prefix
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the state of the option changes and any parents have to be notified. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    /** Whether the wrapping component is in multiple selection mode. */
    get multiple() { return this._parent && this._parent.multiple; }
    /** Whether or not the option is currently selected. */
    get selected() { return this._selected; }
    /** Whether the option is disabled. */
    get disabled() { return (this.group && this.group.disabled) || this._disabled; }
    set disabled(value) { this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value); }
    /** Whether ripples for the option are disabled. */
    get disableRipple() { return this._parent && this._parent.disableRipple; }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     */
    get active() {
        return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     */
    get viewValue() {
        // TODO(kara): Add input property alternative for node envs.
        return (this._getHostElement().textContent || '').trim();
    }
    /** Selects the option. */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /** Deselects the option. */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /** Sets focus onto this option. */
    focus(_origin, options) {
        // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
        // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
        const element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus(options);
        }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles() {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles() {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
        return this.viewValue;
    }
    /** Ensures the option is selected when activated from the keyboard. */
    _handleKeydown(event) {
        if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.SPACE) && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.hasModifierKey)(event)) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    _selectViaInteraction() {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    }
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     */
    _getAriaSelected() {
        return this.selected || (this.multiple ? false : null);
    }
    /** Returns the correct tabindex for the option depending on disabled state. */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /** Gets the host DOM element. */
    _getHostElement() {
        return this._element.nativeElement;
    }
    ngAfterViewChecked() {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
            const viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;
                this._stateChanges.next();
            }
        }
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /** Emits the selection change event. */
    _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
}
_MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) { return new (t || _MatOptionBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatOptgroupBase)); };
_MatOptionBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatOptionBase, inputs: { id: "id", disabled: "disabled", value: "value" }, outputs: { onSelectionChange: "onSelectionChange" } });
_MatOptionBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined },
    { type: _MatOptgroupBase }
];
_MatOptionBase.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onSelectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptionBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined }, { type: _MatOptgroupBase }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Single option inside of a `<mat-select>` element.
 */
class MatOption extends _MatOptionBase {
    constructor(element, changeDetectorRef, parent, group) {
        super(element, changeDetectorRef, parent, group);
    }
}
MatOption.ɵfac = function MatOption_Factory(t) { return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8)); };
MatOption.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatOption, selectors: [["mat-option"]], hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"], hostVars: 12, hostBindings: function MatOption_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() { return ctx._selectViaInteraction(); })("keydown", function MatOption_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    } }, exportAs: ["matOption"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 5, vars: 4, consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]], template: function MatOption_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, MatRipple, MatPseudoCheckbox], styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
MatOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_OPTION_PARENT_COMPONENT,] }] },
    { type: MatOptgroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_OPTGROUP,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-option',
                exportAs: 'matOption',
                host: {
                    'role': 'option',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[class.mat-selected]': 'selected',
                    '[class.mat-option-multiple]': 'multiple',
                    '[class.mat-active]': 'active',
                    '[id]': 'id',
                    '[attr.aria-selected]': '_getAriaSelected()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[class.mat-option-disabled]': 'disabled',
                    '(click)': '_selectViaInteraction()',
                    '(keydown)': '_handleKeydown($event)',
                    'class': 'mat-option mat-focus-indicator'
                },
                template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n<span class=\"cdk-visually-hidden\" *ngIf=\"group && group._inert\">({{ group.label }})</span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_OPTION_PARENT_COMPONENT]
            }] }, { type: MatOptgroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_OPTGROUP]
            }] }]; }, null); })();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        let optionsArray = options.toArray();
        let groups = optionGroups.toArray();
        let groupCounter = 0;
        for (let i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatOptionModule {
}
MatOptionModule.ɵfac = function MatOptionModule_Factory(t) { return new (t || MatOptionModule)(); };
MatOptionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatOptionModule });
MatOptionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule],
                exports: [MatOption, MatOptgroup],
                declarations: [MatOption, MatOptgroup]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, { declarations: function () { return [MatOption, MatOptgroup]; }, imports: function () { return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule]; }, exports: function () { return [MatOption, MatOptgroup]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=core.js.map

/***/ }),

/***/ 6627:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON_REGISTRY_PROVIDER": function() { return /* binding */ ICON_REGISTRY_PROVIDER; },
/* harmony export */   "ICON_REGISTRY_PROVIDER_FACTORY": function() { return /* binding */ ICON_REGISTRY_PROVIDER_FACTORY; },
/* harmony export */   "MAT_ICON_LOCATION": function() { return /* binding */ MAT_ICON_LOCATION; },
/* harmony export */   "MAT_ICON_LOCATION_FACTORY": function() { return /* binding */ MAT_ICON_LOCATION_FACTORY; },
/* harmony export */   "MatIcon": function() { return /* binding */ MatIcon; },
/* harmony export */   "MatIconModule": function() { return /* binding */ MatIconModule; },
/* harmony export */   "MatIconRegistry": function() { return /* binding */ MatIconRegistry; },
/* harmony export */   "getMatIconFailedToSanitizeLiteralError": function() { return /* binding */ getMatIconFailedToSanitizeLiteralError; },
/* harmony export */   "getMatIconFailedToSanitizeUrlError": function() { return /* binding */ getMatIconFailedToSanitizeUrlError; },
/* harmony export */   "getMatIconNameNotFoundError": function() { return /* binding */ getMatIconNameNotFoundError; },
/* harmony export */   "getMatIconNoHttpProviderError": function() { return /* binding */ getMatIconNoHttpProviderError; },
/* harmony export */   "ɵ0": function() { return /* binding */ ɵ0; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 9075);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */




const _c0 = ["*"];
function getMatIconNameNotFoundError(iconName) {
    return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */
function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeUrlError(url) {
    return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` +
        `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` +
        `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */
class SvgIconConfig {
    constructor(url, svgText, options) {
        this.url = url;
        this.svgText = svgText;
        this.options = options;
    }
}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
class MatIconRegistry {
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /** Cache for icons loaded by direct URLs. */
        this._cachedIconsByUrl = new Map();
        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
        this._inProgressUrlFetches = new Map();
        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
        this._fontCssClassesByAlias = new Map();
        /** Registered icon resolver functions. */
        this._resolvers = [];
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon resolver function with the registry. The function will be invoked with the
     * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
     * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
     * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
     * will be invoked in the order in which they have been registered.
     * @param resolver Resolver function to be registered.
     */
    addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);
        return this;
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);
        // TODO: add an ngDevMode check
        if (!cleanLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    addSvgIconSet(url, options) {
        return this.addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteral(literal, options) {
        return this.addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    addSvgIconSetInNamespace(namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);
        if (!cleanLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */
    registerFontClassAlias(alias, className = alias) {
        this._fontCssClassesByAlias.set(alias, className);
        return this;
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */
    setDefaultFontSetClass(className) {
        this._defaultFontSetClass = className;
        return this;
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    getDefaultFontSetClass() {
        return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    getSvgIconFromUrl(safeUrl) {
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svg => this._cachedIconsByUrl.set(url, svg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    getNamedSvgIcon(name, namespace = '') {
        const key = iconKey(namespace, name);
        let config = this._svgIconConfigs.get(key);
        // Return (copy of) cached icon if possible.
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // Otherwise try to resolve the config from one of the resolver functions.
        config = this._getIconConfigFromResolvers(namespace, name);
        if (config) {
            this._svgIconConfigs.set(key, config);
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(getMatIconNameNotFoundError(key));
    }
    ngOnDestroy() {
        this._resolvers = [];
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    _getSvgFromConfig(config) {
        if (config.svgText) {
            // We already have the SVG element for this icon, return a copy.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(this._svgElementFromConfig(config)));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
        }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        const iconSetFetchRequests = iconSetConfigs
            .filter(iconSetConfig => !iconSetConfig.svgText)
            .map(iconSetConfig => {
            return this._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
                const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
            }));
        });
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(iconSetFetchRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            // TODO: add an ngDevMode check
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        }));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
            const config = iconSetConfigs[i];
            // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
            // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
            // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
            // some of the parsing.
            if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                const svg = this._svgElementFromConfig(config);
                const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    _loadSvgIconFromConfig(config) {
        return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this._svgElementFromConfig(config)));
    }
    /**
     * Loads the content of the icon set URL specified in the
     * SvgIconConfig and attaches it to the config.
     */
    _loadSvgIconSetFromConfig(config) {
        if (config.svgText) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
        }
        return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText));
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractSvgIconFromSet(iconSet, iconName, options) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        const iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(iconElement, options);
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        const svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     */
    _svgElementFromString(str) {
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg');
        // TODO: add an ngDevMode check
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    _toSvgElement(element) {
        const svg = this._svgElementFromString('<svg></svg>');
        const attributes = element.attributes;
        // Copy over all the attributes from the `symbol` to the new SVG, except the id.
        for (let i = 0; i < attributes.length; i++) {
            const { name, value } = attributes[i];
            if (name !== 'id') {
                svg.setAttribute(name, value);
            }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    _setSvgAttributes(svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
        }
        return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    _fetchIcon(iconConfig) {
        var _a;
        const { url: safeUrl, options } = iconConfig;
        const withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        // TODO: add an ngDevMode check
        if (safeUrl == null) {
            throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);
        // TODO: add an ngDevMode check
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        const req = this._httpClient.get(url, { responseType: 'text', withCredentials }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._inProgressUrlFetches.delete(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
        this._inProgressUrlFetches.set(url, req);
        return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */
    _addSvgIconSetConfig(namespace, config) {
        const configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
    }
    /** Parses a config's text into an SVG element. */
    _svgElementFromConfig(config) {
        if (!config.svgElement) {
            const svg = this._svgElementFromString(config.svgText);
            this._setSvgAttributes(svg, config.options);
            config.svgElement = svg;
        }
        return config.svgElement;
    }
    /** Tries to create an icon config through the registered resolver functions. */
    _getIconConfigFromResolvers(namespace, name) {
        for (let i = 0; i < this._resolvers.length; i++) {
            const result = this._resolvers[i](name, namespace);
            if (result) {
                return isSafeUrlWithOptions(result) ?
                    new SvgIconConfig(result.url, null, result.options) :
                    new SvgIconConfig(result, null);
            }
        }
        return undefined;
    }
}
MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) { return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler)); };
MatIconRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler)); }, token: MatIconRegistry, providedIn: "root" });
MatIconRegistry.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }]; }, null); })();
/** @docs-private */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */
const ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatIconRegistry],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler,
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
    return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}
function isSafeUrlWithOptions(value) {
    return !!(value.url && value.options);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.
/** @docs-private */
class MatIconBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatIconMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinColor)(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-icon-location', {
    providedIn: 'root',
    factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */
function MAT_ICON_LOCATION_FACTORY() {
    const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => _location ? (_location.pathname + _location.search) : ''
    };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */
const funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke'
];
const ɵ0 = attr => `[${attr}]`;
/** Selector that can be used to find all elements that are using a `FuncIRI`. */
const funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
class MatIcon extends _MatIconMixinBase {
    constructor(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        super(elementRef);
        this._iconRegistry = _iconRegistry;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._inline = false;
        /** Subscription to the current in-progress SVG icon request. */
        this._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    /**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     */
    get inline() {
        return this._inline;
    }
    set inline(inline) {
        this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(inline);
    }
    /** Name of the icon in the SVG icon set. */
    get svgIcon() { return this._svgIcon; }
    set svgIcon(value) {
        if (value !== this._svgIcon) {
            if (value) {
                this._updateSvgIcon(value);
            }
            else if (this._svgIcon) {
                this._clearSvgElement();
            }
            this._svgIcon = value;
        }
    }
    /** Font set that the icon is a part of. */
    get fontSet() { return this._fontSet; }
    set fontSet(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontSet) {
            this._fontSet = newValue;
            this._updateFontIconClasses();
        }
    }
    /** Name of an icon within a font set. */
    get fontIcon() { return this._fontIcon; }
    set fontIcon(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontIcon) {
            this._fontIcon = newValue;
            this._updateFontIconClasses();
        }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return parts;
            default: throw Error(`Invalid icon name: "${iconName}"`); // TODO: add an ngDevMode check
        }
    }
    ngOnInit() {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        this._updateFontIconClasses();
    }
    ngAfterViewChecked() {
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && cachedElements.size) {
            const newPath = this._location.getPathname();
            // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.
            if (newPath !== this._previousPath) {
                this._previousPath = newPath;
                this._prependPathToReferences(newPath);
            }
        }
    }
    ngOnDestroy() {
        this._currentIconFetch.unsubscribe();
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
    }
    _usingFontIcon() {
        return !this.svgIcon;
    }
    _setSvgElement(svg) {
        this._clearSvgElement();
        // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
        const styleTags = svg.querySelectorAll('style');
        for (let i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
        }
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
    }
    _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            const child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    }
    _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
            return;
        }
        const elem = this._elementRef.nativeElement;
        const fontSetClass = this.fontSet ?
            this._iconRegistry.classNameForFontAlias(this.fontSet) :
            this._iconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
            }
            if (fontSetClass) {
                elem.classList.add(fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
            }
            if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */
    _cleanupFontValue(value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((attrs, element) => {
                attrs.forEach(attr => {
                    element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
                });
            });
        }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
            funcIriAttributes.forEach(attr => {
                const elementWithReference = elementsWithFuncIri[i];
                const value = elementWithReference.getAttribute(attr);
                const match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    let attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    attributes.push({ name: attr, value: match[1] });
                }
            });
        }
    }
    /** Sets a new SVG icon with a particular name. */
    _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
            const [namespace, iconName] = this._splitIconName(rawName);
            if (namespace) {
                this._svgNamespace = namespace;
            }
            if (iconName) {
                this._svgName = iconName;
            }
            this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1))
                .subscribe(svg => this._setSvgElement(svg), (err) => {
                const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
            });
        }
    }
}
MatIcon.ɵfac = function MatIcon_Factory(t) { return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler)); };
MatIcon.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatIcon, selectors: [["mat-icon"]], hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"], hostVars: 7, hostBindings: function MatIcon_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
    } }, inputs: { color: "color", inline: "inline", svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, exportAs: ["matIcon"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatIcon_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"], encapsulation: 2, changeDetection: 0 });
MatIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: MatIconRegistry },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['aria-hidden',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_ICON_LOCATION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }
];
MatIcon.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                template: '<ng-content></ng-content>',
                selector: 'mat-icon',
                exportAs: 'matIcon',
                inputs: ['color'],
                host: {
                    'role': 'img',
                    'class': 'mat-icon notranslate',
                    '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
                    '[attr.data-mat-icon-name]': '_svgName || fontIcon',
                    '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
                    '[class.mat-icon-inline]': 'inline',
                    '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: MatIconRegistry }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['aria-hidden']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_ICON_LOCATION]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], svgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fontSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fontIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatIconModule {
}
MatIconModule.ɵfac = function MatIconModule_Factory(t) { return new (t || MatIconModule)(); };
MatIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatIconModule });
MatIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
                exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
                declarations: [MatIcon]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatIconModule, { declarations: function () { return [MatIcon]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]; }, exports: function () { return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=icon.js.map

/***/ }),

/***/ 3935:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_MENU_CONTENT": function() { return /* binding */ MAT_MENU_CONTENT; },
/* harmony export */   "MAT_MENU_DEFAULT_OPTIONS": function() { return /* binding */ MAT_MENU_DEFAULT_OPTIONS; },
/* harmony export */   "MAT_MENU_PANEL": function() { return /* binding */ MAT_MENU_PANEL; },
/* harmony export */   "MAT_MENU_SCROLL_STRATEGY": function() { return /* binding */ MAT_MENU_SCROLL_STRATEGY; },
/* harmony export */   "MatMenu": function() { return /* binding */ MatMenu; },
/* harmony export */   "MatMenuContent": function() { return /* binding */ MatMenuContent; },
/* harmony export */   "MatMenuItem": function() { return /* binding */ MatMenuItem; },
/* harmony export */   "MatMenuModule": function() { return /* binding */ MatMenuModule; },
/* harmony export */   "MatMenuTrigger": function() { return /* binding */ MatMenuTrigger; },
/* harmony export */   "_MatMenuBase": function() { return /* binding */ _MatMenuBase; },
/* harmony export */   "_MatMenuDirectivesModule": function() { return /* binding */ _MatMenuDirectivesModule; },
/* harmony export */   "fadeInItems": function() { return /* binding */ fadeInItems; },
/* harmony export */   "matMenuAnimations": function() { return /* binding */ matMenuAnimations; },
/* harmony export */   "transformMenu": function() { return /* binding */ transformMenu; },
/* harmony export */   "ɵangular_material_src_material_menu_menu_a": function() { return /* binding */ MAT_MENU_DEFAULT_OPTIONS_FACTORY; },
/* harmony export */   "ɵangular_material_src_material_menu_menu_b": function() { return /* binding */ MAT_MENU_SCROLL_STRATEGY_FACTORY; },
/* harmony export */   "ɵangular_material_src_material_menu_menu_c": function() { return /* binding */ MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 8571);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 5792);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1386);















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 */







const _c0 = ["mat-menu-item", ""];
const _c1 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._handleKeydown($event); })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closed.emit("click"); })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4._onAnimationStart($event); })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5._onAnimationDone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
} }
const matMenuAnimations = {
    /**
     * This animation controls the menu panel's entry and exit from the page.
     *
     * When the menu panel is added to the DOM, it scales in and fades in its border.
     *
     * When the menu panel is removed from the DOM, it simply fades out after a brief
     * delay to display the ripple.
     */
    transformMenu: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformMenu', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
            opacity: 0,
            transform: 'scale(0.8)'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
            opacity: 1,
            transform: 'scale(1)'
        }))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 0 })))
    ]),
    /**
     * This animation fades in the background color and content of the menu panel
     * after its containing element is scaled in.
     */
    fadeInItems: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 1 })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const transformMenu = matMenuAnimations.transformMenu;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatMenuContent`. It serves
 * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatMenuContent');
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
class MatMenuContent {
    constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /** Emits when the menu content has been attached. */
        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    attach(context = {}) {
        if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.DomPortalOutlet(this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        const element = this._template.elementRef.nativeElement;
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        element.parentNode.insertBefore(this._outlet.outletElement, element);
        // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
        // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
        // by Angular. This causes the `@ContentChildren` for menu items within the menu to
        // not be updated by Angular. By explicitly marking for check here, we tell Angular that
        // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
        // @breaking-change 9.0.0 Make change detector ref required
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
        this._portal.attach(this._outlet, context);
        this._attached.next();
    }
    /**
     * Detaches the content.
     * @docs-private
     */
    detach() {
        if (this._portal.isAttached) {
            this._portal.detach();
        }
    }
    ngOnDestroy() {
        if (this._outlet) {
            this._outlet.dispose();
        }
    }
}
MatMenuContent.ɵfac = function MatMenuContent_Factory(t) { return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatMenuContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatMenuContent, selectors: [["ng-template", "matMenuContent", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_MENU_CONTENT, useExisting: MatMenuContent }])] });
MatMenuContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[matMenuContent]',
                providers: [{ provide: MAT_MENU_CONTENT, useExisting: MatMenuContent }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
 * @docs-private
 */
function throwMatMenuMissingError() {
    throw Error(`matMenuTriggerFor: must pass in an mat-menu instance.

    Example:
      <mat-menu #menu="matMenu"></mat-menu>
      <button [matMenuTriggerFor]="menu"></button>`);
}
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
function throwMatMenuInvalidPositionX() {
    throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
function throwMatMenuInvalidPositionY() {
    throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */
function throwMatMenuRecursiveError() {
    throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` +
        `not a parent of the trigger or move the trigger outside of the menu.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */
const MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_MENU_PANEL');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatMenuItem.
/** @docs-private */
class MatMenuItemBase {
}
const _MatMenuItemMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisabled)(MatMenuItemBase));
/**
 * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
 */
class MatMenuItem extends _MatMenuItemMixinBase {
    constructor(_elementRef, 
    /**
     * @deprecated `_document` parameter is no longer being used and will be removed.
     * @breaking-change 12.0.0
     */
    _document, _focusMonitor, _parentMenu) {
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        super();
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this._parentMenu = _parentMenu;
        /** ARIA role for the menu item. */
        this.role = 'menuitem';
        /** Stream that emits when the menu item is hovered. */
        this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Stream that emits when the menu item is focused. */
        this._focused = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Whether the menu item is highlighted. */
        this._highlighted = false;
        /** Whether the menu item acts as a trigger for a sub-menu. */
        this._triggersSubmenu = false;
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(this);
        }
    }
    /** Focuses the menu item. */
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
        this._focused.next(this);
    }
    ngAfterViewInit() {
        if (this._focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            this._focusMonitor.monitor(this._elementRef, false);
        }
    }
    ngOnDestroy() {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
        this._focused.complete();
    }
    /** Used to set the `tabindex`. */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /** Returns the host DOM element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _checkDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleMouseEnter() {
        this._hovered.next(this);
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
        var _a, _b;
        const clone = this._elementRef.nativeElement.cloneNode(true);
        const icons = clone.querySelectorAll('mat-icon, .material-icons');
        // Strip away icons so they don't show up in the text.
        for (let i = 0; i < icons.length; i++) {
            const icon = icons[i];
            (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
        }
        return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
    }
}
MatMenuItem.ɵfac = function MatMenuItem_Factory(t) { return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8)); };
MatMenuItem.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMenuItem, selectors: [["", "mat-menu-item", ""]], hostAttrs: [1, "mat-focus-indicator"], hostVars: 10, hostBindings: function MatMenuItem_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) { return ctx._checkDisabled($event); })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() { return ctx._handleMouseEnter(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", role: "role" }, exportAs: ["matMenuItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]], template: function MatMenuItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple], encapsulation: 2, changeDetection: 0 });
MatMenuItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatMenuItem.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _checkDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click', ['$event'],] }],
    _handleMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseenter',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[mat-menu-item]',
                exportAs: 'matMenuItem',
                inputs: ['disabled', 'disableRipple'],
                host: {
                    '[attr.role]': 'role',
                    '[class.mat-menu-item]': 'true',
                    '[class.mat-menu-item-highlighted]': '_highlighted',
                    '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.disabled]': 'disabled || null',
                    'class': 'mat-focus-indicator'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_PANEL]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], 
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _checkDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event']]
        }], 
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-menu`. */
const MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/**
 * Start elevation for the menu panel.
 * @docs-private
 */
const MAT_MENU_BASE_ELEVATION = 4;
let menuPanelUid = 0;
/** Base class with all of the `MatMenu` functionality. */
class _MatMenuBase {
    constructor(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /** Only the direct descendant menu items. */
        this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
        /** Subscription to tab events on the menu panel */
        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        /** Config object to be passed into the menu's ngClass */
        this._classList = {};
        /** Current state of the panel animation. */
        this._panelAnimationState = 'void';
        /** Emits whenever an animation on the menu completes. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Class or list of classes to be added to the overlay panel. */
        this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
        /** Class to be added to the backdrop element. */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /** Event emitted when the menu is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * @breaking-change 8.0.0
         */
        this.close = this.closed;
        this.panelId = `mat-menu-panel-${menuPanelUid++}`;
    }
    /** Position of the menu in the X axis. */
    get xPosition() { return this._xPosition; }
    set xPosition(value) {
        if (value !== 'before' && value !== 'after' &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuInvalidPositionX();
        }
        this._xPosition = value;
        this.setPositionClasses();
    }
    /** Position of the menu in the Y axis. */
    get yPosition() { return this._yPosition; }
    set yPosition(value) {
        if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuInvalidPositionY();
        }
        this._yPosition = value;
        this.setPositionClasses();
    }
    /** Whether the menu should overlap its trigger. */
    get overlapTrigger() { return this._overlapTrigger; }
    set overlapTrigger(value) {
        this._overlapTrigger = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceBooleanProperty)(value);
    }
    /** Whether the menu has a backdrop. */
    get hasBackdrop() { return this._hasBackdrop; }
    set hasBackdrop(value) {
        this._hasBackdrop = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceBooleanProperty)(value);
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    set panelClass(classes) {
        const previousPanelClass = this._previousPanelClass;
        if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(' ').forEach((className) => {
                this._classList[className] = false;
            });
        }
        this._previousPanelClass = classes;
        if (classes && classes.length) {
            classes.split(' ').forEach((className) => {
                this._classList[className] = true;
            });
            this._elementRef.nativeElement.className = '';
        }
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @deprecated Use `panelClass` instead.
     * @breaking-change 8.0.0
     */
    get classList() { return this.panelClass; }
    set classList(classes) { this.panelClass = classes; }
    ngOnInit() {
        this.setPositionClasses();
    }
    ngAfterContentInit() {
        this._updateDirectDescendants();
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusKeyManager(this._directDescendantItems)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd();
        this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
        // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
        // change back to the key manager. Note that we don't need to unsubscribe here because _focused
        // is internal and we know that it gets completed on destroy.
        this._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...items.map((item) => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
    }
    ngOnDestroy() {
        this._directDescendantItems.destroy();
        this._tabSubscription.unsubscribe();
        this.closed.complete();
    }
    /** Stream that emits whenever the hovered menu item changes. */
    _hovered() {
        // Coerce the `changes` property because Angular types it as `Observable<any>`
        const itemChanges = this._directDescendantItems.changes;
        return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...items.map((item) => item._hovered))));
    }
    /*
     * Registers a menu item with the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    addItem(_item) { }
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    removeItem(_item) { }
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ESCAPE:
                if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.hasModifierKey)(event)) {
                    event.preventDefault();
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.LEFT_ARROW:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.RIGHT_ARROW:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.DOWN_ARROW) {
                    manager.setFocusOrigin('keyboard');
                }
                manager.onKeydown(event);
        }
    }
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    focusFirstItem(origin = 'program') {
        // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
        if (this.lazyContent) {
            this._ngZone.onStable
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1))
                .subscribe(() => this._focusFirstItem(origin));
        }
        else {
            this._focusFirstItem(origin);
        }
    }
    /**
     * Actual implementation that focuses the first item. Needs to be separated
     * out so we don't repeat the same logic in the public `focusFirstItem` method.
     */
    _focusFirstItem(origin) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        // If there's no active item at this point, it means that all the items are disabled.
        // Move focus to the menu panel so keyboard events like Escape still work. Also this will
        // give _some_ feedback to screen readers.
        if (!manager.activeItem && this._directDescendantItems.length) {
            let element = this._directDescendantItems.first._getHostElement().parentElement;
            // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
            // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
            // because the panel is inside an `ng-template`. We work around it by starting from one of
            // the items and walking up the DOM.
            while (element) {
                if (element.getAttribute('role') === 'menu') {
                    element.focus();
                    break;
                }
                else {
                    element = element.parentElement;
                }
            }
        }
    }
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    resetActiveItem() {
        this._keyManager.setActiveItem(-1);
    }
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    setElevation(depth) {
        // The elevation starts at the base and increases by one for each level.
        // Capped at 24 because that's the maximum elevation defined in the Material design spec.
        const elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
        const newElevation = `mat-elevation-z${elevation}`;
        const customElevation = Object.keys(this._classList).find(c => c.startsWith('mat-elevation-z'));
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    }
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
        const classes = this._classList;
        classes['mat-menu-before'] = posX === 'before';
        classes['mat-menu-after'] = posX === 'after';
        classes['mat-menu-above'] = posY === 'above';
        classes['mat-menu-below'] = posY === 'below';
    }
    /** Starts the enter animation. */
    _startAnimation() {
        // @breaking-change 8.0.0 Combine with _resetAnimation.
        this._panelAnimationState = 'enter';
    }
    /** Resets the panel animation to its initial state. */
    _resetAnimation() {
        // @breaking-change 8.0.0 Combine with _startAnimation.
        this._panelAnimationState = 'void';
    }
    /** Callback that is invoked when the panel animation completes. */
    _onAnimationDone(event) {
        this._animationDone.next(event);
        this._isAnimating = false;
    }
    _onAnimationStart(event) {
        this._isAnimating = true;
        // Scroll the content element to the top as soon as the animation starts. This is necessary,
        // because we move focus to the first item while it's still being animated, which can throw
        // the browser off when it determines the scroll position. Alternatively we can move focus
        // when the animation is done, however moving focus asynchronously will interrupt screen
        // readers which are in the process of reading out the menu already. We take the `element`
        // from the `event` since we can't use a `ViewChild` to access the pane.
        if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
        }
    }
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     */
    _updateDirectDescendants() {
        this._allItems.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._allItems))
            .subscribe((items) => {
            this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
            this._directDescendantItems.notifyOnChanges();
        });
    }
}
_MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) { return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS)); };
_MatMenuBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatMenuBase, contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, viewQuery: function _MatMenuBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, inputs: { backdropClass: "backdropClass", xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: "overlapTrigger", hasBackdrop: "hasBackdrop", panelClass: ["class", "panelClass"], classList: "classList", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { closed: "closed", close: "close" } });
_MatMenuBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
_MatMenuBase.propDecorators = {
    _allItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatMenuItem, { descendants: true },] }],
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-describedby',] }],
    xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatMenuItem, { descendants: false },] }],
    lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_MENU_CONTENT,] }],
    overlapTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['class',] }],
    classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatMenuBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, { backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['class']
        }], classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _allItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatMenuItem, { descendants: true }]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-describedby']
        }], templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatMenuItem, { descendants: false }]
        }], lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_MENU_CONTENT]
        }] }); })();
/** @docs-public MatMenu */
class MatMenu extends _MatMenuBase {
    constructor(elementRef, ngZone, defaultOptions) {
        super(elementRef, ngZone, defaultOptions);
    }
}
MatMenu.ɵfac = function MatMenu_Factory(t) { return new (t || MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS)); };
MatMenu.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMenu, selectors: [["mat-menu"]], hostVars: 3, hostBindings: function MatMenu_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
    } }, exportAs: ["matMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: MAT_MENU_PANEL, useExisting: MatMenu },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]], template: function MatMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, data: { animation: [
            matMenuAnimations.transformMenu,
            matMenuAnimations.fadeInItems
        ] }, changeDetection: 0 });
MatMenu.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-menu',
                template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                exportAs: 'matMenu',
                host: {
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.aria-describedby]': 'null'
                },
                animations: [
                    matMenuAnimations.transformMenu,
                    matMenuAnimations.fadeInItems
                ],
                providers: [
                    { provide: MAT_MENU_PANEL, useExisting: MatMenu },
                ],
                styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that determines the scroll handling while the menu is open. */
const MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-scroll-strategy');
/** @docs-private */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/** Default top padding of the menu panel. */
const MENU_PANEL_TOP_PADDING = 8;
/** Options for binding a passive event listener. */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__.normalizePassiveListenerOptions)({ passive: true });
// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/** Directive applied to an element that should trigger a `mat-menu`. */
class MatMenuTrigger {
    constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, 
    // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
    // tslint:disable-next-line: lightweight-tokens
    _menuItemInstance, _dir, 
    // TODO(crisbeto): make the _focusMonitor required when doing breaking changes.
    // @breaking-change 8.0.0
    _focusMonitor) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */
        this._handleTouchStart = (event) => {
            if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.isFakeTouchstartFromScreenReader)(event)) {
                this._openedBy = 'touch';
            }
        };
        // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedBy = undefined;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */
        this.restoreFocus = true;
        /** Event emitted when the associated menu is opened. */
        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * @breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuOpen = this.menuOpened;
        /** Event emitted when the associated menu is closed. */
        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * @breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuClose = this.menuClosed;
        this._scrollStrategy = scrollStrategy;
        this._parentMaterialMenu = parentMenu instanceof _MatMenuBase ? parentMenu : undefined;
        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
    }
    /**
     * @deprecated
     * @breaking-change 8.0.0
     */
    get _deprecatedMatMenuTriggerFor() { return this.menu; }
    set _deprecatedMatMenuTriggerFor(v) {
        this.menu = v;
    }
    /** References the menu instance that the trigger is associated with. */
    get menu() { return this._menu; }
    set menu(menu) {
        if (menu === this._menu) {
            return;
        }
        this._menu = menu;
        this._menuCloseSubscription.unsubscribe();
        if (menu) {
            if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuRecursiveError();
            }
            this._menuCloseSubscription = menu.close.subscribe((reason) => {
                this._destroyMenu(reason);
                // If a click closed the menu, we should close the entire chain of nested menus.
                if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
                    this._parentMaterialMenu.closed.emit(reason);
                }
            });
        }
    }
    ngAfterContentInit() {
        this._checkMenu();
        this._handleHover();
    }
    ngOnDestroy() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        this._menuCloseSubscription.unsubscribe();
        this._closingActionsSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
    }
    /** Whether the menu is open. */
    get menuOpen() {
        return this._menuOpen;
    }
    /** The text direction of the containing app. */
    get dir() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the menu triggers a sub-menu or a top-level one. */
    triggersSubmenu() {
        return !!(this._menuItemInstance && this._parentMaterialMenu);
    }
    /** Toggles the menu between the open and closed states. */
    toggleMenu() {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    }
    /** Opens the menu. */
    openMenu() {
        if (this._menuOpen) {
            return;
        }
        this._checkMenu();
        const overlayRef = this._createOverlay();
        const overlayConfig = overlayRef.getConfig();
        this._setPosition(overlayConfig.positionStrategy);
        overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() :
            this.menu.hasBackdrop;
        overlayRef.attach(this._getPortal());
        if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
        }
        this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
        this._initMenu();
        if (this.menu instanceof _MatMenuBase) {
            this.menu._startAnimation();
        }
    }
    /** Closes the menu. */
    closeMenu() {
        this.menu.close.emit();
    }
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._element, origin, options);
        }
        else {
            this._element.nativeElement.focus(options);
        }
    }
    /**
     * Updates the position of the menu to ensure that it fits all options within the viewport.
     */
    updatePosition() {
        var _a;
        (_a = this._overlayRef) === null || _a === void 0 ? void 0 : _a.updatePosition();
    }
    /** Closes the menu and does the necessary cleanup. */
    _destroyMenu(reason) {
        if (!this._overlayRef || !this.menuOpen) {
            return;
        }
        const menu = this.menu;
        this._closingActionsSubscription.unsubscribe();
        this._overlayRef.detach();
        // Always restore focus if the user is navigating using the keyboard or the menu was opened
        // programmatically. We don't restore for non-root triggers, because it can prevent focus
        // from making it back to the root trigger when closing a long chain of menus by clicking
        // on the backdrop.
        if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this.triggersSubmenu())) {
            this.focus(this._openedBy);
        }
        this._openedBy = undefined;
        if (menu instanceof _MatMenuBase) {
            menu._resetAnimation();
            if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(event => event.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), 
                // Interrupt if the content got re-attached.
                (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(menu.lazyContent._attached))
                    .subscribe({
                    next: () => menu.lazyContent.detach(),
                    // No matter whether the content got re-attached, reset the menu.
                    complete: () => this._setIsMenuOpen(false)
                });
            }
            else {
                this._setIsMenuOpen(false);
            }
        }
        else {
            this._setIsMenuOpen(false);
            if (menu.lazyContent) {
                menu.lazyContent.detach();
            }
        }
    }
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    _initMenu() {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this.menu.focusFirstItem(this._openedBy || 'program');
        this._setIsMenuOpen(true);
    }
    /** Updates the menu elevation based on the amount of parent menus that it has. */
    _setMenuElevation() {
        if (this.menu.setElevation) {
            let depth = 0;
            let parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    }
    // set state rather than toggle to support triggers sharing a menu
    _setIsMenuOpen(isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    }
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     */
    _checkMenu() {
        if (!this.menu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuMissingError();
        }
    }
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    _createOverlay() {
        if (!this._overlayRef) {
            const config = this._getOverlayConfig();
            this._subscribeToPositions(config.positionStrategy);
            this._overlayRef = this._overlay.create(config);
            // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.
            this._overlayRef.keydownEvents().subscribe();
        }
        return this._overlayRef;
    }
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayConfig
     */
    _getOverlayConfig() {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayConfig({
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withGrowAfterOpen()
                .withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            panelClass: this.menu.overlayPanelClass,
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
        });
    }
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    _subscribeToPositions(position) {
        if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(change => {
                const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
                this.menu.setPositionClasses(posX, posY);
            });
        }
    }
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param positionStrategy Strategy whose position to update.
     */
    _setPosition(positionStrategy) {
        let [originX, originFallbackX] = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        let [overlayY, overlayFallbackY] = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        let [overlayX, overlayFallbackX] = [originX, originFallbackX];
        let offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        positionStrategy.withPositions([
            { originX, originY, overlayX, overlayY, offsetY },
            { originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY, offsetY },
            {
                originX,
                originY: originFallbackY,
                overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            },
            {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }
        ]);
    }
    /** Returns a stream that emits whenever an action that should close the menu occurs. */
    _menuClosingActions() {
        const backdrop = this._overlayRef.backdropClick();
        const detachments = this._overlayRef.detachments();
        const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)();
        const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(active => active !== this._menuItemInstance), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this._menuOpen)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(backdrop, parentClose, hover, detachments);
    }
    /** Handles mouse presses on the trigger. */
    _handleMousedown(event) {
        if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.isFakeMousedownFromScreenReader)(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : undefined;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    }
    /** Handles key presses on the trigger. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        // Pressing enter on the trigger will trigger the click handler later.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.SPACE) {
            this._openedBy = 'keyboard';
        }
        if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.RIGHT_ARROW && this.dir === 'ltr') ||
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.LEFT_ARROW && this.dir === 'rtl'))) {
            this._openedBy = 'keyboard';
            this.openMenu();
        }
    }
    /** Handles click events on the trigger. */
    _handleClick(event) {
        if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    }
    /** Handles the cases where the user hovers over the trigger. */
    _handleHover() {
        // Subscribe to changes in the hovered item in order to toggle the panel.
        if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
            return;
        }
        this._hoverSubscription = this._parentMaterialMenu._hovered()
            // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(active => active === this._menuItemInstance && !active.disabled), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_20__.asapScheduler))
            .subscribe(() => {
            this._openedBy = 'mouse';
            // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.
            if (this.menu instanceof _MatMenuBase && this.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                this.menu._animationDone
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_20__.asapScheduler), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._parentMaterialMenu._hovered()))
                    .subscribe(() => this.openMenu());
            }
            else {
                this.openMenu();
            }
        });
    }
    /** Gets the portal that should be attached to the overlay. */
    _getPortal() {
        // Note that we can avoid this check by keeping the portal on the menu panel.
        // While it would be cleaner, we'd have to introduce another required method on
        // `MatMenuPanel`, making it harder to consume.
        if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this.menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
    }
}
MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) { return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor)); };
MatMenuTrigger.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatMenuTrigger, selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]], hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"], hostVars: 2, hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) { return ctx._handleMousedown($event); })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("click", function MatMenuTrigger_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
    } }, inputs: { restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"], _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"], menu: ["matMenuTriggerFor", "menu"], menuData: ["matMenuTriggerData", "menuData"] }, outputs: { menuOpened: "menuOpened", onMenuOpen: "onMenuOpen", menuClosed: "menuClosed", onMenuClose: "onMenuClose" }, exportAs: ["matMenuTrigger"] });
MatMenuTrigger.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_SCROLL_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: MatMenuItem, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor }
];
MatMenuTrigger.propDecorators = {
    _deprecatedMatMenuTriggerFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['mat-menu-trigger-for',] }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matMenuTriggerFor',] }],
    menuData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matMenuTriggerData',] }],
    restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matMenuTriggerRestoreFocus',] }],
    menuOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onMenuOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    menuClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onMenuClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
                host: {
                    'class': 'mat-menu-trigger',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'menuOpen || null',
                    '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
                    '(mousedown)': '_handleMousedown($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(click)': '_handleClick($event)'
                },
                exportAs: 'matMenuTrigger'
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_SCROLL_STRATEGY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_PANEL]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: MatMenuItem, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor }]; }, { restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matMenuTriggerRestoreFocus']
        }], menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], menuClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onMenuClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _deprecatedMatMenuTriggerFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mat-menu-trigger-for']
        }], menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matMenuTriggerFor']
        }], menuData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matMenuTriggerData']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
 * to declare the menu-related directives.
 */
class _MatMenuDirectivesModule {
}
_MatMenuDirectivesModule.ɵfac = function _MatMenuDirectivesModule_Factory(t) { return new (t || _MatMenuDirectivesModule)(); };
_MatMenuDirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: _MatMenuDirectivesModule });
_MatMenuDirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule],
                declarations: [
                    MatMenuTrigger,
                    MatMenuContent,
                ],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, { declarations: function () { return [MatMenuTrigger, MatMenuContent]; }, exports: function () { return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule]; } }); })();
class MatMenuModule {
}
MatMenuModule.ɵfac = function MatMenuModule_Factory(t) { return new (t || MatMenuModule)(); };
MatMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatMenuModule });
MatMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule,
            _MatMenuDirectivesModule,
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _MatMenuDirectivesModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule,
                    _MatMenuDirectivesModule,
                ],
                exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, MatMenu, MatMenuItem, _MatMenuDirectivesModule],
                declarations: [MatMenu, MatMenuItem],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatMenuModule, { declarations: function () { return [MatMenu, MatMenuItem]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _MatMenuDirectivesModule]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, MatMenu, MatMenuItem, _MatMenuDirectivesModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 5758:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/forkJoin.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forkJoin": function() { return /* binding */ forkJoin; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 9165);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ 9796);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ 8002);
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isObject */ 1555);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 9412);





function forkJoin(...sources) {
    if (sources.length === 1) {
        const first = sources[0];
        if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(first)) {
            return forkJoinInternal(first, null);
        }
        if ((0,_util_isObject__WEBPACK_IMPORTED_MODULE_1__.isObject)(first) && Object.getPrototypeOf(first) === Object.prototype) {
            const keys = Object.keys(first);
            return forkJoinInternal(keys.map(key => first[key]), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        const resultSelector = sources.pop();
        sources = (sources.length === 1 && (0,_util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_2__.map)((args) => resultSelector(...args)));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        const values = new Array(len);
        let completed = 0;
        let emitted = 0;
        for (let i = 0; i < len; i++) {
            const source = (0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources[i]);
            let hasValue = false;
            subscriber.add(source.subscribe({
                next: value => {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: err => subscriber.error(err),
                complete: () => {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce((result, key, i) => (result[key] = values[i], result), {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        }
    });
}
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ 4395:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": function() { return /* binding */ debounceTime; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 7393);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 3637);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 5408:
/*!*******************************************************************************!*\
  !*** ./dist/ngx-ui-tour-md-menu/__ivy_ngcc__/fesm2015/ngx-ui-tour-md-menu.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TourAnchorMatMenuDirective": function() { return /* binding */ TourAnchorMatMenuDirective; },
/* harmony export */   "TourMatMenuModule": function() { return /* binding */ TourMatMenuModule; },
/* harmony export */   "TourService": function() { return /* binding */ NgxmTourService; },
/* harmony export */   "TourStepTemplateComponent": function() { return /* binding */ TourStepTemplateComponent; },
/* harmony export */   "ɵa": function() { return /* binding */ NgxmTourService; },
/* harmony export */   "ɵb": function() { return /* binding */ TourStepTemplateService; },
/* harmony export */   "ɵc": function() { return /* binding */ TourAnchorOpenerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-tour-core */ 5092);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8049);

















function TourStepTemplateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function TourStepTemplateComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_2_Template_mat_card_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.tourService.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.tourService.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.tourService.end(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r3 = ctx.step;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r3 == null ? null : step_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", step_r3 == null ? null : step_r3.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.tourService.hasPrev(step_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.tourService.hasNext(step_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r3 == null ? null : step_r3.endBtnTitle, " ");
} }
const _c0 = function (a0) { return { step: a0 }; };
class NgxmTourService extends ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourService {
}
NgxmTourService.ɵfac = /*@__PURE__*/ function () { let ɵNgxmTourService_BaseFactory; return function NgxmTourService_Factory(t) { return (ɵNgxmTourService_BaseFactory || (ɵNgxmTourService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxmTourService)))(t || NgxmTourService); }; }();
NgxmTourService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxmTourService, factory: NgxmTourService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxmTourService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class TourAnchorOpenerComponent {
    constructor() {
        this.menu = new _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu(undefined, undefined, {
            xPosition: 'after',
            yPosition: 'below',
            overlapTrigger: true,
            backdropClass: ''
        });
    }
}
TourAnchorOpenerComponent.ɵfac = function TourAnchorOpenerComponent_Factory(t) { return new (t || TourAnchorOpenerComponent)(); };
TourAnchorOpenerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TourAnchorOpenerComponent, selectors: [["tourAnchorOpener"]], viewQuery: function TourAnchorOpenerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
    } }, inputs: { menu: "menu" }, decls: 2, vars: 1, consts: [[3, "matMenuTriggerFor"], ["trigger", "matMenuTrigger"]], template: function TourAnchorOpenerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", ctx.menu);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger], styles: ["[_nghost-%COMP%] {\n        display: none;\n      }"] });
TourAnchorOpenerComponent.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourAnchorOpenerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'tourAnchorOpener',
                template: `
    <span [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"></span>
  `,
                styles: [`
      :host {
        display: none;
      }
    `]
            }]
    }], function () { return []; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger]
        }] }); })();

class TourStepTemplateService {
}
TourStepTemplateService.ɵfac = function TourStepTemplateService_Factory(t) { return new (t || TourStepTemplateService)(); };
TourStepTemplateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TourStepTemplateService, factory: TourStepTemplateService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourStepTemplateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class TourAnchorMatMenuDirective {
    constructor(componentFactoryResolver, injector, viewContainer, element, tourService, tourStepTemplate, tourBackdrop) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.viewContainer = viewContainer;
        this.element = element;
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.tourBackdrop = tourBackdrop;
        this.opener = this.viewContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory(TourAnchorOpenerComponent)).instance;
    }
    ngOnInit() {
        this.tourService.register(this.tourAnchor, this);
    }
    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor);
    }
    // noinspection JSUnusedGlobalSymbols
    showTourStep(step) {
        const htmlElement = this.element.nativeElement;
        this.isActive = true;
        this.tourStepTemplate.templateComponent.step = step;
        // Ignore step.placement
        if (!step.preventScrolling) {
            ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.ScrollingUtil.ensureVisible(htmlElement);
        }
        this.opener.trigger._element = this.element;
        this.opener.trigger.menu = this.tourStepTemplate.templateComponent.tourStep;
        this.opener.trigger.ngAfterContentInit();
        this.opener.trigger.openMenu();
        if (step.enableBackdrop) {
            this.tourBackdrop.show(this.element);
        }
        else {
            this.tourBackdrop.close();
        }
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.menuCloseSubscription = this.opener.trigger.menuClosed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)())
            .subscribe(() => {
            if (this.tourService.getStatus() !== ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourState.OFF) {
                this.tourService.end();
            }
            this.tourBackdrop.close();
        });
    }
    hideTourStep() {
        this.isActive = false;
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.opener.trigger.closeMenu();
        if (this.tourService.getStatus() === ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourState.OFF) {
            this.tourBackdrop.close();
        }
    }
}
TourAnchorMatMenuDirective.ɵfac = function TourAnchorMatMenuDirective_Factory(t) { return new (t || TourAnchorMatMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxmTourService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TourStepTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService)); };
TourAnchorMatMenuDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TourAnchorMatMenuDirective, selectors: [["", "tourAnchor", ""]], hostVars: 2, hostBindings: function TourAnchorMatMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("touranchor--is-active", ctx.isActive);
    } }, inputs: { tourAnchor: "tourAnchor" } });
TourAnchorMatMenuDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: NgxmTourService },
    { type: TourStepTemplateService },
    { type: ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService }
];
TourAnchorMatMenuDirective.propDecorators = {
    tourAnchor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.touranchor--is-active',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourAnchorMatMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[tourAnchor]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: NgxmTourService }, { type: TourStepTemplateService }, { type: ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService }]; }, { isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.touranchor--is-active']
        }], tourAnchor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class TourStepTemplateComponent extends ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourHotkeyListenerComponent {
    constructor(tourStepTemplateService, tourService) {
        super(tourService);
        this.tourStepTemplateService = tourStepTemplateService;
        this.tourService = tourService;
        this.step = {};
    }
    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }
}
TourStepTemplateComponent.ɵfac = function TourStepTemplateComponent_Factory(t) { return new (t || TourStepTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TourStepTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxmTourService)); };
TourStepTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TourStepTemplateComponent, selectors: [["tour-step-template"]], contentQueries: function TourStepTemplateComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepTemplateContent = _t.first);
    } }, viewQuery: function TourStepTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tourStep = _t.first);
    } }, inputs: { stepTemplate: "stepTemplate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 5, consts: [[1, "tour-step", 3, "overlapTrigger"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultTemplate", ""], [3, "click"], [3, "innerHTML"], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-button", "", 3, "click"]], template: function TourStepTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TourStepTemplateComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TourStepTemplateComponent_ng_template_2_Template, 13, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.stepTemplate || ctx.stepTemplateContent || _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.step));
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: [".tour-step .mat-menu-content {\n        padding: 0 !important;\n      }"] });
TourStepTemplateComponent.ctorParameters = () => [
    { type: TourStepTemplateService },
    { type: NgxmTourService }
];
TourStepTemplateComponent.propDecorators = {
    tourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu,] }],
    stepTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stepTemplateContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourStepTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'tour-step-template',
                template: `
    <mat-menu [overlapTrigger]="false" class="tour-step">
      <ng-container
        *ngTemplateOutlet="
          stepTemplate || stepTemplateContent || defaultTemplate;
          context: { step: step }
        "
      ></ng-container>
    </mat-menu>
    <ng-template #defaultTemplate let-step="step">
      <mat-card (click)="$event.stopPropagation()">
        <mat-card-title>
          {{ step?.title }}
        </mat-card-title>
        <mat-card-content [innerHTML]="step?.content">
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-icon-button
            [disabled]="!tourService.hasPrev(step)"
            (click)="tourService.prev()"
          >
            <mat-icon>chevron_left</mat-icon>
          </button>
          <button
            mat-icon-button
            [disabled]="!tourService.hasNext(step)"
            (click)="tourService.next()"
          >
            <mat-icon>chevron_right</mat-icon>
          </button>
          <button mat-button (click)="tourService.end()">
            {{ step?.endBtnTitle }}
          </button>
        </mat-card-actions>
      </mat-card>
    </ng-template>
  `,
                styles: [`
      ::ng-deep .tour-step .mat-menu-content {
        padding: 0 !important;
      }
    `]
            }]
    }], function () { return [{ type: TourStepTemplateService }, { type: NgxmTourService }]; }, { tourStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu]
        }], stepTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stepTemplateContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
        }] }); })();

class TourMatMenuModule {
    static forRoot() {
        return {
            ngModule: TourMatMenuModule,
            providers: [
                TourStepTemplateService,
                ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService,
                ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourService,
                NgxmTourService
            ]
        };
    }
}
TourMatMenuModule.ɵfac = function TourMatMenuModule_Factory(t) { return new (t || TourMatMenuModule)(); };
TourMatMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TourMatMenuModule });
TourMatMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        ], ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourMatMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
                entryComponents: [TourAnchorOpenerComponent],
                exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule,
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TourMatMenuModule, { declarations: function () { return [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule]; }, exports: function () { return [TourAnchorMatMenuDirective, TourStepTemplateComponent, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule]; } }); })();

/*
 * Public API Surface of ngx-ui-tour-md-menu
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=default-dist_ngx-ui-tour-md-menu___ivy_ngcc___fesm2015_ngx-ui-tour-md-menu_js-es2015.js.map