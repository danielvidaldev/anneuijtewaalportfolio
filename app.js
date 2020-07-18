$(document).ready(function(){
    $('.submit').click(function (event) {

        const email = $(".email").val();
        const name = $(".name").val();
        const message = $(".message").val();
        const statusElm = $(".status");
        statusElm.empty();

        if (name.length > 1) {
            console.log("ok name");
        } else {
            event.preventDefault();
            statusElm.append("<div>** Name is not valid</div>")
        }

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log("ok email");
        } else {
            event.preventDefault();
            statusElm.append("<div>** Email is not valid</div>")
        }

        if (message.length > 20) {
            console.log("ok message)");
        } else {
            event.preventDefault();
            statusElm.append("<div> ** Message is too short</div>");
        }
    });
});