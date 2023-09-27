# LO-TIENES-CRUDO
## Desarrollar una aplicación "CRUD" Web en Java que permita pedir cita a los desarrolladores y equipos para solucionar problemas técnicos con la ayuda de desarrolladores de una empresa que se dedica a apagar incendios de código.
## Esta parte se corresponde con el front-end con el diseño realizado en React, Html, Css, Javascript.
## La prte del backend se puede encontrar en este repositorio: https://github.com/ALABERTUS/Lo_tienes_CRUDo.git

## Instalar React + Vite
```
npm create vite@latest project-name

npm install axios

npm install react-router-dom

npm install react-icons
```

## Iniciar el servidor de desrrollo

```
npm run dev

```

## Configuar Router
```
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(

<React.StrictMode>
  
<BrowserRouter>
    
<App />
      
</BrowserRouter>
    
</React.StrictMode>
  
);
```



