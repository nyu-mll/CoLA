from flask import Blueprint, request
from ..config import config

import json

test_blueprint = Blueprint('test_blueprint', __name__, url_prefix='/test')


@test_blueprint.route('/', methods=['POST'])
def test_blueprint_index():
    print(request.form['text'])
    print(request.form['model_name'])
    return 'test'


@test_blueprint.route('/models', methods=['GET'])
def test_blueprint_models():
    return json.dumps(list(config['models'].keys()))
