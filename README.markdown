# overlabel

A jQuery plugin to help implement the over label technique described in [Making Compact Forms More Accessible by Mike Brittain on ALA](http://alistapart.com/articles/makingcompactformsmoreaccessible).

No settings, nothing fancy, just select one or more label elements that have a for attribute pointing to the correct input and done. Oh and add a little CSS. The plugin adds a class of "overlabel" to each label element.

When the user puts focus on the input, the label will be hidden. When the input is blurred and has no value, the label will be shown again. Just need to write the CSS based on your DOM structure to position the label over the element correctly.

Here is an example of what the CSS might look like (taken from the ALA article):

    label.overlabel {
        position:absolute;
        top:3px;
        left:5px;
        z-index:1;
        color:#999;
      }

In order for the above CSS to work, you'll need a parent element with position (other than static position).

Here is an example of the JS.

    // select labels for text inputs, assuming the label is directly before the input
    $('form input[type=text]').prev('label').overlabel();

Or why not just call overlabel() on the inputs?

    $('form input:text').overlabel();

## License

The overlabel plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2010 [Brandon Aaron](http://brandonaaron.net)