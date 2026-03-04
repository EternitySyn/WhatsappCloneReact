# Proyecto Web React
## Proyecto React, HTML y CSS simulando ser whatsapp ahora con login y register simple.

Como correr localmente:
Descargar projecto, abrir en VSC (Visual Studio Code o Otras apps de Coding) y usando la consola de Git Bash Correr usando: npm run dev, en caso de no andar correr npm install para las dependencias, luego dirijirse a la pagina obtenida por consola.

Como deployar:
Se usa Vercel con url del repositorio de github como deployer.

Estructura principal:
Views: contiene todas las routes con su html y logica interna.
Styles: contiene el css que styliza todas las paginas.
Services: contiene la api de prueba de donde se saca la user data.
Router: maneja las urls permitidas del proyecto.
Context: maneja todos los procesos de log in, log out y busqueda de usuarios.
Components: contiene los componentes importantes para la pagina principal y la ruta protegida.