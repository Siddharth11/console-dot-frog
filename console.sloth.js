/**
 *  Console.sloth. A better way to log!
 *    - Logs a sloth, saying your log... Yep!
 *
 */

(function dothething() {

  if( !window.console ) {
    // Well... nothing really... let it be!
    return;
  }

  window.console.sloth = function() {

    var i;
    
    // Taken from here - http://sloth.ascii.uk/

    var sloth = [
    				[`=====(((=))=====(=)))===========`],
    				[`      " \`,      |' /`],
    				[`     /"/        |""`],
    				[`     """|        \\"|`],
    				[`     |"||        " "`],
    				[`     "" "        |"|\\`],
    				[`    /""~\\.      /" ""~,`],
    				[`   ""~""""\`"",~\`~"!!"!" \\`],
    				[`   /"""""/""! "~""" "" "~",`],
    				[`  //\\""!!""~"!"!"\\"""/~!~, C~"~P`],
    				[` // !!"""""! "~ " !!"!! "," O o"~`],
    				[` ||   !!"!!~!!~||"  !     "" Y ""`],
    				[` \\\\     !  !  !            \`"U"'`],
    				[`  \\\\`],
    				[`   \\\\  0))`],
    				[`    \\\`-~/~`],
    				[`     \`~'`]
    			];

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.toString().split(',').join(', ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {  
      sloth[10] = sloth[10] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      sloth[11] = sloth[11] + " -(  " + stringOfArgs + "  )";
      sloth[12] = sloth[12] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }

    // Log the sloth!
    setTimeout(function() {
        for( i = 0; i < sloth.length; i++ ) {
            console.log(sloth[i] + "\n");
        }
    }, 500);
    
  }

  // console.log(console.sloth);
})();