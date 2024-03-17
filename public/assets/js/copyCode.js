function copyCode() {
    var cssCode = document.getElementById('cssCode').innerText;
    navigator.clipboard.writeText(cssCode);
    alert('Copiado!');
}