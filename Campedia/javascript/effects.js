$('#content-block').hide().fadeIn(3000);

$(document).ready(function(){
    $('#siteSearch').keyup(function(){ 
$('.siteCard').hide().fadeIn(1000);
});
    });


    $(document).ready(function() {

        $('body').css('display', 'none');
        
        $('body').fadeIn(2000);
    

    $('#content-block ul li a').click(function(event) {

        event.preventDefault();
        
        newLocation = this.href;
        
        $('body').fadeOut(2000, newpage);
        
        });


        function newpage() {

            window.location = newLocation;
           
            }
        }); 
      

