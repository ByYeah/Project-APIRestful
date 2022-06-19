const { Router } = require('express');
const { getEstados, getEstadoById, createEstado, updateEstadoById } = require('../controllers/estado');

const router = Router();

/**
 * Se obtienen todos los "estados" activos = (1)
 */
router.get('/', getEstados);

/**
 * Se obtiene un estado por su Id
 */
 router.get('/:id', getEstadoById);

/**
 * Se crea un estado (0/1)
 */
router.post('/', createEstado);

/**
 * Actualiza un estado por su Id
 */
router.put('/:id', updateEstadoById);

module.exports = router;