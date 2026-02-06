

----------
/*CREATE TABLE programa(
    id_programa SERIAL PRIMARY key, -- Serial= # automatico, 1,2,3
    nombre VARCHAR (100) NOT NULL UNIQUE -- Obligatorio y unicode_assigned
);*/

-- Insertar datos en tabla programa 
INSERT INTO programa (nombre) VALUES
('Ingenieria de Sistemas'),
('Derecho');

SELECT * FROM programa

----------------------------------------
-- Tabla estudiante --
-- Relacion de 1 a muchos
----------------------------------------
/*CREATE TABLE estudiante (
    id_estudiante SERIAL PRIMARY key, --pk estudiante
    nombre VARCHAR(100) NOT NULL,
    numero_documento VARCHAR(50),
    email VARCHAR(120) NOT NULL UNIQUE,
    id_programa INT NOT NULL,

    CONSTRAINT fk_estudiante_programa --nombre de la regla
    FOREIGN KEY (id_programa) 
    REFERENCES programa(id_programa)
    ON DELETE RESTRICT -- Previene borrar un programa si tiene estudiante
)*/
/*INSERT INTO estudiante(nombre, email, id_programa) VALUES
('Tania', 'tatiana@gmail.com',1)*/

SELECT *FROM estudiante;
INSERT INTO estudiante(nombre, email, id_programa) VALUES
('Ella', 'Ella@gmail.com',2)