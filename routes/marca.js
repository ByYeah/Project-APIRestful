const { Router } = require('express');
const { getMarcas, getMarcaById, createMarca, updateMarcaById} = require('../controllers/marca');

const router = Router();

/**
 * Se obtienen todos las marcas activas = (1)
 */
router.get('/', getMarcas);

/**
 * Se obtiene una marca por su Id
 */
 router.get('/:id', getMarcaById);

/**
 * Crear una nueva marca
 */
router.post('/', createMarca);

/**
 * Actualiza una marca por Id
 */
router.put('/:id', updateMarcaById);

module.exports = router;