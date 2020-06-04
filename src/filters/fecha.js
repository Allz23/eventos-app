export default valor => {
  const fecha = new Date(valor);
  return fecha.toLocaleString(['es-ES'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};
