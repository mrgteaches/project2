$(document).ready(function () {

    //click function for dynamically adding a row for data entry
    $(document).on("click", "i.add", function (event) {
        event.preventDefault();
        var rows = $('.form-table tbody  tr').length;
        var $tr = $(this).closest('tr');
        var tr = '<tr class="questAnswer" style="text-align: center;">' +
            '<td class="question"><input type="text" maxlength="100" name="term" class="form-control" placeholder="Add Term" required></td>' +
            '<td class="answer"><textarea  name="definition" class="form-control" placeholder="definition" required></textarea></td>' +
            '<td><i class="fa fa-minus"></i> &nbsp; <i class="fa fa-plus add"></i></td></tr>';
        $tr.after(tr);

        //adding buttons to add or remove row
        if (rows == 1)
            $(this).addClass('fa-minus').removeClass('fa-plus add');
        else
            $(this).remove();
    });
    $(document).on("click", "i.fa-minus", function () {
        var rows = $('.form-table tbody  tr').length;
        if (rows == 2) {
            $(this).parent().parent().prev().find('i.fa-minus').addClass('fa-plus add').removeClass('fa-minus');
        }
        $(this).parent().parent().remove();
    });

    //click event for deleting table data
    $(document).on("click", "#erase", function(){
        $.ajax({
            method: "DELETE",
            url: "/api"
        })
        .then(function(req,res) {
            $("#erase").addClass("animated fadeOut");
            res.render("index");
            });
        })

        //show erase button once data is saved again
        $(document).on("click", "#save", function(){
            $("#erase").removeClass("animated fadeOut")
        })
});