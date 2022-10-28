export const imageerror = {
    inserter(dom, options) {
        dom.onerror = () => dom.src = options.value
    }
}
