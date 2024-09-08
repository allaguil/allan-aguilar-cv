
## Que es un Contexto?
- Es un Contenedor de información que está a un nivel superior que permite a sus Componentes hijos acceder a la información.
- Necesitamos de un Contexto para poder compartir información entre Componentes de una manera Global, evitando la necesidad de pasar datos manualmente a través de componentes por medio de props.

## useContext Hook
- Se usa para manejar el estado global de la aplicación.
- useContext( ) = Se utiliza en conjunto con createContext( ) y el .Provider
- createContext( ) = Se usa para crear un contexto que contiene el estado o valor que quieres compartir entre componentes sin tener que pasar props manualmente.
- Provider( ) = El componente Provider se utiliza para envolver los componentes que necesitan acceder al contexto. Le pasas un value={ } al Provider, y ese value={ } estará disponible para todos los componentes dentro de ese árbol que utilicen useContext.

### Que significa la propiedad {children} dentro de un Functional Component que actúa como Provider ?
- La propiedad {children} son todos esos componentes hijos que están envueltos dentro del Provider cuando lo usas en tu JSX.

## Pasos para crear el NavContext

1. Define el propósito del contexto.
- En este caso, la ruta actual de la aplicación, el estado de la navegación.
2. Especifica el estado y las funciones necesarias. (useState hook).
- Un estado para almacenar la ruta actual (navState).
- Una función para actualizar este estado (setNavState).
3. Crea una interfaz (si estás usando TypeScript) para definir la forma del contexto.
- navState es de tipo string.
- setNavState toma un string (window.location.pathname) y no devuelve nada (void).
4. Crea el contexto con createContext y un valor predeterminado (como undefined si es necesario).
- En muchos casos, es útil inicializarlo como undefined.
5. Implementa el proveedor del contexto que gestiona el estado y proporciona el valor a los componentes hijos.
- NavProvider maneja el estado navState y la función setNavState.
- Y proporciona estos valores a través de NavContext.Provider con el uso de la propiedad "value" que es la que define el valor del contexto que se pasará a los componentes hijos.
6. Crea un hook personalizado para acceder al contexto y manejar errores si el contexto no está disponible.
- Este hook permite a los componentes acceder al estado de navegación y la función para actualizarlo, y lanza un error si se usa fuera de un "NavProvider", que es el Componente que envuelve a todos sus componentes hijos en "CvApp".
