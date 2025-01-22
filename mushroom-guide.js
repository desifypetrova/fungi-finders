const cards = Array.from(document.querySelectorAll(".mushroom-guide-cards .card"));
const seasonSelect = document.querySelector("#season");
const edibleSelect = document.querySelector("#edible");
const noCardsMessage = document.querySelector(".no-matches");
hide(noCardsMessage);
const selectedTags = {
    season: "all",
    edible: "all"
}
seasonSelect.addEventListener("change", (e) => makeSelection(e, cards, selectedTags));
edibleSelect.addEventListener("change", (e) => makeSelection(e, cards, selectedTags));

function makeSelection(e, cards, selectedTags) {
   let hasVisibleCards = false;
    selectedTags[e.target.name] = e.target.value;
    cards.forEach(card => {
        if(matchesCardFilter(card, selectedTags)) {
            hasVisibleCards = true;
            show(card);
        }
        else {
            hide(card);
        }
    });
    (hasVisibleCards) ? hide(noCardsMessage) : show(noCardsMessage);
}

function matchesCardFilter(card, filters) {
    return Object.keys(filters).every(key => {
        if(filters[key] === 'all')
            return true;
        
        const tagValue = card.querySelector(`[data-${key}]`).dataset[key];
        console.log(tagValue); 
        return tagValue === filters[key];
        
    })
    
}

function show(el) {
    el.style.display='';
}

function hide(el) {
    el.style.display = 'none';
}




