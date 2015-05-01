$(document).ready(function() {
    
    $('.button').click(function() {
        // A couple of variables to 'answer-content', 'content' and the
        // button's <p> objects.
        var answer_contentClass = $(this).closest('.answer-content');
        var contentClass = answer_contentClass.find('.content');
        var buttonP = $(this).find('p');
        
        // Toggle the 'hide' class for object 'content'.
        contentClass.toggleClass('hide');
        
        // Change the display text for the buttons. If the content is hidden
        // then the button text should read "Show". And if the content is not
        // hidden then the text should read "Hide".
        
        var hideText = '';
        var showText = '';
        if (answer_contentClass.attr('id') === 'answer') {
            hideText = "Hide Answer";
            showText = "Show Answer";
        }
        else {
            hideText = "Hide Code";
            showText = "Show Code";
        }
        
        if (contentClass.hasClass('hide')){
            buttonP.text(showText);
        }
        else {
            buttonP.text(hideText);
        }
    });
}); 