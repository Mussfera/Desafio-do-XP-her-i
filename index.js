let xpDoHeroi = 10000;
let nome = "Felipão";
let notificaçao = "O Herói de nome " + nome + " está no nível de ";

switch (true) {
        case xpDoHeroi <= 1000:
        console.log(notificaçao + "ferro");
        break;

        case xpDoHeroi <= 2002:
        console.log(notificaçao + "bronze");
        break;

        case xpDoHeroi <= 5000:
        console.log(notificaçao + "prata");
        break;

        case xpDoHeroi <= 7000:
        console.log(notificaçao + "Ouro");
        break;

        case xpDoHeroi <= 8000:
        console.log(notificaçao + "Platina");
        break;

        case xpDoHeroi <= 9000:
        console.log(notificaçao + "Ascendente");
        break;
        
        case xpDoHeroi <= 10000:
        console.log(notificaçao + "Imortal");
        break;

        case xpDoHeroi >= 10001:
        console.log(notificaçao + "Radiante");
        break;
        
}