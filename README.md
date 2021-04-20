# Test de OpenBank
Este proyecto contiene la prueba técnica para la candidatura front-end a OpenBank realizada por Gabriel Cuétara.

## Dependencias

### Material-UI

La principal dependencia como framework de UI es `Material-UI`. Se ha decidido utilizar esta herramienta ya que es una forma fácil y eficaz de implementar componentes que siguien una [guía de diseño establecida](https://material.io/design) sin tener que crear un boilerplate desde cero. También incluye una serie de [útiles herramientas para trabajar responsivamente](https://material-ui.com/components/use-media-query/#using-material-uis-breakpoint-helpers).

La instalación se ha hecho siguiendo la [documentación oficial](https://material-ui.com/getting-started/installation/).

### Redux Toolkit

En lugar de utilizar Redux plano o con otros middlewares, se ha decidido utilizar [Redux toolkit](#). Se ha optado por esta herramienta para abordar tres preocupaciones comunes sobre Redux:
- Configurar una store de redux puede ser sintácticamente complejo.
- Hay que instalar múltiples paquetes para que Redux comience a funcionar.
- Redux requiere bastante código repetitivo.

Debido a las constricciones de tiempo, se ha optado por Redux Toolkit. En otras circunstancias, se podría haber planteado el uso de `redux-thunk`, por ejemplo.