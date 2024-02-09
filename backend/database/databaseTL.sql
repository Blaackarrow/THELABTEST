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
) -- Données pour la table 'user'
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

CREATE TABLE discount (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    percent_value INT NOT NULL,
    promo_code VARCHAR(80),
    quantity INT NOT NULL,
    payment_id INT NOT NULL,
    CONSTRAINT fk_discount_payment_id FOREIGN KEY (payment_id) REFERENCES payment(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE discount
ADD COLUMN duree_de_validite TIMESTAMP NOT NULL AFTER quantity;

CREATE TABLE user_discount (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    CONSTRAINT fk_user_discount_user_id FOREIGN KEY (user_id) REFERENCES user(id),
    discount_id INT NOT NULL,
    CONSTRAINT fk_user_discount_discount_id FOREIGN KEY (discount_id) REFERENCES discount(id), 
    duree_de_validite TIMESTAMP NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE payment (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    bill_number VARCHAR(80) NOT NULL,
    amount DECIMAL NOT NULL,
    payment_method VARCHAR(80) NOT NULL,
    status VARCHAR(80) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO discount (percent_value, promo_code, quantity, payment_id)
VALUES 
  (10, 'SUMMER10', 5, 1),
  (20, 'SALE20', 10, 2),
  (15, 'DISCOUNT15', 8, 3),
  (25, 'FALL25', 15, 1),
  (30, 'HOLIDAY30', 20, 2);

INSERT INTO user_discount (user_id, discount_id)
VALUES 
  (1, 1),
  (2, 2),
  (3, 3),
  (1, 4),
  (2, 5);

INSERT INTO payment (bill_number, amount, payment_method, status)
VALUES 
  ('INV12345', 100.50, 'Credit Card', 'Paid'),
  ('INV67890', 75.25, 'PayPal', 'Pending'),
  ('INV54321', 50.75, 'Bank Transfer', 'Paid'),
  ('INV98765', 120.00, 'Cash', 'Pending'),
  ('INV13579', 90.30, 'Stripe', 'Paid');


