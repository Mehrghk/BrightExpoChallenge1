let alphabet = [];
let finalSentence;
let lastDecoded = [];
let ShiftValue;
let intShift;
let intdecoded;
let encryptedMessages;
let decodedMessages = document.querySelector('.decoded-messages');
let stringdecoded;

document
    .querySelector('.btn-D')
    .addEventListener('click', function(){
    document.querySelector('.encrypted-error').innerHTML = '';
    document.querySelector('.Shift-error').innerHTML = '';
    
    if(document.querySelector('.encrypted-messages').value == ''){
        document.querySelector('.encrypted-error').innerHTML = '*Please Enter Your Sentences!!';
        return false;

    } else if(document.querySelector('#shift-value').value == ''){
        document.querySelector('.Shift-error').innerHTML = '*Please Enter Shift Number!!';
        return false;

    } else {
        initialize();

    }
    
    });

function initialize(){
    handleShiftValue();
    handleMessage();
    decodedMessages.innerText = finalSentence;
}
// Khoor zruog
//Wklv lv d whvw phvvdjh

function handleShiftValue(){
    ShiftValue = document.querySelector('#shift-value').value;
    intShift = parseInt(ShiftValue);
}

function handleMessage(){
encryptedMessages = document.querySelector('.encrypted-messages').value;

    if(encryptedMessages.length === 1){
    handleSingleAlphabet(encryptedMessages);
    // decodedMessages.innerText = stringdecoded;
    } else {
    changeMessageIntoAlphabetArray(encryptedMessages);
    handleAlphabetArray(encryptedMessages)
    }
    encryptedMessages = '';
}

function handleSingleAlphabet(encryptedAlphabet){
    
    intdecoded = encryptedAlphabet.charCodeAt(0) + intShift;
    stringdecoded = String.fromCharCode(intdecoded);

    console.log(`stringdecoded: ${stringdecoded}`);
    finalSentence = stringdecoded;
    console.log(finalSentence);

}

function changeMessageIntoAlphabetArray(encryptedMessage){
    // for(let i=0; i < encryptedMessage.length; i++){
        // console.log(encryptedMessage.slice(i,i+1));
        // alphabet.push(encryptedMessage.slice(i,i+1));
        // console.log(alphabet);
        // console.log(`alphabet : ${alphabet}`);
    // }
    // console.log(`alphabet : ${alphabet}`);
    alphabet = encryptedMessage.split('');
    console.log(alphabet);

}

function handleAlphabetArray(encryptedMessage){
    let Decoded = [];
    for(let i=0; i < encryptedMessage.length; i++){

    if(alphabet[i] == ' '){
        Decoded.push(' ');
    } else {
        handleSingleAlphabet(alphabet[i]);
        Decoded.push(stringdecoded.toString());
    }
    
    }
    
    finalSentence = Decoded.join('');

    console.log(Decoded);

    console.log(finalSentence);
}

function reset(){
document.querySelector('.encrypted-messages').value = '';
document.querySelector('#shift-value').value = '';
document.querySelector('.decoded-messages').innerText = 'Your Decoded Message';
}

