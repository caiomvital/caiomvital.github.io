var palavra = palavras[Math.floor(Math.random() * palavras.length)];
var tentativas = 6;
var grid = document.querySelector('#grid');
var popup = document.querySelector('#popup');
var closePopup = document.querySelector('#close-popup');
var newGame = document.querySelector('#new-game');
var popupText = document.querySelector('#popup-text');

for (var i = 0; i < 30; i++) {
    var div = document.createElement('div');
    div.id = 'cell' + i;
    grid.appendChild(div);
}

document.querySelector('#game-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var tentativa = document.querySelector('input[type="text"]').value;
    for (var i = 0; i < palavra.length; i++) {
        var cell = document.querySelector('#cell' + ((6 - tentativas) * 5 + i));
        cell.textContent = tentativa[i];
        if (tentativa[i] === palavra[i]) {
            cell.className = 'verde';
        } else if (palavra.includes(tentativa[i])) {
            cell.className = 'amarelo';
        }
    }
    tentativas--;
    document.querySelector('#tentativas').textContent = 'Tentativas restantes: ' + tentativas;
    if (tentativas === 0) {
        popupText.textContent = 'Você não conseguiu adivinhar a palavra. A palavra era ' + palavra + '.';
        popup.style.display = 'block';
    } else if (tentativa === palavra) {
        popupText.textContent = 'Parabéns, você acertou a palavra!';
        popup.style.display = 'block';
    }
    document.querySelector('input[type="text"]').value = '';
});

closePopup.onclick = function() {
    popup.style.display = 'none';
}

newGame.onclick = function() {
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    tentativas = 6;
    for (var i = 0; i < 30; i++) {
        var cell = document.querySelector('#cell' + i);
        cell.textContent = '';
        cell.className = '';
    }
    popup.style.display = 'none';
}
