roundNum = 0;

Template['Scoreboard'].rendered = function () 
{
    this.$("form").on("submit", function (e) { e.preventDefault() });
}

Template.Scoreboard.events({
    'click .addName':function(event)
    {
   		let name = $( "#Name").val();
   		if(name!='')
   		{
   			$('#scoreTable tbody').append('<tr class="name' + name + '"><td>' + name + '</td></tr>');
   		}
    },
    
    'click .addRound':function(event)
    {
    	if(roundNum==0)
    	{
    		roundNum++;
    		$('#scoreTable thead tr').append('<th class="round'+ roundNum +'">Round ' + roundNum + '</th><th>Total</th>');
    	}
    	else
    	{
    		roundNum++;
    		 $('#scoreTable thead tr th:last').before('<th class="round'+ roundNum +'">Round ' + roundNum + '</th>');

    	}
    },
});