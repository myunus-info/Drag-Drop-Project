var Component = (function () {
    function Component(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId)
            this.element.id = newElementId;
        this.attach(insertAtStart);
    }
    Component.prototype.attach = function (insetAtBeginning) {
        this.hostElement.insertAdjacentElement(insetAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    };
    return Component;
}());
export { Component };
