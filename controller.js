function Controller(logService) {
    return logService.get()
        .then(
        function success(response) {
            /* This is executed */
            console.log("Controller success", response);
        },
        function failure(error) {
            console.log("Controller failure", error);
        }
    );
}

module.exports = Controller;
