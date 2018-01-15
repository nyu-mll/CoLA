from app import app
from app.config import config
from app.models.DemoModel import DemoModel

app.predictors = {}
for model in config['models']:
    app.predictors[model] = DemoModel(config['models'][model])

app.run(host='0.0.0.0', port=8080, debug=True)
