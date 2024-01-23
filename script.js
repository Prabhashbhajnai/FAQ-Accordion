// if active class is not present add it
const ShowAns = (id) => {
    const answer = document.getElementById(id)
    answer.classList.toggle('active')
}

// if active class is not present remove it
const HideAns = (id) => {
    const answer = document.getElementById(id)
    answer.classList.remove('active')
}

const handleChange = (e) => {
    // get the id of the button clicked
    const btnId = e.target.id;

    // get the element with the id of the button clicked
    const btn = document.getElementById(btnId);

    // get the element with the id of the answer
    const ans = document.getElementById(`ans${btnId}`);

    // check if the answer has the active class
    const isActive = ans.classList.contains('active')

    // check if the answer is hidden or not
    if (!isActive) {
        ShowAns(`ans${btnId}`)
        btn.src = '/assets/images/icon-minus.svg'
    } else {
        HideAns(`ans${btnId}`)
        btn.src = '/assets/images/icon-plus.svg'
    }
}

// get all the toggle buttons
const toggle = document.querySelectorAll('.toggle-btn');

// add event listener to all the toggle buttons
toggle.forEach(btn => {
    btn.addEventListener('click', handleChange)
})