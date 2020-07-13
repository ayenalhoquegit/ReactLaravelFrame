var Pagination=function(){
	var handlePagination=function(){
		//handling Pagination on first onload
		$('ul.pagination li a').click(function(e){
			emlUrl=$(this).attr('html');
			handleLoadingPage(emlUrl);
			e.preventDefault();
		})
	}
	var handleLoadingPage=function(emlUrl){
		$('#postList-nationality').load(emlUrl,function(data){
			handlePagination();
		})
	}
	return{
		init:function(){
			handlePagination();
		}
	}
}();



