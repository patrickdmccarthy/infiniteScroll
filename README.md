#infiniteScroll

#####Angular Directive for adding infinite-scroll capabilities to lists and tables

This repo contains a code sample of an infinite-scrolling list built using AngularJS.

There are two parts to this directive, the Event Listener and the AJAX call.

###Event Listener  
Using the Angular directive's link function, I bound an event listener to the element (an unordered list in my case, but easily substitutable for a table or ordered list).
On each scroll, I make a comparison of the element's scrollTop value (y-value for where content becomes visible) plus the element's offsetHeight (y-value for height of box above the scrollTop value, out of view of the box) and compare them to the scrollHeight (total height) of the element.  
If these values are equal, the ajax call is made, and scope.$apply is used to update the bindings of the list.

###AJAX Call
As can be seen in index.html, there is an attribute called ajax-call is passed a function.  In the directive, we gave this attribute isolate scope, so that it won't conflict with other elements that we use this directive with.
The ajax-call attribute can be passed any function, so I've passed it "main.loadItems()" so that I can fetch some more numbers  every time I scroll to the bottom of the box, but more commonly you would make a request to the server to fetch more of the appropriate data.

