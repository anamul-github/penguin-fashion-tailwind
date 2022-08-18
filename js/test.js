document.getElementById('header-button').addEventListener('click', function () {
    const textChange = document.getElementById('penguin-test');
    const innerText = textChange.innerText;
    textChange.innerText = 'I am the Penguin';
})