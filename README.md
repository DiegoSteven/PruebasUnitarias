# Proyecto Backend y Frontend

Este proyecto consiste en una aplicación que tiene tanto un backend como un frontend que interactúan con una base de datos MySQL.

## Backend

### Requisitos

1. **Crea un archivo `.env`** con el siguiente contenido:

    ```env
    DB_HOST = 127.0.0.1
    DB_USER = YOUR_DB_USER
    DB_PASSWORD = YOUR_DB_PASSWORD
    DB_DATABASE = prowess_mentorias
    DB_PORT = 3306
    PORT = 3001
    ACCESS_TOKEN_SECRET = 3e9af42de397cfc9387a06972c28c23a1ac7e9a60fb6dc1f05295bc6057baf500672d4a13db5d04ea84bbc4c5679164a7723f3d49f516bb73dc3df6e3b768c8e
    REFRESH_TOKEN_SECRET = 56a6d157ad7d2ee09e480960ae857e528ae546d156f47433b1afad162311c45aa520697b65d13a5c72891f6145ab1f2675886fc124027dc95f86073dd8fe1462
    ```

    Asegúrate de reemplazar `YOUR_DB_USER` y `YOUR_DB_PASSWORD` con los datos correctos de tu base de datos.

2. **Instalar las dependencias**:

    Navega a la carpeta del backend y ejecuta el siguiente comando:

    ```bash
    npm install
    ```

3. **Iniciar el servidor**:

    Para iniciar el servidor backend, ejecuta:

    ```bash
    npm start
    ```

## Frontend

### Requisitos

1. **Instalar las dependencias**:

    Navega a la carpeta del frontend y ejecuta:

    ```bash
    npm install
    ```

2. **Iniciar el servidor**:

    Para iniciar el servidor frontend, ejecuta:

    ```bash
    npm start
    ```

## Base de Datos

### Preparación de la base de datos

1. **Acceder al panel de administración de MySQL**:

    Abre tu herramienta de administración de base de datos (por ejemplo, XAMPP o cualquier otra herramienta que uses para gestionar MySQL).

2. **Ejecutar el script SQL**:

    Dirígete a la carpeta `./database` en el proyecto y ejecuta el archivo `.sql` que se encuentra allí para crear las tablas necesarias en tu base de datos.

---

Con estos pasos, tanto el backend como el frontend deberían estar configurados y funcionando correctamente. Si tienes alguna pregunta o encuentras problemas, no dudes en contactar.

