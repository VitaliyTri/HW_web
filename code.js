function enterName() {
    let name = prompt("Как Вас зовут?", `Ваше имя`);
    if (name) {
        return (`Привет, ${name}! Рады тебя видеть!`);
    }
    else {
        return enterName()
    }
}
alert(enterName())