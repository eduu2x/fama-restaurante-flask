# Fama Restaurante — servidor simples com Flask.
# Serve apenas a página inicial (index.html) com o visual do site.
# Para rodar: python app.py  (ou o botão Run do PyCharm)

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    # Renderiza o arquivo templates/index.html e injeta
    # automaticamente os arquivos de static/ (css, js, imagens).
    return render_template("index.html")


if __name__ == "__main__":
    # debug=True recarrega sozinho quando você edita os arquivos.
    # O site abre em http://127.0.0.1:5000
    app.run(debug=True)
