document.querySelector('.cal-btn').addEventListener('click', function() {
    // Get the input date value
    let inputDate = document.querySelector('.date').value;
    if (!inputDate) {
        alert("Please! Enter the date.");
        return;
    }

    const selectedDate = new Date(inputDate);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - selectedDate.getFullYear();
    let months = currentDate.getMonth() - selectedDate.getMonth();
    let days = currentDate.getDate() - selectedDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.querySelector('.year .data').innerHTML = `${years}<br><span>years</span>`;
    document.querySelector('.month .data').innerHTML = `${months}<br><span>months</span>`;
    document.querySelector('.days .data').innerHTML = `${days}<br><span>days</span>`;
});


