function fixedText() {
    var text = "'I'm the cook,' he said, 'it's my job.'";
    return text.replace(/(?![\w]'[\w'])(.)'|^'/g, '$1"');
}




