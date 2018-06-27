$(function(){

	console.log("ready");

	$('#addToCart').on('show.bs.modal', function (e) {
  		var btn = $(e.relatedTarget);
  		
  		$('#addToCart h3').text(btn.parents(".article").find(".article-title").text());
  		$('#addToCart p').text(btn.parents(".article").find(".description").text());
  		$('#aid').val(btn.data('aid'));
	});
	$('#addToCart').on('hide.bs.modal', function (e) {
		$('#addToCart h3').text("{nombre}");
  		$('#addToCart p').text("{descripcion}");
  		$('#aid').val('');
	});
	


});