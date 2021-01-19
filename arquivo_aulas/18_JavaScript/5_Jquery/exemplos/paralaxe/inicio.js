// JavaScript Document

		$(document).ready(function() {

			/*
			* Plugin intialization
			*/
			$('#pagepiling').pagepiling({
				menu: '#menu',
				anchors: ['page1', 'page2', 'page3', 'page4', 'page 5'],
				sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C', 'black'],
				navigation: {
					'position': 'right',
					'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Link Teste']
				},
				afterRender: function(){
					$('#pp-nav').addClass('custom');
				},
				afterLoad: function(anchorLink, index){
					if(index>1){
						$('#pp-nav').removeClass('custom');
					}else{
						$('#pp-nav').addClass('custom');
					}
				}
			});
		});
