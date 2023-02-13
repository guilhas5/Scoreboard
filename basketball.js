
document.getElementById("+1h").addEventListener("click", function() {
    scoreH.textContent = parseInt(scoreH.textContent) + 1;
  });

  document.getElementById("+2h").addEventListener("click", function() {
    scoreH.textContent = parseInt(scoreH.textContent) + 2;
  });

  document.getElementById("+3h").addEventListener("click", function() {
    scoreH.textContent = parseInt(scoreH.textContent) + 3;
  });

  document.getElementById("+1g").addEventListener("click", function() {
    scoreG.textContent = parseInt(scoreG.textContent) + 1;
  });
  document.getElementById("+2g").addEventListener("click", function() {
    scoreG.textContent = parseInt(scoreG.textContent) + 2;
  });
  document.getElementById("+3g").addEventListener("click", function() {
    scoreG.textContent = parseInt(scoreG.textContent) + 3;
  });

  document.getElementById('reset').addEventListener('click', function() {
    scoreG.textContent = 0; scoreH.textContent = 0; result.textContent = 'Result';
  });
   

  
  const scoreH = document.getElementById('scoreH');
  const scoreG = document.getElementById('scoreG');
 

  document.getElementById('result').addEventListener('click', function() {
    const scoreHValue = parseInt(scoreH.textContent);
    const scoreGValue = parseInt(scoreG.textContent);
    if(scoreHValue > scoreGValue) {
        return result.textContent = 'HOME TEAM WON!'
    }
        else if (scoreHValue < scoreGValue) {
            return result.textContent = 'GUEST TEAM WON!'
        }
        else {
            return result.textContent = 'DRAW :('
        }
    
   
  });

