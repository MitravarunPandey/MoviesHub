
    function GoToHome() {
        debugger
    var term = document.getElementById("searchTerm").value;
    var currentPage = 1; 

    // Make the AJAX call
    $.ajax({
        type: "GET",
    url: "/Home/Index",
    data: {term: term, currentPage: currentPage },
    success: function (data) {debugger
        toastr.success('Welcome to Move Adda', 'Success');
            },
    error: function (xhr, status, error) {
        // Handle the error, such as displaying an error message
        console.error(xhr.responseText);
            }
        });
    }

