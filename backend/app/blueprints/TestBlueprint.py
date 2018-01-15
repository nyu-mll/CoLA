from flask import Blueprint, request
from ..config import config

import json
import torch

test_blueprint = Blueprint('test_blueprint', __name__, url_prefix='/test')


@test_blueprint.route('/', methods=['POST'])
def test_blueprint_index():
    text = request.form['text']
    model_name = request.form['model_name']

    model_config = config['models'][model_name]


@test_blueprint.route('/models', methods=['GET'])
def test_blueprint_models():
    return json.dumps(list(config['models'].keys()))
