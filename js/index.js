
/* JS for DRUMS  */

$(function() {
    //SNARE
    var snareAudio = $('#snare-audio');
    var $snareHead = $('#snare-drum-head');
    var $snareAll = $('#snare');

        // Animate. new timeline, that's paused by default
        var snaretl = new TimelineMax({
          paused: true
        });

        // The animation tweens
        snaretl.to($snareHead, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
               .to($snareHead, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
               // The last tween, returns the element to it's original properties
               .to($snareHead, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

        function snare(){
            snaretl.restart();
            snaretl.play();
            var snareAudioEl = snareAudio.get(0);
            snareAudioEl.currentTime = 0;
            snareAudioEl.play();
        }   

        var clickTouchSnareDone = false;
        $snareAll.on("touchstart click", function() {
            if(!clickTouchSnareDone) {
                clickTouchSnareDone = true;
                setTimeout(function() {
                    clickTouchSnareDone = false;
                }, 100);
                snare();
                return false;
            }
        });  


    //leftTom
    var leftTomAudio = $('#left-tom-audio');
    var $leftTomHead = $('#tom-drum--left');
    var $leftTomAll = $leftTomHead.add('#tom-arm--left-top');

        // Animate. new timeline, that's paused by default
        var leftTomtl = new TimelineMax({
          paused: true
        });

        // The animation tweens
        leftTomtl.to($leftTomAll, 0.1, {rotation: -3, transformOrigin: "50% 100%", ease: Bounce.easeOut}, '0')
               // The last tween, returns the element to it's original properties
               .to($leftTomAll, 0.4, {rotation: 0, transformOrigin: "50% 100%", ease: Bounce.easeOut});

        function leftTom(){
            leftTomtl.restart();
            leftTomtl.play();
            var leftTomAudioEl = leftTomAudio.get(0);
            leftTomAudioEl.currentTime = 0;
            leftTomAudioEl.play();
        }   

        var clickTouchLeftTomDone = false;
        $leftTomAll.on("touchstart click", function() {
            if(!clickTouchSnareDone) {
                clickTouchSnareDone = true;
                setTimeout(function() {
                    clickTouchSnareDone = false;
                }, 100);
                leftTom();
                return false;
            }
        });  


    //rightTom
    var rightTomAudio = $('#right-tom-audio');
    var $rightTomHead = $('#tom-drum--right');
    var $rightTomAll = $rightTomHead.add('#tom-arm--right-top');      

        // Animate. new timeline, that's paused by default
        var rightTomtl = new TimelineMax({
          paused: true
        });

        // The animation tweens
        rightTomtl.to($rightTomAll, 0.1, {rotation: 3, transformOrigin: "50% 100%", ease: Bounce.easeOut}, '0')
               // The last tween, returns the element to it's original properties
               .to($rightTomAll, 0.4, {rotation: 0, transformOrigin: "50% 100%", ease: Bounce.easeOut});

        function rightTom(){
            rightTomtl.restart();
            rightTomtl.play();
            var rightTomAudioEl = rightTomAudio.get(0);
            rightTomAudioEl.currentTime = 0;
            rightTomAudioEl.play();
        }   

        var clickTouchLeftTomDone = false;
        $rightTomAll.on("touchstart click", function() {
            if(!clickTouchSnareDone) {
                clickTouchSnareDone = true;
                setTimeout(function() {
                    clickTouchSnareDone = false;
                }, 100);
                rightTom();
                return false;
            }
        });  


    //floorTom
    var floorTomAudio = $('#floor-tom-audio');
    var $floorTomHead = $('#floor-tom-head');
    var $floorTomAll = $('#floor-tom');        

        // Animate. new timeline, that's paused by default
        var floorTomtl = new TimelineMax({
          paused: true
        });

        // The animation tweens
        floorTomtl.to($floorTomAll, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
               .to($floorTomAll, 0.1, {scaleY: 0.93, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
               // The last tween, returns the element to it's original properties
               .to($floorTomAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

        function floorTom(){
            floorTomtl.restart();
            floorTomtl.play();
            var floorTomAudioEl = floorTomAudio.get(0);
            floorTomAudioEl.currentTime = 0;
            floorTomAudioEl.play();
        }   

        var clickTouchSnareDone = false;
        $floorTomAll.on("touchstart click", function() {
            if(!clickTouchSnareDone) {
                clickTouchSnareDone = true;
                setTimeout(function() {
                    clickTouchSnareDone = false;
                }, 100);
                floorTom();
                return false;
            }
        });  

    
    //bass
    var bassAudio = $('#bass-audio');
    var $bassHead = $('#bass-drum-head');
    var $bassAll = $('#bass-drum');  

        // Animate. new timeline, that's paused by default
        var basstl = new TimelineMax({
          paused: true
        });

        // The animation tweens
        basstl.to($bassAll, 0.1, {scaleX: 1.05, transformOrigin: "50% 50%", ease: Expo.easeOut})
               .to($bassAll, 0.1, {scaleY: 1.05, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
               // The last tween, returns the element to it's original properties
               .to($bassAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

        function bass(){
            basstl.restart();
            basstl.play();
            var bassAudioEl = bassAudio.get(0);
            bassAudioEl.currentTime = 0;
            bassAudioEl.play();
        }   

        var clickTouchSnareDone = false;
        $bassAll.on("touchstart click", function() {
            if(!clickTouchSnareDone) {
                clickTouchSnareDone = true;
                setTimeout(function() {
                    clickTouchSnareDone = false;
                }, 100);
                bass();
                return false;
            }
        });  

    
    //crash
    var crashAudio = $('#crash-audio');
    var $crashCymbal = $('#crash-cymbal');
    var $crashAll = $('#crash');        

        // Animate. new timeline, that's paused by default
        var crashtl = new TimelineMax({
          paused: true
        });

        // The animation tweens
        crashtl.to($crashCymbal, 0.1, {rotation: 8, transformOrigin: "50% 50%"})
           .to($crashCymbal,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

        function crash(){
            crashtl.restart();
            crashtl.play();
            var crashAudioEl = crashAudio.get(0);
            crashAudioEl.currentTime = 0;
            crashAudioEl.play();
        }   

        var clickTouchLeftTomDone = false;
        $crashAll.on("touchstart click", function() {
            if(!clickTouchSnareDone) {
                clickTouchSnareDone = true;
                setTimeout(function() {
                    clickTouchSnareDone = false;
                }, 100);
                crash();
                return false;
            }
        });  


    //hi-hat
    var hiHatAudio = $('#hi-hat-audio');
    var $hiHatCymbal = $('#hi-hat-cymbal');
    var $hiHatAll = $('#hi-hat');        

        
        // Animate. new timeline, that's paused by default
        var hiHattl = new TimelineMax({
          paused: true
        });

        // The animation tweens
        hiHattl.to($hiHatCymbal, 0.1, {rotation: 2, transformOrigin: "10% 10%"})
           .to($hiHatCymbal,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

        function hiHat(){
            hiHattl.restart();
            hiHattl.play();
            var hiHatAudioEl = hiHatAudio.get(0);
            hiHatAudioEl.currentTime = 0;
            hiHatAudioEl.play();
        }   

        var clickTouchLeftTomDone = false;
        $hiHatAll.on("touchstart click", function() {
            if(!clickTouchSnareDone) {
                clickTouchSnareDone = true;
                setTimeout(function() {
                    clickTouchSnareDone = false;
                }, 100);
                hiHat();
                return false;
            }
        });  
        // Key guide
        allKeys = $('#All-Keys');

        // Key timeline
        function animateKey(key) {
            keytl = new TimelineMax({
                paused: true
            });
            keytl.to(key, 0.1, {scale: 1.1, transformOrigin: "50% 50%", ease: Expo.easeOut})
            .to(key, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});
                        keytl.restart();
                        keytl.play();
        }

        // Show/hide keys
        $('#keys-btn').click(function() {
            allKeys.fadeToggle();
        });

        // Key triggers
        document.onkeydown = function(e) {
            thisKeyID = 'Key-' + e.keyCode;
            thisKey = $('#' + thisKeyID);
            switch (e.keyCode) {
                case 74:
                    hiHat();
                    animateKey(thisKey);
                    break;
                case 72:
                    snare();
                    animateKey(thisKey);
                    break;
                case 66:
                    bass();
                    animateKey(thisKey);
                    break;
                case 71:
                    floorTom();
                    animateKey(thisKey);
                    break;
                case 70:
                    crash();
                    animateKey(thisKey);
                    break;
                case 84:
                    leftTom();
                    animateKey(thisKey);
                    break;
                case 89:
                    rightTom();
                    animateKey(thisKey);
                    break;
            }
        };
    
});