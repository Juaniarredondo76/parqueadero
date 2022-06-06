import express from 'express'
export let rutas=express.Router()

//tutas para administradores
rutas.get('/api/v1/parqueadero/admi/:id/',buscartodos)
rutas.get('/api/v1/parqueadero/admins/',buscar-id)
rutas.post('/api/v1/parqueadero/admi/',insetar)
rutas.put('/api/v1/parqueadero/admi/:id/',editar)

//rutas para celdas
rutas.get('/api/v1/parqueadero/celdas/',buscartodos)
rutas.get('/api/v1/parqueadero/celda/:id/',buscar-id)
rutas.post('/api/v1/parqueadero/celda/',insetar)
rutas.put('/api/v1/parqueadero/celda/:id/',editar)

//rutas para vehiculos 
rutas.get('/api/v1/parqueadero/vehiculos/',buscartodos)
rutas.get('/api/v1/parqueadero/vehiculo/:id/',buscar-id)
rutas.post('/api/v1/parqueadero/vehiculo/',insetar)
rutas.put('/api/v1/parqueadero/vehiculo/:id/',editar)