const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
let lastchecked;

function handleCheck(e) {
    console.log(e);
    // Check if they had the shift key down
    // and if they are checking it
    if (e.shiftKey && this.checked) {
        // TODO
    }
    lastchecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheck);
});
