			//数量加减
			(function() {
				var shownum = $('.search-num').val();
				$('.search-less').click(function() {
					if (shownum == 0) {
						shownum = 0;
					} else {
						shownum = shownum * 1 - 1;
					}
					$('.search-num').val(shownum);
				});
				$('.search-plus').click(function() {
					shownum = shownum * 1 + 1;
					$('.search-num').val(shownum);
				});
				$('.search-num').focus(function() {
					$('.search-num').css("background-color", "#FFFFCC");
				});
				$('.search-num').blur(function() {
					$('.search-num').css("background-color", "#ffffff");
					if (shownum != NaN) {
						$('.search-num').val(shownum);
					}
				});
			})();
