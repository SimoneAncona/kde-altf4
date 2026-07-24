function triggerAction() {
    let activeWindow = workspace.activeWindow;
    if (activeWindow.desktopWindow) {
        callDBus("org.kde.LogoutPrompt", "/LogoutPrompt", "", "promptAll")
        return;
    }
    activeWindow.closeWindow();
}

registerShortcut("Smart ALT-F4", "Close window or show logout dialog", "Alt+F4", triggerAction);
