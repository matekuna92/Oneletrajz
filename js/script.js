(function()
{
    this.init = function()
    {
        this.doScroll();
        this.showTextOnClick();
        this.scrollArrow();
    };

    this.doScroll = function()
    {    
        // NAV LINKS

        $(".navbar-dark ul li a[href^='#']").on('click', function(e) 
        {                   /* Selecting Any link with a[href=#] attribute */

            e.preventDefault(); // prevent link from opening URL-s
        
            var hash = this.hash;
        
            $('html, body').animate({ /* Need both selector because of web browser inconsistency. */
                scrollTop: $(hash).offset().top
            }, 300, function(){   /* 300: speed */
        
                window.location.hash = hash;
            });
        });

        // FOOTER ARROW
    };

    this.showTextOnClick = function()
    {
        var status = 0;
        var button = document.getElementById('showBtn');
        var hiddenText = document.getElementById('hidden');

        button.addEventListener('click',function()
        {
            if(status ==0)
            {
                hiddenText.style.display = "block";   
                status = 1;
                this.innerHTML = "ELREJT <i class='fa fa-arrow-up'></i>";
            }
            else if(status == 1)
            {
                hiddenText.style.display = "none";
                status = 0;
                this.innerHTML = "MEGJELENÍT <i class='fa fa-arrow-down'> </i>";
            }   
        });
    };

    this.scrollArrow = function()
    {
        $("footer .scroll-to-top-button a[href^='#']").on('click', function(e) 
        {
            e.preventDefault();
         
            var hash = this.hash;
         
            $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 300, function(){
         
                window.location.hash = hash;
              });
         });
    }

    this.init(); 
})();









