const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const reverse = document.querySelector('#reverse');
const charcount = document.querySelector('#charcount');
const wordcount = document.querySelector('#wordcount');
const input = document.querySelector('#input-string');
const output = document.querySelector('#output-string');

lowercase.addEventListener('click', () => {
    output.value = input.value.toLowerCase();
});

uppercase.addEventListener('click', () => {
    output.value = input.value.toUpperCase();
});

charcount.addEventListener('click', () => {
    output.value = parseInt(input.value.length, 10);
});

reverse.addEventListener('click', () => {
    output.value = input.value.split('').reverse().join('');
});

wordcount.addEventListener('click', () => {
    output.value = parseInt(input.value.split(' ').length, 10);
});

function execCopy() {
    document.querySelector('#input-string').select();
    document.execCommand('copy');
}
document.getElementById('copy').addEventListener('click', execCopy);
execCopy();
