import os
import json


class ConfigManager(object):
    def __init__(self):
        self.config_path = os.getcwd() + '/config.json'

    def path_to_linear_system(self):
        with open(self.config_path, 'r') as f:
            data = json.loads(f.read())
            if 'path_to_linear_system' in data:
                return data['path_to_linear_system']
            else:
                return None

    def path_to_linear_system_solution(self):
        with open(self.config_path, 'r') as f:
            data = json.loads(f.read())
            if 'path_to_linear_system_solution' in data:
                return data['path_to_linear_system_solution']
            else:
                return None