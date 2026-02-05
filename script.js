/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

/* Header Styles */
header {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background-color: #1c1c1c;
    color: white;
}

header .logo h1 {
    font-size: 2.5rem;
    font-weight: bold;
}

header nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
}

header nav ul li {
    display: inline;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
}

header nav ul li a:hover {
    color: #e60000;
}

/* Hero Section */
#hero {
    background: url('https://www.toyota.com/content/legacy/toyota/us/en/images/homepage/global/hero/toyota-hero.jpg') no-repeat center center/cover;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

#hero .hero-content h2 {
    font-size: 3rem;
    margin-bottom: 10px;
}

#hero .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

#hero .cta-button {
    background-color: #e60000;
    color: white;
    padding: 10px 30px;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 5px;
}

#hero .cta-button:hover {
    background-color: #ff3333;
}

/* Services Section */
#services {
    padding: 40px;
    background-color: #fff;
    text-align: center;
}

#services h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.service-cards {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.service-card {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.service-card p {
    font-size: 1rem;
}

/* Footer Styles */
footer {
    background-color: #1c1c1c;
    color: white;
    padding: 20px;
    text-align: center;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        align-items: center;
    }

    header nav ul {
        flex-direction: column;
        align-items: center;
    }

    .service-cards {
        flex-direction: column;
        gap: 15px;
    }

    .service-card {
        width: 80%;
        margin: 0 auto;
    }
}
#hero {
    background: url('https://www.toyota.com/content/legacy/toyota/us/en/images/homepage/global/hero/toyota-hero.jpg') no-repeat center center/cover;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}
