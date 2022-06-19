const { Router } = require('express');
const { getInventarios, getInventarioByID, createInventario, updateInventario, uploadImage, getFotoById} = require('../controllers/inventario');

const router = Router();

/**
 * Se obtienen todos los inventarios
 */
router.get('/', getInventarios);

/**
 * Se obtiene un inventario por su Id
 */
 router.get('/:id', getInventarioByID);

/**
 * Crear un nuevo inventario
 */
router.post('/', createInventario);

/**
 * Actualiza un inventario por su Id
 */
router.put('/:id', updateInventario);

/**
 * Sube foto en el campo de "foto" del inventario
 */
router.post('/:id/upload-image', uploadImage);

/**
 * Se obtiene foto subida, del inventario
 */
router.get('/:id/image', getFotoById);

module.exports = router;