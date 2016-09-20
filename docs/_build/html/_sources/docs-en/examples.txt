.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _examples:

Button modes examples
==================================

Please see the key modes description and video examples.

.. raw:: html

	<div class="css">
		<style>
			.videoExample {
				display: inline-block;
				width: 100%;
				height: auto;
			}
			.videoItem {
				/*position: relative;*/
				width: 100%;
				height: auto;
				/*top: -750px;*/
				z-index: 1;
				/*margin-left: 26px;*/
			}
			#mainImage1, .mainImage1 {
				display: none;
			}
	</style>
	<script>
	function playVideo(thisItem) {
		thisItem.play();
	}
	</script>
	<div>

Default floating button
----------------------------------

Default Button – move the button with the thumb, hide it while shifting to the special spot, open ads with the click.

It appears in the new layer on the top of a web site (an application). Could be shifted over the screen.  Video, survey or banner opens with the click. Could be static or animated.

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/1-simple-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>
	
	<div id="probtn_additional_params" style="display: none;">{"domain":"probtn.com"}</div>
	<script src="//cdn.probtn.com/probtn_concat.js"></script>

Video Button
----------------------------------

Obtains all standard features plus opening the video with the click.  (could have manual or auto play, works on any mobile browsers).

Current mode is set with 
``"ButtonContentType":"video"``

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/2-video-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>

Scroll-zones Button
----------------------------------

Obtains all standard features plus may changes it’s image while scrolling the screen.  Page height is divided into several zones. The Button has different image (size and mode optionally) at different zone respectively.  

Current mode is set with ``"ButtonType":"button_and_scroll_zones"`` parameter and scroll zones settings ``ScrollZones``

.. raw:: html
	
	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/3-scroll-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>

Active-zones Button
----------------------------------

Obtains all standard features plus have several active zones which appear on the screen while shifting the button.  Superposition of the button and any of the zones activates the ad (survey or video).

Current mode is set with ``"ButtonType":"button_and_active_zones"`` parameter and active zones settings ``ActiveZones``.

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/4-activezones-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>

Menu Button
----------------------------------

Obtains all standard features plus shows menu upon the click (list, radial or round view).

Current mode is set with ``"ButtonType":"menu"`` parameter and active zones settings ``MenuItems``


.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/5-1-menu-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>
	<!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example2/menu/" frameborder="0" allowfullscreen></iframe>
    </div>-->
	
Also for menu is possible to enable radial menu, using param ``"MenuTemplateVariant":"radialcorner"``

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/5-2-radmenu-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>
    <!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example2/radmenu_param/" frameborder="0" allowfullscreen></iframe>
    </div>-->

Fullscreen
----------------------------------

Show ad page after the script loading ``ContentURL``.

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/6-fullscreen-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>
    <!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example/fullscreen_test/" frameborder="0" allowfullscreen></iframe>
    </div>-->
	
Smartbanner
----------------------------------

Smarbanner (Based on https://github.com/jasny/jquery.smartbanner ).

The banner appears within the set time at the top of the screen.  Offers to install an app. Works under iOS, Android and Windows. Provides all metrics.

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/7-smartbanner-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>
	<!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/smartbanner/android" frameborder="0" allowfullscreen></iframe>
    </div>-->

Button Animation
----------------------------------

Opacity
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The button changes its opacity within the set period of time. 

Using parameters:

- ``isAnimation``
- ``animationDuration``

Current animation is set as  ``isAnimation = opacity_0.5``
5 in a ``opacity_<final value>`` form.

Initial opacity value is set with ButtonOpacity parameter.

Demo link - http://demo.probtn.com/button_example/opacity_animation

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/8-1-opacity-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>
	
rollout 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
The button appears form the right/left edge of the screen during the scroll. 

Using parameters:

- ``isAnimation``
- ``animationDuration``

Current animation is set as ``isAnimation = rollout_left`` in a ``rollout_<side>`` form. The side can have the value ``left`` or ``right``. 

It is also possible to set the width of rollout ``rollout_<side>_<width>`` for example ``rollout``, ``rollout_left``, ``rollout_left_60``.


Demo links:

- http://demo.probtn.com/button_example2/rollout
- http://demo.probtn.com/button_example2/rollout/right/

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/8-2-rollout-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>
	
.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/8-3-rollout-right-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>

lookout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
The button appears from the edge of the screen and hides to within the set period of time.

Using parameters:
- ``isAnimation``
- ``animationDuration``

Current animation is set as ``isAnimation = lookout_left`` in a ``lookout_<side>`` form. The side can have the value ``left`` or ``right``. 

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/8-4-lookout-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>

forwardAndBack
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The button moves from the left edge of the screen to the right one and backward. 

Using parameters:

- ``isAnimation``
- ``animationDuration``

Example:

- http://demo.probtn.com/button_example2/forwardAndBack/

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/8-5-forwardAndBack-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>

forwardStopAndAway
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The button moves from the left edge of the screen, stops in the middle and moves further to the right one.

Duration for each step is set by ``animationDuration`` param.

Using parameters:

- ``isAnimation``
- ``animationDuration``

Example:

- http://demo.probtn.com/button_example2/forwardStopAndAway

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/en/8-6-forwardStopAndAway-eng_x264.mp4" type="video/mp4" />
		</video>
	</div>