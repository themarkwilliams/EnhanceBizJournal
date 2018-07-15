// ==UserScript==
// @name Enhance BizJournal
// @version 1.2
// @description "A user script to automatically bypass the paywall by marking the content as free."
// @match https://*.bizjournals.com/*
// @run-at document-start
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

GM_addStyle('.pre-chunks { display:block !important; }'); // 5/8/18

GM_addStyle('.js-pre-chunks__story-body { display:block !important; }'); // 7/14/18
