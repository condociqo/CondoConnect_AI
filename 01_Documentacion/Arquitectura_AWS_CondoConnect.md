# 🏗️ Arquitectura Cloud - CondoConnect AI ♾️
**Nivel de Seguridad:** Grado Empresarial (ISO 27001)

## 1. Interfaz de Usuario (El "Frontend")
* **AWS Amplify:** Aquí alojaremos la plataforma web y la app. Ya tienes tu dominio `condoconnect.com` apuntando aquí. Es rápido y escala solo.

## 2. Ciberseguridad e Identidad (El "Cadenero")
* **Amazon Cognito:** Controla quién entra. 
    * Manejará el login con Google, Mercado Libre, contraseñas y SMS (2FA). 
    * Separa los perfiles: Si entra un guardia, no le muestra los botones del administrador.

## 3. Inteligencia Artificial (El "Cerebro de Marina")
* **Amazon Rekognition:** Analiza los videos de CCTV en tiempo real, lee placas de autos y reconoce rostros de guardias para el pase de lista.
* **Amazon Transcribe & Lex:** Escucha la voz del guardia en las bitácoras y entiende lo que le dicen en el Kiosco de Visitantes.
* **Amazon Polly:** Le da la voz femenina, profesional y cálida a Marina.

## 4. Servidores y Motores (El "Backend Serverless")
* **AWS Lambda:** Son las "manos" del sistema. No pagamos por servidores encendidos 24/7. Lambda cobra por milisegundos. Cuando alguien escanea un código de Amazon, Lambda calcula la comisión, envía los datos a la base de datos y se apaga.
* **Amazon API Gateway:** Es el puente que conecta el celular del guardia con las funciones Lambda de manera segura.

## 5. Bases de Datos (La "Memoria Inmortal")
* **Amazon DynamoDB:** Súper rápida. Aquí guardamos cosas de lectura inmediata: Bitácoras de guardias, alertas SOS, mensajes de WhatsApp y estados de puerta.
* **Amazon RDS (PostgreSQL):** Base de datos relacional estricta. Aquí guardamos el dinero: Mantenimientos, facturación, cuentas bancarias, pagos de guardias y la monetización de paquetería.

## 6. Internet de las Cosas (El "Músculo")
* **AWS IoT Core:** Conecta la nube con los motores físicos de las puertas, barreras vehiculares y torniquetes del corporativo.