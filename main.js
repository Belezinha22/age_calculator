document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('submit_form').addEventListener('click', function () {
        var user_year = parseInt(document.getElementById('Year').value);
        var user_day = parseInt(document.getElementById('Day').value);
        var user_month = parseInt(document.getElementById('Month').value);

        var maxDiaMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

         if (isNaN(user_year) || isNaN(user_month) || isNaN(user_day) || user_year < 0 || user_month > 12 || user_day <1 || user_day > maxDiaMes[user_month -1]) {

            if(isNaN(user_year) || user_year< 0){
                document.getElementById('Year').style.border = '1px solid red'
                document.getElementById('error_labelY').style.display = 'block'
            }
            if(isNaN(user_month) || user_month > 12){
                document.getElementById('Month').style.border = '1px solid red'
                document.getElementById('error_labelM').style.display = 'block'
            }
            if(isNaN(user_day) || user_day < 1 || maxDiaMes[user_month - 1]){
                document.getElementById('Day').style.border = '1px solid red'
                document.getElementById('error_labelD').style.display = 'block'
            }
            
            else{
                document.getElementById('error_labelY').style.display = 'none'
                document.getElementById('error_labelM').style.display = 'none'
                document.getElementById('error_labelD').style.display = 'none'
                document.getElementById('show_age').innerText = "--"
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

