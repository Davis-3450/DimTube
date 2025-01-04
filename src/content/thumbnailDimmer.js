// Interface for thumbnail manipulation
class ThumbnailManipulator {
    constructor(selector) {
        this.selector = selector;
    }

    apply() {
        throw new Error('Method not implemented');
    }
}

// Concrete implementation for dimming thumbnails
class ThumbnailDimmer extends ThumbnailManipulator {
    constructor() {
        super('ytd-thumbnail, .ytd-thumbnail, .thumb-wrapper');
    }

    apply() {
        // The actual dimming is handled by CSS for better performance
        this.observeNewThumbnails();
    }

    observeNewThumbnails() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    // New content has been added, CSS will handle the dimming
                    // This observer ensures our styles apply to dynamically loaded content
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Initialize the extension
document.addEventListener('DOMContentLoaded', () => {
    const dimmer = new ThumbnailDimmer();
    dimmer.apply();
}); 