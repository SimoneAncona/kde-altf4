let activeWindow = workspace.activeWindow;

function triggerAction() {
    if (activeWindow) {
        activeWindow.close();
    } else {
        var windows = workspace.windows;
        var anyVisible = false;

        for (var i = 0; i < windows.length; i++) {
            if (windows[i].isVisible()) {
                anyVisible = true;
                break;
            }
        }

        if (!anyVisible) {
            callDBus("org.kde.LogoutPrompt", "/LogoutPrompt", "", "promptAll")
        }
    }
}

registerShortcut("Smart ALT-F4", "Close window or show logout dialog", "Alt+F4", triggerAction);
