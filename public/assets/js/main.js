// Selecionando os elementos do DOM
const boxShadowInput = document.getElementById('boxShadow');
const borderRadiusInput = document.getElementById('borderRadius');
const colorInput = document.getElementById('color');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const borderColorInput = document.getElementById('borderColor');
const previewBox = document.querySelector('.preview');
const cssCode = document.querySelector('.css-code');

// Função para atualizar a visualização e o código CSS
function updatePreview() {
    // Obtendo os valores dos controles
    const boxShadowValue = boxShadowInput.value;
    const borderRadiusValue = borderRadiusInput.value;
    const colorValue = colorInput.value;
    const widthValue = widthInput.value;
    const heightValue = heightInput.value;
    const borderColorValue = borderColorInput.value;

    // Atualizando a visualização da caixa
    previewBox.style.boxShadow = `0 0 ${boxShadowValue}px ${colorValue}`;
    previewBox.style.borderRadius = `${borderRadiusValue}px`;
    previewBox.style.backgroundColor = colorValue;
    previewBox.style.width = `${widthValue}px`;
    previewBox.style.height = `${heightValue}px`;
    previewBox.style.borderColor = borderColorValue;

    // Atualizando o código CSS mostrado
    const cssText = `
        width: ${widthValue}px;
        height: ${heightValue}px;
        box-shadow: 0 0 ${boxShadowValue}px ${colorValue};
        border-radius: ${borderRadiusValue}px;
        background-color: ${colorValue};
        border-color: ${borderColorValue};
    `;

    cssCode.textContent = cssText;
}

// Adicionando eventos de entrada aos controles
boxShadowInput.addEventListener('input', updatePreview);
borderRadiusInput.addEventListener('input', updatePreview);
colorInput.addEventListener('input', updatePreview);
widthInput.addEventListener('input', updatePreview);
heightInput.addEventListener('input', updatePreview);
borderColorInput.addEventListener('input', updatePreview);

// Chamando a função para atualizar a visualização inicialmente
updatePreview();

// Função para mostrar ou ocultar o índice explicativo
function toggleHelpIndex() {
    var helpIndex = document.getElementById("helpIndex");
    helpIndex.style.display = (helpIndex.style.display === "block") ? "none" : "block";
}