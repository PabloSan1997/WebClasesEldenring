let archivo = fetch('https://my-json-server.typicode.com/PabloSan1997/ApiEldenringClases/db');

archivo.then(convertir=>convertir.json()).then(mijson=>generar(mijson)).catch((error)=>console.log(error));

