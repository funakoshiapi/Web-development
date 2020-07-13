const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');
const bonusLifeResetEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(enteredLife) {

  maxValue = 100;
  monsterHealthBar.max = maxValue;
  monsterHealthBar.value = enteredLife;
  playerHealthBar.max = maxValue;
  playerHealthBar.value = enteredLife;


}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
  resetBonusLife();


}

function removeBonusLife() {

  bonusLifeEl.parentNode.removeChild(bonusLifeEl);

}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
