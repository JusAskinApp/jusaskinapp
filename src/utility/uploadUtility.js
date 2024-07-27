export const uploadFiles = async (files) => {
    debugger;
    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files[]", file);
      });
      let promise = new Promise((resolve, reject) => {
        fetch("https://jusaskin.herokuapp.com/api/resources/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            resolve(data["fileUrls"]);
          })
          .catch((error) => {
            console.error(error);
            resolve([]);
          });
        // resolve(true);
      });
      return promise;
    } else {
      return true;
    }
  };