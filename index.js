import app from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config()

/* const PORT = process.env.PORT_EXPRESS;
 */
const PORT = process.env.DB_PORT;

app.listen(PORT, () => {
    console.log(`Servicio funcionando en el puerto ${PORT}`);
});