export async function randomMatrixRequest() {
    let response = await fetch('WebLinearSystemSolver/view_system');
    return response;
}

export async function solveMatrixRequest() {
    let response = await fetch('WebLinearSystemSolver/solve_system');
    return response;
}