document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('submit_form').addEventListener('click', function () {
        var user_year = parseInt(document.getElementById('Year').value);
        var user_day = parseInt(document.getElementById('Day').value);
        var user_month = parseInt(document.getElementById('Month').value);

        var maxDiaMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        var error_label = document.getElementsByClassName('error-label')[0]

        if (user_day > 30 && user_month == 4) {
            alert(" O mes 4(Abril ) possui apenas 30 dias")
            return
        } 
        else if (isNaN(user_year) || isNaN(user_month) || isNaN(user_day) || user_year < 0 || user_month > 12 || user_day <1 || user_day > maxDiaMes[user_month -1]) {

            alert("erro1")
            document.getElementById('show_year').innerText = "--";
            document.getElementById('show_month').innerText = "--";
            document.getElementById('show_day').innerText = "--";
            if (user_day >maxDiaMes[user_month - 1]) {
                error_label.style.display = 'block'
            }
            return

        }

        if (user_year != "" && user_month != "" && user_day != "") {

            var today_year = new Date().getFullYear();
            var today_month = new Date().getMonth() + 1; 
            var today_day = new Date().getDate();

            var age_years = today_year - user_year;
            var age_months = today_month - user_month;
            var age_days = today_day - user_day;

            if (age_days < 0) {
                age_months--;
                var last_month = new Date(today_year, today_month - 1, 0);
                age_days += last_month.getDate();
            }

            if (age_months < 0) {
                age_years--;
                age_months += 12;
            }

            document.getElementById('show_year').innerText = age_years;
            document.getElementById('show_month').innerText = age_months;
            document.getElementById('show_day').innerText = age_days;
        }
     
    });
});

document.getElementById('AgeForm').addEventListener('submit', function (event) {
    event.preventDefault()
})
