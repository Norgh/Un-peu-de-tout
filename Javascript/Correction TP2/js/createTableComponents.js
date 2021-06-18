let tableComponents = (function () {
    return {
        createTabComponents() {
            let table = document.getElementById('components').firstElementChild;
            
            for (const component of components.getData()) {
                table.appendChild(lineComponents.getLineComponent(component.idComp));
            }
        }
    }
})();