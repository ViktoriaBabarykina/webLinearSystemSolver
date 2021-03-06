import numpy
from scipy import random
import json
from LinearSystemSolver.LinearSystemManager.ConfigManager import ConfigManager


class GetInputData(object):
    def generate_symmetric_positive_definite_matrix(self, dim):
        symmetric_positive_definite_matrix = [numpy.dot(random.rand(dim, dim), random.rand(dim, dim).transpose())]

        return symmetric_positive_definite_matrix

    def generate_b_vector(self, dim):
        return random.rand(dim)

    def get_matrix_from_file(self):
        config = ConfigManager()
        path_to_matrix = config.path_to_linear_system()
        matrix = []
        file_data = []
        vector_b = []
        dim = ''
        with open(path_to_matrix) as file:
            dim = file.readline().rstrip('\n')
            for line in file:
                if line is not '\n':
                    file_data.append(list(line.rstrip('\n')))
        vector_b.append(file_data.pop())
        matrix = file_data;

        result = [matrix, vector_b]
        return result

    def get_solution_from_file(self):
        config = ConfigManager()
        path_to_solution = config.path_to_linear_system_solution()
        solution = []
        with open(path_to_solution) as file:
            for line in file:
                if line is not '\n':
                    solution.append(list(line.rstrip('\n')))
            # solution = file.readline().rstrip('\n')

        return solution
