WD_ImageStax by With Digital (@mizansyed - Mizan Syed)
======================================
Version: 0.7 Beta

Stack/pile/scatter photos or images and shuffle on rotate.

## Installation

Add jquery library to your webpage:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>

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
      centreImages: whether to centre the images. Default is false;
      index: z-index value for your image stack to start with, default is 1200;
      degree: maximum degree your image stack will be rotated/scattered, default is 20;
      degreePattern: the pattern it should rotate/scatter the image. The choices are "default" or "random", with former will rotate by same degree value increment;
      animateSpeed: the speed of rotate and shuffle in milliseconds, default is 500;
      swingTop: the height of the swing, in relation to the size of the image. The default is 0.4 (1 would represent 100% of the height);
      swingLeft: the length of the swing to the left, in relation to the size of the image. The default is 0.6 (1 would represent 100% of the height);
      evaluateOnWindowResize: adjust the animation area if the window is resized, default is true;
      wrapperStyles: styles for the gallery selector/element, default is empty {}
      imageStyles: styles for each of the images, default is empty {}