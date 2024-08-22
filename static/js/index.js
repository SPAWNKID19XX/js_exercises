/**NAVBAR */
const navbar_button_tugle = document.querySelector("#tuggle_button");
const navbar_list_menu = document.querySelectorAll('li')

function tuggleNavMenu() {
    console.log('click');
    navbar_list_menu.forEach(function(obj){
        obj.classList.toggle('content_hidden_tuggle')
    })
    
}

navbar_button_tugle.addEventListener('click', tuggleNavMenu)


/**Button show/hide block */
const butons = document.querySelector('#button');
const context_card = document.querySelector('#context_card')

function toggleContent() {
    console.log('click');
    
    if (context_card.classList.toggle('content_hidden')) {
        butons.textContent = "Show content"
    } else {
        butons.textContent = "Hide content"
    }
}
butons.addEventListener('click', toggleContent)


/* acardion script */
const title_cards = document.querySelectorAll('div.title_card');
const context_cards = document.querySelectorAll('div.context_card')




title_cards.forEach(function(obj, index) {
    obj.addEventListener('click', function() {
        context_cards[index].classList.toggle('content_hidden')
    })
})

/* TABS */

const tabs = document.querySelectorAll('li.my-link')
tabs.forEach(function(text, index) {
    text.addEventListener('click', function() {
        let print_text = context_cards[index].textContent
        document.getElementById('text_print_tab_js').textContent = print_text
        
    })
})
