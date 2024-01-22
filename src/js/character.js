export function healthRate(data) {
  if (data.health > 50) {
    return 'healthy';
  } else if (data.health > 14) {
    return 'wounded';
  }
  return 'critical';
}