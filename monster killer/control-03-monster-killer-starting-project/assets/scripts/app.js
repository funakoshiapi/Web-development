

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);


function attackMonster(mode) {
  let attackMode;
  if (mode === 'ATTACK') {
    attackMode = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK_VALUE') {
    attackMode = STRONG_ATTACK_VALUE;
  }

  //Randon calculation of damage player causes to monster
  const damage = dealMonsterDamage(attackMode);
  currentMonsterHealth -= damage;

  //Randon calculation of damage monster causes to player
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a DRAW!')
  }
}

function attackHandler() {
  attackMonster('ATTACK');

}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK_VALUE');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);