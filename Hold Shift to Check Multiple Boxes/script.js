const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    // and if they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("Start checking");
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheck);
});
