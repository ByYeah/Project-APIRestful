const { Router } = require('express');

const router = Router();

const { getUsuarios, createUsuario } = require('../controllers/usuario');

/**
 * Se obtienen todos los usuarios a cargo activos = (1)
 */
router.get('/', getUsuarios);

/**
 * Se obtiene un usuario por su Id
 */
 router.get('/:id', (req, res) => {
    res.json({});
});

/**
 * Crear un nuevo usuario
 */
router.post('/', createUsuario);

/**
 * Actualiza un usuario por su Id
 */
router.put('/:id', (req, res) => {
    res.json({});
});

/**
 * Actualiza un campo del usuario 
 */
router.patch('/:id', (req, res) => {
    res.json({});
});

/**
 * Suprime un usuario por Id
 */
 router.delete('/:id', (req, res) => {
    res.json({});
});

module.exports = router;