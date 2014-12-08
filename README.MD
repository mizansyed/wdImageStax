WD_ImageStax by With Digital (@mizansyed)
======================================
Version: 0.5 Beta

Stack/pile photos or images and shuffle on rotate.

## Installation

Add jquery library to your webpage:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

Add jquery.wdImageStax.min.js, after the above line:

    <script src="jquery.wdImageStax.min.js"></script>

Optional: Add wdImageStax.css:

    <link href="css/wdImageStax.css" rel="stylesheet">

## Usage
	
	/* place inside a wrapper */
	<div id="gallery-wrapper">
		<ul>
			<li><img src="1.jpg" /></li>
			<li><img src="2.jpg" /></li>
			<li><img src="3.jpg" /></li>
		</ul>
	</div>

    $(document).ready(function() {
        $('#gallery-wrapper').wdImageStax({height:500});

        //or 
        //with default options
        $('#gallery-wrapper').wdImageStax();
    });

The following options are available (default shown below) :

      height: 500 (do not add units e.g. px), default is false;
      width: 500 (do not add units e.g. px, default is false;
      list: "name-of-your-ul-class", default is false which will use the child ul it finds;
      index: z-index value for your image stack to start with, default is 1200;
      degree: maximum degree your image stack will be rotated, default is 20;
      animateSpeed: the speed of rotate and shuffle in milliseconds, default is 500;
      evaluateOnWindowResize: adjust the animation area if the window is resized, default is true

See example/index.html for usage

