console.log('this is the right js file');


var d = Date.now();

$(document).ready(function() {
  // add event listeners to page



  // get input from the title vals and textarea
  $('#new-blog').on('submit',function(e){
    console.log(e)
    e.preventDefault();
    $('post-timestamp').val = d;
    console.log($(this).serialize())
    $.post("/api/posts", $(this).serialize(), function(response){
      console.log('posted response: ' + response)
      var newPost = response.stringify();
      // clear new food form
      var html = createHTML(newPost);
      $("#all-posts").prepend(html);
      // reset the form
      $("#post-title").val('');
      // give focus back to the food name input
      $("#new-post").focus();
    });
    // $title = $('#new-post-title').eq(0).val();
    // $post = $('#new-post').eq(0).val();
    // dHtml = '<p><small><i>Written on ' + D.toLocaleDateString();
    // // prepend html into post list
    // $('#all-posts').prepend( postHtml + $title + '</h3>' + '<p>' + $post + '</p>' + dHtml + '</div></div></div>');
    // //clear forms
    // $('#new-post-title').eq(0).val('');
    // $('#new-post').eq(0).val('');
    // //apply the event handler to the newly created element

  });
});

// delete post when the X is clicked
$(document).on('click', '.delete',  function(){
  deletePost(this);
  //$(this).parents()[2].remove();
});

function createHTML(response){
  date = response.timestamp
  var postHtml = '<li class="list-group-item"><div class="caption"><div class="button-group pull-right">'
                + '<button type="button" name="edit-button" class="btn btn-xs edit" data-id="' + response.id +'">'
                + '<span class="glyphicon glyphicon-edit"></span></button>'
                + '<button type="button" name="share-button" class="btn btn-xs share" data-id="' + response.id +'">'
                + '<a href="/api/posts/<%= posts[i].id %>"><span class="glyphicon glyphicon-share"></span></a>'
                + '</button><button type="button" name="del-button" class="btn btn-xs delete" data-id="' + response.id +'">'
                + '<span class="glyphicon glyphicon-remove"></span></button></div><h3>' + response.title + '</h3>'
                + '<p>' + response.content + '</p><%%><p><small><i>' + date.toLocaleDateString() + '</i>'
                + '</p></small></div></li>';
}


function deletePost(context) {
  console.log('context in deletePost: ', context);
  // context is the button that was clicked
  var postID = $(context).data().id;
  console.log(postID);
  $.ajax({
    url: '/api/posts/' + postID,
    type: 'DELETE',
    success: function(response) {
      // once successful, remove food from the DOM
      console.log('removed' + response)
      $(context).closest('li').remove();
    }
  });
}
