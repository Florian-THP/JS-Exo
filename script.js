/* Fonctionnalité 1 : */
function footer() {
    document.getElementsByTagName("footer")[0].addEventListener("click", function() {
    console.log("clique");
    });
}


/* Fonctionnalité 1-bis : */
let nb = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function() {
    nb ++;
    console.log("clic numéro: " + nb);
});



/* Fonctionnalité 2 : */
function menu() {
    document.getElementById("menu").addEventListener("click", function() {
    let navbarHeader = document.getElementById("navbarHeader");
    navbarHeader.classList.toggle("collapse");
    });
}

menu();

/* Fonctionnalité 3 : */
function card() {
    let card = document.getElementsByClassName("card")[0]; // Premiere carte
    let edit = card.getElementsByClassName("btn-outline-secondary")[0]; // Bouton "Edit"
    edit.addEventListener("click", function(){
        card.style.color = "red";
    });
}

card();


/* Fonctionnalité 4 : */
function cardtwo() {
    let card = document.getElementsByClassName("card")[1]; // Deuxieme carte
    let edit = card.getElementsByClassName("btn-outline-secondary")[0]; // Bouton "Edit"
    edit.addEventListener("click", function(){
        if (card.style.color === 'green') {
            card.style.color = '';
        } else {
            card.style.color = 'green';
        }
    });
}

cardtwo();

/* Fonctionnalité 5 : */
function toggleBootstrap() {
    let link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
    if (link) {
        if (link.disabled === false) {
            link.disabled = true;
            console.log("Bootstrap désactivé");
        } else {
            link.disabled = false;
            console.log("Bootstrap réactivé");
        }
    }
}
document.querySelector('.navbar').addEventListener('dblclick', toggleBootstrap);


/* Fonctionnalité 6 : */
function reduire() {
    let cards = document.getElementsByClassName("card");

    function reduirecard(card) {
        let image = card.querySelector(".card-img-top");
        let text = card.querySelector(".card-text");
        let button = card.querySelector(".btn-success");

        let reduced = false;

        button.addEventListener("mouseenter", function() {
            if (!reduced) {
                image.style.width = "20%";
                text.style.display = "none";
                reduced = true;
            } else {
                image.style.width = "";
                text.style.display = "";
                reduced = false;
            }
        });
    }

    for (let i = 0; i < cards.length; i++) {
        reduirecard(cards[i]);
    }
}

reduire();


/* Fonctionnalité 7 : */
function ordre() {
    let nextButton = document.querySelector(".btn-secondary");
    let cardContainer = document.querySelector(".album .container .row");
  
    nextButton.addEventListener("click", function() {
      let cards = cardContainer.querySelectorAll(".col-md-4");

      /* prend la derniere card*/
      let lastCard = cards[cards.length - 1];
  
      cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
    });
};

ordre();


/* Fonctionnalité 8 : */
function inverse() {
    let prevButton = document.querySelector(".btn-primary");
    let cardContainer = document.querySelector(".album .container .row");
    prevButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      let cards = cardContainer.querySelectorAll(".col-md-4");
  
      /* premiere card */
      let firstCard = cards[0];
      cardContainer.appendChild(firstCard);
    });
};

inverse();
  

const logo = document.querySelector(".navbar-brand");
const body = document.querySelector("body");

function touche(key) {
    body.className = "" /*enleve les class pour eviter que tout saccumule*/

    if (key === "a") {
        body.classList.add("container", "col-4");
    } else if (key === "y") {
        body.classList.add("container", "col-4", "offset-md-4");
    } else if (key === "p") {
        body.classList.add("container", "col-4", "offset-md-8");
    } else if (key === "b") {
        body.classList.add(""); 
    }
}

logo.addEventListener("click", function() {
    document.addEventListener("keypress", function(event) {
        touche(event.key);
        console.log(event.key);
    });
});

  
  



