import torch


class DemoModel(object):
    def __init__(self, params):
        self.params = params
        model_class = self._load_module(params['model_path'])
        model_instance = model_class(**params['params'])

        # load model on cpu
        ckpt = torch.load(params['checkpoint_path'],
                          map_location=lambda storage, loc: storage)
        model_instance.load_state_dict(ckpt)

        self.model = model_instance

    def predict(self, params):
        return self.model(params)

    def _load_module(self, module_path):
        module = importlib.import_module('.'.join(module_path.split('.')[:-1]))
        class_name = module_path.split('.')[-1]

        model_class = getattr(module, class_name)

        return model_class
