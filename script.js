const fontSelect = document.getElementById('fontSelect');
const textToChange = document.getElementById('textChange');

fontSelect.addEventListener('change', function(){
        const selectedFont = fontSelect.value;
        textToChange.style.fontFamily= selectedFont;

});

function toggleBold(){
    document.execCommand('bold');
}
function toggleItalic(){
    document.execCommand('italic');
}



function changeBgColor(){
    const color = document.getElementById('bgColor').value;
const editor = document.querySelector('.editor');
    editor.style.backgroundColor = color;
}


    function alignText(alignment) {
        switch(alignment) {
        case 'left':
            document.execCommand('justifyLeft');
            break;
            case 'right' :
            document.execCommand('justifyRight');
            break;
            case 'center':
                document.execCommand('justifyCenter');
                break;
                default:
                    console.error('unknownAlignment' + alignment);
    }
    }
