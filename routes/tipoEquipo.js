const { Router } = require('express');
const { getTiposEquipo, getTiposEquipoUserActivo, createTipoEquipo, getTiposEquipoById, updateTipoEquipoById, deleteTipoEquipoByID } = require('../controllers/tipoEquipo');

const router = Router();

/**
 * Se obtienen todos los tipos de equipos los cuales los usuarios
 * son activos = (1)
 */
router.get('/user-activo', getTiposEquipoUserActivo);

/**
 * Se obtienen todos los tipos de equipos (Ordenador/Movil)
 */
router.get('/', getTiposEquipo);

/**
 * Se obtiene un tipo de equipo por su Id
 */
 router.get('/:id', getTiposEquipoById);

/**
 * Crear un nuevo tipo de equipo
 */
router.post('/', createTipoEquipo);

/**
 * Actualiza un tipo de equipo existente por su Id
 */
router.put('/:id', updateTipoEquipoById);

/**
 * Actualiza un campo del tipo de equipo
 */
router.patch('/:id', (req, res) => {
    res.json({});
});

/**
 * Suprime un tipo de equipo por Id
 */
 router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;