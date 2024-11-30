function rot13(text) {
    return text.replace(/[a-zA-Z]/g, function (char) {
        let base = (char <= 'Z') ? 65 : 97; // 65 untuk 'A' dan 97 untuk 'a'
        return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
}

function affineEncrypt(plaintext, a, b) {
    let text = rot13(plaintext);
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        // Hanya mengenkripsi huruf a-z
        if (char.match(/[a-z]/i)) {
            let charCode = text.charCodeAt(i);
            let isUpperCase = (charCode >= 65 && charCode <= 90);
            let base = isUpperCase ? 65 : 97;  // ASCII untuk 'A' atau 'a'
            
            let encryptedCharCode = ((a * (charCode - base) + b) % 26) + base;
            encryptedText += String.fromCharCode(encryptedCharCode);
        } else {
            encryptedText += char;  // Tetap biarkan karakter non-huruf
        }
    }
    return encryptedText;
}

export { rot13, affineEncrypt };