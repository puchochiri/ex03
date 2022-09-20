console.log("Reply Module........");

var replyService = (function(){
	//http://localhost:9094/board/get?pageNum=1&amount=10&type=&keyword=&bno=314
	function add(reply, callback, error) {
		console.log("add reply.............");
		
		$.ajax({
			type : 'post',
			url	 : '/replies/new',
			data: JSON.stringify(reply),
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr) {
				if (callback) {
					callback(result);
				}
			},
			error : function(xhr, status, er) {
				if(error) {
					error(er);
				}
			}
			
		})
	}
	
	return {
		add:add
		};
})();