			var scrtime;
			var stopScroll = false;
			var lastId = '';
			
			$(function() {
				changeSize();
				window.onresize = changeSize;
				var lId = $.query.get('lastId');
				if(lId && lId != '') {
					lastId = lId;
				}
				var fectchtime = setInterval(function(){
					$.ajax({
						url: '/message/get',
						data: 'lastId=' + lastId,
						type: 'POST',
						dataType: 'json',
						cache: false,
						success: function(ret) {
							if(ret && ret.length > 0) {
								$(ret).each(function(i, msg) {
									var lastDiv = $('#smsContent').find('div[id="div' + lastId + '"]');
									if(lastDiv.length == 0) {
										$('<div id="div' + msg.id + '"><table cellspacing="5" cellpadding="5"><tr><td valign="bottom" align="center"><h2>' + msg.sender + '</h2><img src="' + msg.avatar +'" width="100px" height="100px"/></td><td><table cellspacing="0" cellpadding="0"><tr><td class="btl"></td><td class="bt"></td><td class="btr"></td></tr><tr><td class="bcl"></td><td class="bc"><h1>' + msg.content + '</h1></td><td class="bcr"></td></tr><tr><td class="bbl"></td><td class="bb"></td><td class="bbr"></td></tr></table></td></tr></table><hr /></div>').appendTo('#smsContent');	
									}
									else {
										$('<div id="div' + msg.id + '"><table cellspacing="5" cellpadding="5"><tr><td valign="bottom" align="center"><h2>' + msg.sender + '</h2><img src="' + msg.avatar + '" width="100px" height="100px"/></td><td><table cellspacing="0" cellpadding="0"><tr><td class="btl"></td><td class="bt"></td><td class="btr"></td></tr><tr><td class="bcl"></td><td class="bc"><h1>' + msg.content + '</h1></td><td class="bcr"></td></tr><tr><td class="bbl"></td><td class="bb"></td><td class="bbr"></td></tr></table></td></tr></table><hr /></div>').insertBefore(lastDiv);	
									}
									lastId = msg.id;
								});
							}
						},
						error: function(req, status, err) {
							alert(req.responseText);
						}
					});
				}, 10000);

				$('#smsContent').hover(function() {
					clearInterval(scrtime);
				}, function() {
					scrtime = setInterval(function(){
						if(!stopScroll) {
							var con = $('#smsContent');
							var totalHeight = 0;
							$('#smsContent div').each(function(i, div){
								totalHeight += $(div).height();
								if(i == $('#smsContent div').length - 1) {
									if(totalHeight > con.height()) {
										var tableHeight = con.find('div:last').height();
										con.animate({marginTop: tableHeight + 40 + 'px'}, 1000, function() {
											con.find('div:last').prependTo(con);
											con.find('div:first').hide();
											con.css({marginTop: 0});
											con.find('div:first').fadeIn(1000);
										});
									}
								}
							});
							
						}
					}, 8000);
				}).trigger('mouseleave');
			});

			function changeSize() {
				$('#smsContent').width(($(window).width() - $('#sideBar').width() - 20) + 'px');
				$('#sideBar').height($(window).height() + 'px');
				$('#smsContent').height($(window).height() + 'px');
			}