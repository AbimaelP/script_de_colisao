//OBJETO BASEADO EM CLASSE QUE PODE CRIAR COLISOR EM QUALQUER IMAGEM OU ELEMENTO NO HTML
class Colisor {
    constructor(){
        this.rect1 = {x:null,y:null,width:null,height:null}
        this.rect2 = {x:null,y:null,width:null,height:null}
    }
    inputRect1(x,y,z,w){
        this.rect1.x = Number(x.replace('px',''))
        this.rect1.y = Number(y.replace('px',''))
        this.rect1.width = Number(z.replace('px',''))
        this.rect1.height = Number(w.replace('px',''))
    }
    inputRect2(x,y,z,w){
        this.rect2.x = Number(x.replace('px',''))
        this.rect2.y = Number(y.replace('px',''))
        this.rect2.width = Number(z.replace('px',''))
        this.rect2.height = Number(w.replace('px',''))
    }
}

//ATRIBUIÇÃO DO ELEMENTO HTML PARA UMA VARIAVEL EM JS PARA QUE O O OBJETO COLISOR ATUE SOBRE ELE
let player = document.getElementById('player')
let terrain = document.getElementById('ground')
player = window.getComputedStyle(player)
terrain = window.getComputedStyle(terrain)

//OBJETO COLISOR CRIADO
let colisor = new Colisor()

//RECEBIMENTO DE VALORES DENTRO DAS REPECTIVAS VARIAVEIS NA FUNÇÃO QUE MONITORA A COLISAO DO OBJETO0,
colisor.inputRect1(player.left, player.top, player.width, player.height)
colisor.inputRect2(terrain.left, terrain.top, terrain.width, terrain.height)

//Condição que calcula quando acontece a colisão

if (colisor.rect1.x <= colisor.rect2.x + colisor.rect2.width && colisor.rect1.width + colisor.rect1.x >= colisor.rect2.x && colisor.rect1.y <= colisor.rect1.y + colisor.rect2.height && colisor.rect1.height + colisor.rect1.y >= colisor.rect2.y){
    console.log('colisão')
}else{console.log('não houve colisão')}

console.log(colisor.rect1)