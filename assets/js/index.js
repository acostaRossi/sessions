
(() => {

    let baseUrl = "http://10.211.55.3/sessions/";

    function startSession() {
        let formData = new FormData();
        formData.append("username", "acosta@itisrossi.vi.it");
        formData.append("password", "Passw0rd");

       let requestOptions = {
           method: 'POST',
           body: formData
       };

       fetch(baseUrl + "start-session.php", requestOptions)
           .then(response => response.json())
           .then(result => {
               if(result.success) {
                   window.alert(result.msg);
               }
           })
           .catch(error => console.log('error', error));
   }

    function getSecretUserData() {

        fetch(baseUrl + "get-secret-user-data.php")
            .then(response => {
                if(response.status === 200)
                    return response.json();
                if(response.status === 401) {
                    window.alert("You are not authorized.");
                    throw new Error(`Status Code: ${response.status} ${response.statusText}`);
                }
            })
            .then(result => {
                if(result.success) {
                    window.alert(result.msg);
                }
            })
            .catch(error => console.log('error', error));
    }

    function destroySession() {

        let requestOptions = {
            method: 'POST'
        };

        fetch(baseUrl + "destroy-session.php", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.success) {
                    window.alert(result.msg);
                }
            })
            .catch(error => console.log('error', error));
    }

    function getDataSession() {

        fetch(baseUrl + "get-data-session.php")
            .then(response => response.json())
            .then(result => {
                if(result.success) {
                    window.alert(result.msg);
                }
            })
            .catch(error => console.log('error', error));
    }

    document.getElementById("btn-start-session").addEventListener("click", startSession);

    document.getElementById("btn-get-secret-user-data").addEventListener("click", getSecretUserData);

    document.getElementById("btn-destroy-session").addEventListener("click", destroySession);

    document.getElementById("btn-get-data-session").addEventListener("click", getDataSession);



})();
