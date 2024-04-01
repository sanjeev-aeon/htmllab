export default class A {

    /**
     * Attach mutation observer for iframe dom
     */
    attachMutation = () => {
        const iframeDoc = document.getElementsByTagName('iframe')[0].contentDocument;

        const callback = (mutationList, observer) => {
            console.log('callback');
        }

        const observer = new MutationObserver(callback);

        observer.observe(iframeDoc, {
            attributes: true,
            childList: true,
            subtree: true
        });

    }

    /**
     * Attach hash change listener
     */
    attachHasChangeListener = () => {
        const iframeW = document.getElementsByTagName('iframe')[0].contentWindow;
        iframeW.addEventListener('hashchange', () => {
            console.log('hashchange');
        });
        const iframeDoc=document.getElementsByTagName('iframe')[0].contentDocument;
        iframeDoc.addEventListener('hashchange', () => {
            console.log('hashchange');
        })
    }
}