/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();
         
         sym.play(0);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('Circle');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('Ball');
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ball1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("ball1");
   //Edge symbol end:'ball1'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
   })("logo");
   //Edge symbol end:'logo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1128601304");