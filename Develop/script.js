var todaysTime = $('#currentDay');
var currentClock = dayjs().format('H');
console.log(currentClock);






$(function () {
 
    function currentTime(){
      const now = dayjs(); // Get the current date and time
      const formattedDateTime = now.format('YYYY-MM-DD HH:mm:ss'); 
      todaysTime.text(formattedDateTime);
      console.log(formattedDateTime); 
    }
    currentTime();
    setInterval(currentTime, 1000);
    blockColor();
    listEntry();
  
    function blockColor(){
       $('.time-block').each(function(){
        const setHour = parseInt(this.id);
        $(this).toggleClass('past', setHour < currentClock);
        $(this).toggleClass('present', setHour === currentClock);
        $(this).toggleClass('future', setHour > currentClock);
      });
    }

    function listEntry(){
      $('.saveBtn').on('click', function(){
        const time = $(this).parent().attr('id');
        const activity = $(this).siblings('.description').val();
        localStorage.setItem(time, activity);
      })
    }
    $('.time-block').each(function() {
      const time = $(this).attr('id');
      const activity = localStorage.getItem(time);
      $(this).children('.description').val(activity);
    });
    

    

  });
  
  

