DROP table if exist user;
CREATE TABLE user (
    id int primary key NOT NULL AUTO_INCREMENT,
    nom VARCHAR(80) NOT NULL,
    prénom VARCHAR(80) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(80) NOT NULL,
    is_admin BOOLEAN NOT NULL,
    date_de_naissance DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE event (
    id int primary key NOT NULL AUTO_INCREMENT,
    city VARCHAR(80) NOT NULL,
    date DATE NOT NULL,
    address VARCHAR(250) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE stockEvent (
    id int primary key NOT NULL AUTO_INCREMENT,
    event_id INT NOT NULL,
    CONSTRAINT fk_stockEvent_event_id FOREIGN KEY (event_id) REFERENCES event(id),
    user_id INT NOT NULL,
    CONSTRAINT fk_stockEvent_user_id FOREIGN KEY (user_id) REFERENCES user(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE note (
    id INT NOT NULL AUTO_INCREMENT,
    note_physique DECIMAL(5, 2),
    note_vitesse DECIMAL(5, 2),
    note_passe DECIMAL(5, 2),
    note_tir DECIMAL(5, 2),
    note_dribble DECIMAL(5, 2),
    note_vista DECIMAL(5, 2),
    note_cf DECIMAL(5, 2),
    note_plongeon DECIMAL(5, 2),
    note_arrets DECIMAL(5, 2),
    note_dega DECIMAL(5, 2),
    note_pied_faible DECIMAL(5, 2),
    note_gen DECIMAL(5, 2),
    user_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE SCORE_CARD (
    id INT NOT NULL AUTO_INCREMENT,
    photo_user VARCHAR(250),
    note_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (note_id) REFERENCES note(id)
);
-- Données pour la table 'user'
INSERT INTO user (
        nom,
        prénom,
        email,
        password,
        is_admin,
        date_de_naissance
    )
VALUES (
        'Doe',
        'John',
        'john.doe@email.com',
        'motdepasse1',
        0,
        '1990-05-15'
    ),
    (
        'Smith',
        'Alice',
        'alice.smith@email.com',
        'password123',
        0,
        '1985-09-22'
    ),
    (
        'Johnson',
        'Bob',
        'bob.johnson@email.com',
        'secretword',
        1,
        '1982-12-10'
    ),
    (
        'Martin',
        'Emma',
        'emma.martin@email.com',
        '1234abcd',
        0,
        '1992-07-03'
    ),
    (
        'Brown',
        'David',
        'david.brown@email.com',
        'securepass',
        0,
        '1988-03-28'
    ),
    (
        'Wilson',
        'Sophie',
        'sophie.wilson@email.com',
        'qwerty567',
        0,
        '1995-11-18'
    ),
    (
        'Miller',
        'Daniel',
        'daniel.miller@email.com',
        'pass123',
        0,
        '1987-06-14'
    ),
    (
        'Garcia',
        'Lily',
        'lily.garcia@email.com',
        'p@ssw0rd',
        0,
        '1993-04-07'
    ),
    (
        'Jones',
        'Michael',
        'michael.jones@email.com',
        'mysecretpassword',
        0,
        '1984-08-25'
    ),
    (
        'Williams',
        'Olivia',
        'olivia.williams@email.com',
        'secure123',
        0,
        '1991-02-12'
    );
-- Données pour la table 'event'
INSERT INTO event (city, date, address, quantity)
VALUES (
        'Paris',
        '2024-03-10',
        '123 Rue de la Ville',
        100
    ),
    ('London', '2024-04-15', '456 Main Street', 150),
    ('New York', '2024-05-20', '789 Broadway', 120),
    ('Berlin', '2024-06-25', '101 Hauptstrasse', 80),
    (
        'Tokyo',
        '2024-07-30',
        '202 Shibuya Crossing',
        200
    ),
    ('Sydney', '2024-08-05', '303 Harbour Drive', 90),
    ('Toronto', '2024-09-10', '404 Bay Street', 110),
    ('Mumbai', '2024-10-15', '505 Bollywood Lane', 70),
    (
        'Cape Town',
        '2024-11-20',
        '606 Table Mountain Road',
        130
    ),
    (
        'Rio de Janeiro',
        '2024-12-25',
        '707 Copacabana Beach',
        180
    );
-- Données pour la table 'stockEvent'
-- Pour chaque événement, assignez au moins 3 utilisateurs
INSERT INTO stockEvent (event_id, user_id)
VALUES (1, 1),
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (2, 6),
    (3, 7),
    (3, 8),
    (3, 9),
    (4, 1),
    (4, 2),
    (4, 3),
    (5, 4),
    (5, 5),
    (5, 6),
    (6, 7),
    (6, 8),
    (6, 9),
    (7, 1),
    (7, 2),
    (7, 3),
    (8, 4),
    (8, 5),
    (8, 6),
    (9, 7),
    (9, 8),
    (9, 9),
    (10, 1),
    (10, 2),
    (10, 3);
-- Données pour la table 'note'
INSERT INTO note (
        note_physique,
        note_vitesse,
        note_passe,
        note_tir,
        note_dribble,
        note_vista,
        note_cf,
        note_plongeon,
        note_arrets,
        note_dega,
        note_pied_faible,
        note_gen,
        user_id
    )
VALUES (
        8.5,
        9.0,
        7.5,
        8.0,
        9.5,
        8.0,
        7.0,
        8.5,
        9.0,
        8.5,
        9.0,
        8.5,
        1
    ),
    (
        7.0,
        8.0,
        7.0,
        6.5,
        7.5,
        8.0,
        6.0,
        7.0,
        8.0,
        7.0,
        8.0,
        7.0,
        2
    ),
    (
        9.0,
        8.5,
        9.0,
        9.5,
        8.0,
        9.0,
        9.0,
        7.5,
        8.0,
        8.5,
        9.0,
        8.5,
        3
    );
-- Données pour la table 'score_card'
INSERT INTO SCORE_CARD (photo_user, note_id)
VALUES ('chemin/vers/photo1.jpg', 1),
    ('chemin/vers/photo2.jpg', 2),
    ('chemin/vers/photo3.jpg', 3);