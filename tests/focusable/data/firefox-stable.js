define(function defineDemoFocusableFirefox(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Firefox 39.0 on OS X 10.10",
      "layout": "Gecko",
      "manufacturer": null,
      "name": "Firefox",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:39.0) Gecko/20100101 Firefox/39.0",
      "version": "39.0",
      "os": {
        "architecture": 32,
        "family": "OS X",
        "version": "10.10"
      }
    },
    "focusable": [
      "HTML",
      "BODY",
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=password]",
      "input[type=password][tabindex=-1]",
      "input[type=checkbox]",
      "input[type=checkbox][tabindex=-1]",
      "input[type=radio]",
      "input[type=radio][tabindex=-1]",
      "input[type=submit]",
      "input[type=submit][tabindex=-1]",
      "input[type=reset]",
      "input[type=reset][tabindex=-1]",
      "select",
      "select[tabindex=-1]",
      "textarea",
      "textarea[tabindex=-1]",
      "button[type=button]",
      "button[type=button][tabindex=-1]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "area[href][tabindex=-1].upper",
      "area[href][tabindex=-1].lower",
      "img[tabindex=-1] area[href].upper",
      "img[tabindex=-1] area[href].lower",
      "a:has([ismap])",
      "a[tabindex=-1]:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "a > img[ismap][tabindex=-1]",
      "iframe",
      "iframe[tabindex=-1]",
      "audio[controls]",
      "audio[controls][tabindex=-1]",
      "video",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "embed",
      "embed[tabindex=-1]",
      "keygen",
      "keygen[tabindex=-1]",
      "details a[href]",
      "details[tabindex=-1]",
      "details a[href]",
      "details summary[tabindex=-1]",
      "details a[href]",
      "details[open] a[href]",
      "object[src=swf][tabindex=-1]",
      "object[src=svg]",
      "object[src=svg][tabindex=-1]",
      "object[src=svg][height=0]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[contenteditable][tabindex=-1]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=\"\"]",
      "[tabindex=hello]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}",
      "span{user-modify}[tabindex=-1]",
      "canvas > input",
      "canvas > input[tabindex=-1]",
      "canvas > a",
      "canvas > a[tabindex=-1]",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusEvents": [
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=password]",
      "input[type=password][tabindex=-1]",
      "input[type=checkbox]",
      "input[type=checkbox][tabindex=-1]",
      "input[type=radio]",
      "input[type=radio][tabindex=-1]",
      "input[type=submit]",
      "input[type=submit][tabindex=-1]",
      "input[type=reset]",
      "input[type=reset][tabindex=-1]",
      "select",
      "select[tabindex=-1]",
      "textarea",
      "textarea[tabindex=-1]",
      "button[type=button]",
      "button[type=button][tabindex=-1]",
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "area[href][tabindex=-1].upper",
      "area[href][tabindex=-1].lower",
      "img[tabindex=-1] area[href].upper",
      "img[tabindex=-1] area[href].lower",
      "a:has([ismap])",
      "a[tabindex=-1]:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "a > img[ismap][tabindex=-1]",
      "audio[controls]",
      "audio[controls][tabindex=-1]",
      "video",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "embed",
      "embed[tabindex=-1]",
      "keygen",
      "keygen[tabindex=-1]",
      "details a[href]",
      "details[tabindex=-1]",
      "details a[href]",
      "details summary[tabindex=-1]",
      "details a[href]",
      "details[open] a[href]",
      "object[src=swf][tabindex=-1]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[contenteditable][tabindex=-1]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=\"\"]",
      "[tabindex=hello]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}",
      "span{user-modify}[tabindex=-1]",
      "canvas > input",
      "canvas > input[tabindex=-1]",
      "canvas > a",
      "canvas > a[tabindex=-1]",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusRedirection": [
      "label[for=\"label-target\"] --- input[type=text]",
      "label[for=\"label-target-focusable\"] --- input[type=text][tabindex=-1]",
      "label[for=\"label-target\"][tabindex=-1] --- input[type=text]",
      "fieldset legend --- fieldset input"
    ],
    "noFocusMethod": [
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect",
      "svg[tabindex=-1]",
      "svg[tabindex=-1] a[xlink|href]",
      "svg[tabindex=-1] a[xlink|href] text",
      "svg text",
      "svg rect",
      "svg:has(a[tabindex=0])",
      "svg a[xlink|href][tabindex=0]",
      "svg a[xlink|href][tabindex=0] text",
      "svg text",
      "svg rect",
      "svg:has(a[tabindex=-1])",
      "svg a[xlink|href][tabindex=-1]",
      "svg a[xlink|href][tabindex=-1] text",
      "svg text",
      "svg rect"
    ],
    "tabOrder": [
      "HTML",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "label[tabindex=0]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "img[tabindex=-1] area[href].upper",
      "img[tabindex=-1] area[href].lower",
      "a:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "iframe",
      "audio[controls]",
      "video",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "embed",
      "embed[tabindex=-1]",
      "keygen",
      "details a[href]",
      "details[open] a[href]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "svg a[xlink|href]",
      "svg[tabindex=-1] a[xlink|href]",
      "svg a[xlink|href][tabindex=0]",
      "svg a[xlink|href][tabindex=-1]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "canvas > input",
      "canvas > a",
      "canvas > [tabindex=0]"
    ],
    "ally": {
      "focusable": [
        "HTML",
        "BODY",
        "input[type=text]",
        "input[type=text][tabindex=-1]",
        "input[type=password]",
        "input[type=password][tabindex=-1]",
        "input[type=checkbox]",
        "input[type=checkbox][tabindex=-1]",
        "input[type=radio]",
        "input[type=radio][tabindex=-1]",
        "input[type=submit]",
        "input[type=submit][tabindex=-1]",
        "input[type=reset]",
        "input[type=reset][tabindex=-1]",
        "select",
        "select[tabindex=-1]",
        "textarea",
        "textarea[tabindex=-1]",
        "button[type=button]",
        "button[type=button][tabindex=-1]",
        "label[tabindex=-1]",
        "label[tabindex=0]",
        "label[for=\"label-target\"][tabindex=-1]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "area[href][tabindex=-1].upper",
        "area[href][tabindex=-1].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "img[usemap][tabindex=-1]",
        "a:has([ismap])",
        "a[tabindex=-1]:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "a > img[ismap][tabindex=-1]",
        "iframe",
        "iframe[tabindex=-1]",
        "audio[controls]",
        "audio[controls][tabindex=-1]",
        "video",
        "video[controls]",
        "video[controls][tabindex=-1]",
        "embed",
        "embed[tabindex=-1]",
        "keygen",
        "keygen[tabindex=-1]",
        "details a[href]",
        "details[tabindex=-1]",
        "details a[href]",
        "details summary[tabindex=-1]",
        "details a[href]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][tabindex=-1]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][tabindex=-1]",
        "object[src=svg][height=0]",
        "svg[tabindex=-1]",
        "svg a[xlink|href][tabindex=0]",
        "svg a[xlink|href][tabindex=-1]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[contenteditable][tabindex=-1]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=hello]",
        "[tabindex=3 ]",
        "[tabindex=3x]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "[tabindex=\"-1\"]{flexbox}",
        "span{user-modify}[tabindex=-1]",
        "canvas > input",
        "canvas > input[tabindex=-1]",
        "canvas > a",
        "canvas > a[tabindex=-1]",
        "canvas > [tabindex=0]",
        "canvas > [tabindex=-1]"
      ],
      "tabOrder": [
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "[tabindex=3x]",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "label[tabindex=0]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "a:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "iframe",
        "audio[controls]",
        "video",
        "video[controls]",
        "keygen",
        "details a[href]",
        "details a[href]",
        "details a[href]",
        "details[open] a[href]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg[tabindex=-1]",
        "svg a[xlink|href][tabindex=0]",
        "svg a[xlink|href][tabindex=-1]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=0]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "canvas > input",
        "canvas > a",
        "canvas > [tabindex=0]"
      ]
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=text][tabindex=-1]",
        "input[type=password]",
        "input[type=password][tabindex=-1]",
        "input[type=checkbox]",
        "input[type=checkbox][tabindex=-1]",
        "input[type=radio]",
        "input[type=radio][tabindex=-1]",
        "input[type=submit]",
        "input[type=submit][tabindex=-1]",
        "input[type=reset]",
        "input[type=reset][tabindex=-1]",
        "select",
        "select[tabindex=-1]",
        "textarea",
        "textarea[tabindex=-1]",
        "button[type=button]",
        "button[type=button][tabindex=-1]",
        "label[tabindex=-1]",
        "label[tabindex=0]",
        "label[for=\"label-target\"][tabindex=-1]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "area[href][tabindex=-1].upper",
        "area[href][tabindex=-1].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "img[usemap][tabindex=-1]",
        "a:has([ismap])",
        "a[tabindex=-1]:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "a > img[ismap][tabindex=-1]",
        "iframe[tabindex=-1]",
        "audio[controls][tabindex=-1]",
        "video[controls][tabindex=-1]",
        "embed[tabindex=-1]",
        "keygen",
        "keygen[tabindex=-1]",
        "details a[href]",
        "details[tabindex=-1]",
        "details a[href]",
        "details summary[tabindex=-1]",
        "details a[href]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][tabindex=-1]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][tabindex=-1]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "svg a[xlink|href]",
        "svg[tabindex=-1]",
        "svg[tabindex=-1] a[xlink|href]",
        "svg a[xlink|href][tabindex=0]",
        "svg a[xlink|href][tabindex=-1]",
        "[contenteditable][tabindex=-1]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset[tabindex=-1][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "[tabindex=\"-1\"]{flexbox}",
        "span{user-modify}[tabindex=-1]",
        "canvas > input",
        "canvas > input[tabindex=-1]",
        "canvas > a",
        "canvas > a[tabindex=-1]",
        "canvas > [tabindex=0]",
        "canvas > [tabindex=-1]"
      ],
      "tabOrder": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "label[tabindex=0]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "a:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "keygen",
        "details a[href]",
        "details a[href]",
        "details a[href]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "svg a[xlink|href]",
        "svg[tabindex=-1] a[xlink|href]",
        "svg a[xlink|href][tabindex=0]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "canvas > input",
        "canvas > a",
        "canvas > [tabindex=0]"
      ]
    }
  };
});