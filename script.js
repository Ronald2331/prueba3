document.getElementById('calcular').addEventListener('click', () => {
    const [a, b, c] = ['a', 'b', 'c'].map(id => parseFloat(document.getElementById(id).value));
    const discriminante = b**2 - 4*a*c;
    const calcularRaiz = (signo) => (-b + signo*Math.sqrt(discriminante)) / (2*a);
    
    document.getElementById('resultado').innerHTML = discriminante >= 0 
        ? `x₁ = ${calcularRaiz(1).toFixed(2)}<br>x₂ = ${calcularRaiz(-1).toFixed(2)}`
        : `x₁ = ${(-b/(2*a)).toFixed(2)} + ${(Math.sqrt(-discriminante)/(2*a)).toFixed(2)}i<br>x₂ = ${(-b/(2*a)).toFixed(2)} - ${(Math.sqrt(-discriminante)/(2*a)).toFixed(2)}i`;
});