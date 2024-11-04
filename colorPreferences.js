function favcolors() {

    let colors = [];
    for (let i = 0; i < 3; i++) {
        let enterColor = prompt("Enter your three favorite colors:");
        colors.push(enterColor);
        alert("Your favorite colors are: " +colors);
    }
    let pushcolor = prompt("Add another color:");
    colors.push(pushcolor);
    alert("Your new colors are: " +colors);
}