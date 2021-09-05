const numSlotsField = document.getElementById('num_slots');
const cardNumField = document.getElementById("card_num");
const responseDiv = document.getElementById('response_div');
const response = document.getElementById("response");
const submitBtn = document.getElementById("submit_btn");
const form = document.getElementById("form")
let validSlots = false
let validCard = false

function formSubmit()
{
    let cardNum = cardNumField.value
    let slots = numSlotsField.value
    let slot = 0
    let page = 0

    page = Math.floor(cardNum / slots)
    if (cardNum % slots == 0) {
        page = page - 1
        slot = slots
    } else {
        slot = cardNum - (page * slots)
    }

    responseDiv.innerHTML = "";

    create_card(cardNum, page, slot)


    // maybe later implement the drawing of the slot sheet like in the python app...
    // print(f'Card number {cardNum} goes on page {page + 1}, slot {slot}')

    // for index, item in enumerate('ooooooooo', start=1):
    //     if index == slot:
    //         item = 'x'
    //     print(item, end=' ' if index % 3 else '\n')

    // console.log(document.getElementById('num_slots').value);

    
    // create_card(cardNumField., 3, 1)
}

function create_card(cardNum, page, slot){
    let text_card = "";
    text_card+=     '<div class="row" id="response">'
    text_card+=         '<div class="col s6 offset-s3">'
    text_card+=             '<div class="card white-text darken-1">'
    text_card+=                 '<div class="col s12 card-panel blue-grey lighten-2">'
    text_card+=                     '<p class="center-align">Card number '+cardNum+' goes on page '+(page + 1)+', slot '+slot+'</p>'
    text_card+=                 '</div>'
    text_card+=             '</div>'
    text_card+=         '</div>'
    text_card+=     '</div>';

    document.getElementById("response_div").innerHTML +=  text_card;
}

numSlotsField.addEventListener("keyup", function (event) {
    validSlots = numSlotsField.checkValidity();
    enableDisableSubmit()
})

cardNumField.addEventListener("keyup", function (event) {
    validCard = cardNumField.checkValidity();
    enableDisableSubmit()
})

function enableDisableSubmit() {
    if ( validSlots && validCard) {
        submitBtn.classList.remove('disabled')
    } else {
        submitBtn.classList.add('disabled')
    }
}