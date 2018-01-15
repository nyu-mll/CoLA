config = {
    # Websites to be allowed access to the backend.

    'cors_origins': ['http://localhost:3000',
                     'http://nyu-mll.github.io/grammaticality-judgements'],

    # Declare key as the name of the model, this will be displayed in website's
    # dropdown for model selection
    # Value of the item will be a dictionary containing three keys which are
    # required. Extra information can be passed though as any other keys

    # model_path: Path for the model class which will be imported.
    # params: Parameters that will be passed to model class while instantiating
    # checkpoint_path: Path for the saved trained checkpoint for the current
    # model
    'models': {
        'LSTM-1': {
            'model_path': 'acceptability.models.lstm_1',
            'params': [],
            'checkpoint_path': ''
        },
        'LM-1': {
            'model_path': 'acceptability.models.lm_1',
            'params': [],
            'checkpoint_path': ''
        },
        'InferSent-Real-Fake': {
            'model_path': 'acceptability.models.infersent_classifier',
            'params': [],
            'checkpoint_path': ''
        }
    }
}
