// jquery

$(document).ready(function() {
   
    $('#inline').datepicker({
		altField: "#datepicker",
		minDate: "+1"
    });
    
    $('.mainForm').on("submit", function(e) {
        e.preventDefault();
        $('h3.CNTHeadText').text("Form submitted. Thank you");
        $('.CNTformDiv').hide();
        
    })
    
});
