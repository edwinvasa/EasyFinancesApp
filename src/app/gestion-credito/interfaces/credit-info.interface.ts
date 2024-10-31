export interface CreditInfo {
  monto: number | null;
  tipoTasa: 'TEA' | 'TNM';  // Asumiendo que son los únicos dos tipos de tasa que se manejan.
  tasa: number | null;
  plazo: number | null;
  tipoPlazo: 'Meses' | 'Años';
  abonosCapital: string;
  valorAbono: number | null;
  frecuenciaAbono?: string;
  cuotaInicio: number | null;
}
