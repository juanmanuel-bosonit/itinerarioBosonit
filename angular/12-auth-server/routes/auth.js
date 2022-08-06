const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

// Crear un nuevo usuario
router.post( '/new', [
    check('email', 'Email es un campo obligatorio').isEmail(), //Para saber todas las validaciones hay que ir al api de npm express validators
    check('password', 'La contraseña debe tener un mínimo de 6 caracteres').isLength({ min: 6 }),
    check('name', 'El nombre es un campo obligatorio').not().isEmpty(),
    validarCampos
], crearUsuario );

// Login de usuario
router.post( '/', [
    check('email', 'Email es un campo obligatorio').isEmail(), //Para saber todas las validaciones hay que ir al api de npm express validators
    check('password', 'La contraseña debe tener un mínimo de 6 caracteres').isLength({ min: 6 }),
    validarCampos
], loginUsuario );

// Validar y revalidar token
router.get( '/renew', validarJWT, revalidarToken );






module.exports = router;