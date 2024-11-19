let tower = 500
let bomba = document.getElementById("Bomba")
let granada = document.getElementById("Granada")
let arqueiro = document.getElementById("Arqueiro")
let escudo = document.getElementById("Escudo")
let statusTower = document.getElementById("Situation")
let lifeTower = document.getElementById("Situacion")


if(tower <= 0){
}
function W() {
            if(bomba && lifeTower.value == "Ativa"){
            tower = tower - Number(bomba.value)
            }
                if(tower > 0){
                statusTower.value = tower
                }else{
                    statusTower.value = tower
                    lifeTower.value = "Destruida"
                }
        }
function X() {
            if(granada && lifeTower.value == "Ativa"){
            tower = tower - Number(granada.value)
            }
                if(tower > 0){
                statusTower.value = tower
                }else{
                    statusTower.value = tower
                    lifeTower.value = "Destruida"
                }
        }
function Y() {
            if(arqueiro && lifeTower.value == "Ativa"){
            tower = tower - Number(arqueiro.value)
            }
                if(tower > 0){
                statusTower.value = tower
                }else{
                    statusTower.value = tower
                    lifeTower.value = "Destruida"
                }
        }
function Z() {
            if(escudo && lifeTower.value == "Ativa"){
            tower = tower + Number(escudo.value)
            }
                if(tower > 0){
                statusTower.value = tower
                }else{
                    statusTower.value = tower
                    lifeTower.value = "Destruida"
                }
        }