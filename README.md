# Fama Restaurante — versão Flask (para rodar no seu computador)

Cópia independente do site do Fama Restaurante em **Python + Flask**.
Mesmo visual, mesmo cardápio digital, mesma galeria com lightbox.

## Como rodar no PyCharm (passo a passo)

1. Abra o PyCharm e vá em **File → Open...** e escolha a pasta `fama-restaurante-flask`.
2. Crie o interpretador Python (se ainda não tiver):
   **File → Settings → Project → Python Interpreter → Add Interpreter → Add Local Interpreter → Virtualenv Environment → New** e confirme.
3. Instale o Flask: abra o terminal dentro do PyCharm (rodapé, aba **Terminal**) e digite:
   ```
   pip install -r requirements.txt
   ```
4. Abra o arquivo `app.py` e clique na **seta verde de Run** (ou pressione `Shift+F10`).
5. No terminal vai aparecer algo como `Running on http://127.0.0.1:5000`.
   Abra esse endereço no navegador (Ctrl + clique no link funciona).

Para parar o servidor, clique no quadrado vermelho de **Stop** no PyCharm.

## Estrutura do projeto

```
fama-restaurante-flask/
├── app.py                  # Servidor Flask (rota única "/")
├── requirements.txt        # Dependências (apenas Flask)
├── README.md               # Este arquivo
├── templates/
│   └── index.html          # Página completa do site
└── static/
    ├── css/style.css       # Estilos (terracota, creme, marrom-café)
    ├── js/script.js        # Menu hambúrguer, abas do cardápio, lightbox
    └── images/             # Logo, fotos dos pratos e fachadas
```

## Como editar o cardápio

Os pratos e preços ficam em **`static/js/script.js`**, no início do arquivo,
na lista `MENU` (bem comentada). Para adicionar um prato, copie uma linha e
altere nome, descrição e preços. Preço `null` aparece como "Consulte".

## Observações

- Precisa de internet na primeira abertura para carregar as fontes
  (Lora e Manrope, via Google Fonts).
- Os valores marcados como "Consulte" aguardam confirmação do restaurante.
