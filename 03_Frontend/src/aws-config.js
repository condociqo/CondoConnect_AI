// Configuración Maestra de CondoConnect AI
// Aquí irán las URLs y llaves cuando subamos a la nube.

const AWS_CONFIG = {
    // 1. Identidad y Accesos (Cognito)
    COGNITO_REGION: "us-east-1",
    COGNITO_USER_POOL_ID: "Por_Definir_En_AWS",
    COGNITO_APP_CLIENT_ID: "Por_Definir_En_AWS",

    // 2. Cerebro de Marina (API Gateway / Lambdas)
    // Mientras probamos en tu compu, usamos localhost. 
    // Cuando subamos a la nube, cambiaremos esto por la URL de Amazon.
    API_ENDPOINT: "http://localhost:3000/dev/api/v1",

    // 3. Conexiones Externas (Stripe / MercadoPago)
    STRIPE_PUBLIC_KEY: "pk_test_tu_llave_publica_aqui",
    
    // 4. Parámetros de la App
    APP_VERSION: "1.0.0",
    MODO_OFFLINE_ACTIVO: true
};

export default AWS_CONFIG;