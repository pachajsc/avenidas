export const validateImagenFile = (files) => {
  let valideExtesion = /(.jpg|.jpeg|.png|.svg)$/i;
  if (files.length > 0) {
    for (const file of files) {
      if (valideExtesion.exec(file.name)) {
        return file.path;
      }
    }
  }
};