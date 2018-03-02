/*

	easyListSplitter 1.0.2 - jQuery Plugin
	Created by Andrea Cima Serniotti - http://www.madeincima.eu

*/


$(document).ready(function () {
	
		$('.loremipsum').easyListSplitter({ 
			colNumber: 3 // Insert here the number of columns you want. Consider that the plugin will create the number of cols requested only if there's enough items in the list.
		});
		
		$('#mylist').easyListSplitter({ 
			colNumber: 4 // Insert here the number of columns you want. Consider that the plugin will create the number of cols requested only if there are enough items in the list.
		});
		
		$('ol').easyListSplitter({ 
			colNumber: 5, // Insert here the number of columns you want. Consider that the plugin will create the number of cols requested only if there's enough items in the list.
			direction: 'horizontal'
		});
		
		$('.dolorsit').easyListSplitter({ 
			colNumber: 2, // Insert here the number of columns you want. Consider that the plugin will create the number of cols requested only if there's enough items in the list.
			direction: 'horizontal'
		});
		
		$('.children-sample').easyListSplitter({ 
			colNumber: 3 // Insert here the number of columns you want. Consider that the plugin will create the number of cols requested only if there's enough items in the list.
		});
});
