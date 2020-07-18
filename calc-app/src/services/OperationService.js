
export async function getAllOperations() {

    const response = await fetch('/api/operations');
    return await response.json();
}

export async function calculateOperation(data) {
    const response = await fetch(`/api/calculate`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({operation: data})
      })
    return await response.json();
}