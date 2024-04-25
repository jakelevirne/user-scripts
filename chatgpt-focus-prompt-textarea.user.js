// ==UserScript==
// @name         ChatGPT Focus Prompt Textarea
// @namespace    http://jakelevirne.com/
// @version      0.1
// @description  Automatically focus the prompt input box on chat.openai.com when tabbing back to the browser window.
// @author       jakelevirne
// @match        *://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to focus the input box
    function focusPromptInput() {
        // Updated selector for the textarea with the specific id
        const inputSelector = 'textarea#prompt-textarea';
        const inputBox = document.querySelector(inputSelector);

        if (inputBox && document.activeElement !== inputBox) {
            inputBox.focus();
        }
    }


    // Listen for the window to gain focus
    window.addEventListener('focus', focusPromptInput);

})();
