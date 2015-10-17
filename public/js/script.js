console.log('this is the right js file');

var postHtml = '<div class="col-sm-8 col-sm-offset-2"><div class="thumbnail">'
                + '<div class="caption"><button type="button" name="button" class="btn btn-xs pull-right delete">'
                + '<span class="glyphicon glyphicon-remove"></span></button>'
                + '<h3> '
var D = new Date();

$(document).ready(function() {
// add event listeners to page

// delete post when the X is clicked
  $('.delete').on('click', function(){
    $(this).parents()[2].remove();
  });

  // get input from the title vals and textarea
  $('#submit-button').on('click',function(){
     $title = $('#new-post-title').eq(0).val();
     $post = $('#new-post').eq(0).val();
     dHtml = '<p><small><i>Written on ' + D.toLocaleDateString();
     // prepend html into post list
     $('#all-posts').prepend( postHtml + $title + '</h3>' + '<p>' + $post + '</p>' + dHtml + '</div></div></div>');
     //clear forms
     $('#new-post-title').eq(0).val('');
     $('#new-post').eq(0).val('');
     //apply the event handler to the newly created element
     $('.delete').on('click', function(){
       $(this).parents()[2].remove();
     });
  });
});
