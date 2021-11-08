from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def home():
    title = 'La Banda(Oficial)'
    return render_template('index.html',title = title)

@app.route('/integ')
def integ():
    title = 'La Banda(Integrantes)'
    return render_template('integrantes.html', title = title)

@app.route("/img")
def image():
    title = 'La Banda(Imagenes)'
    return render_template('imagenes.html', title = title)

@app.route("/register")
def reg():
    title = 'La Banda(Registro)'
    return render_template('registro.html', title = title)

if __name__ == '__main__':
    app.run(debug=True, port=8000)