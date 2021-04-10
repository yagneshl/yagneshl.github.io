const skipToMainContentOnClick = () => {
    const mainContentNode = document.getElementById("main-content");
    mainContentNode.focus();
}

const addCopyrightText = () => {
    const copyrightTextNodes = document.getElementsByClassName("copyrightText");
    if (copyrightTextNodes.length > 0) {
        const copyrightTextNode = copyrightTextNodes[0];
        const today = new Date();
        copyrightTextNode.textContent = `\u00A9 ${today.getFullYear()} WeiPing Allen Hsiao`;
    }
}