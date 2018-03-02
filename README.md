# jQuery plugin: Easy List Splitter

[https://www.madeincima.it](https://www.madeincima.it "https://www.madeincima.it")

## What is it?
Easy List Splitter is jQuery plugin to **columnize lists**.

To keep it as **simple and flexible** as possible **I didn’t set any CSS rules** or column widths in the JavaScript. The plugin simply generates clean and **valid HTML** code that you can then style as you wish, floating the lists or doing whatever you like.

The plugin will get your list, wrap it into a container div, **generate as many lists as the number of columns you require and evenly split the list items** into the different list elements. If the list items are not enough to evenly fill in all the columns, the plugin will hide the columns in excess (this might happen only if you’re ordering your list items vertically as per default).

## Features
* **Split any ordered (OL) or unordered (UL) list**
* **Define the number of columns** in which you want your lists to be split
* **Target more than one list** on the same page and set different number of columns for each of them
* **CSS is completely separated** from the javascript. You can either modify the default one or create your own
* A **class “last” will be added to each last UL or OL** so that you can easily remove side padding or margin
* NEW: Easy List Splitter Plugin **preserves nested lists now**!
* NEW: You can now **choose whether to order your list items vertically or horizontally**
* There is **no need to modify your HTML**. Just target your list element using any of the JQuery-selectors.
* **No dependencies** at all!
* Plugin **size 4KB**!

## Usage
You **can target any list elements** using the powerful JQuery-selectors. The plugin requires **one argument only**, the **column number**. Here is a sample that shows you how to activate the plugin using a class. Bare in mind that you can also target the list element straight away (eg. $(‘ul’)). If you don’t set the colNumber argument, the plugin will generate two columns by default:
```javascript
$('.my-list').easyListSplitter({ colNumber: 3 });
```
Also, if you don’t specify the **direction parameter**, the plugin will **order the list items vertically by default**.
Otherwhise:
```javascript
$('.my-list').easyListSplitter({
   colNumber: 3,
   direction: 'horizontal'
});
```
