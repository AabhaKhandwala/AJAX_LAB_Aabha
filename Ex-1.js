// Use jQuery to do the following things with the https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises API.

// Create buttons that do each of the tasks below
// Render the results to the page in html elements.
// Hide the results from the previous actions


// Get all posts
$("#target1").click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(result){
    console.log(result);
    result.forEach(function() {
        var p=$('<p></p>');
        p.text(JSON.stringify(result));
        $('body').append(p);
    });
    });
});


// Get post with id of 10
$("#target2").click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:10}, function(result){
    console.log(result);
        
    result.forEach(function() {
        var p=$('<p></p>');
        p.text(JSON.stringify(result));
        $('body').append(p);
    });
    });
});

// Get the comments from post with id of 12 
// note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12
$("#target3").click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id:12}, function(data){
    console.log(data);
    data.forEach(function() {
        var p=$('<p></p>');
        p.text(JSON.stringify(data));
        $('body').append(p);
    });
    })
});



// Get all the posts from user with id of 2
$("#target4").click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:2}, function(data){
    console.log(data);
    data.forEach(function() {
        var p=$('<p></p>');
        p.text(JSON.stringify(data));
        $('body').append(p);
    });
    })
});

// Create a new post and log the id generated for it by the server
$("#target5").click(function() {
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {
    
	userId: 1,
	title: "this is a title",
	body: "This is the body"
}, function(data){
    console.log(data.id)
    data.forEach(function() {
        var p=$('<p></p>');
        p.text(JSON.stringify(data.id));
        $('body').append(p);
    });
});
});


// Replace the post with id of 12 and render the responseJSON

// $.ajax({
// 	method: 'PUT',
// 	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
// 	data: {
// 		userId: 1,
// 		title: "New Post",
// 		body: "New post added"
// 	},
// 	complete: function(response){
// 		console.log(response.responseJSON);
// 	}
// })


// Update the title of post with id of 12 and render responseJSON
// Delete the post with id of 12 and render a success message
// Display a list of posts.
// When the user clicks on a post, display all the comments from that post
// Display a link back to all posts