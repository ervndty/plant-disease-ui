import {
  AlertTriangle,
  CheckCircle2,
  Leaf,
  Droplets,
  Bug,
  HelpCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DetectionResultProps {
  result: {
    disease?: string;
    confidence?: number;
    severity?: string;
    description?: string;
    symptoms?: string[];
    treatment?: string[];
  } | null;
  isLoading: boolean;
}

const severityConfig = {
  healthy: {
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/30',
    icon: CheckCircle2,
    label: 'Sehat',
  },
  low: {
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    icon: Leaf,
    label: 'Ringan',
  },
  medium: {
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/30',
    icon: AlertTriangle,
    label: 'Parah',
  },
  high: {
    color: 'text-destructive',
    bg: 'bg-destructive/10',
    border: 'border-destructive/30',
    icon: AlertTriangle,
    label: 'Parah',
  },
  unknown: {
    color: 'text-muted-foreground',
    bg: 'bg-muted/50',
    border: 'border-muted',
    icon: HelpCircle,
    label: 'Tidak Diketahui',
  },
};

const DetectionResult = ({ result, isLoading }: DetectionResultProps) => {
  if (isLoading) {
    return <div className="result-card animate-pulse h-40" />;
  }

  if (!result) {
    return (
      <div className="result-card text-center py-12">
        <Leaf className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
        <p className="text-muted-foreground">
          Upload gambar tanaman untuk memulai analisis
        </p>
      </div>
    );
  }

  const confidence = result.confidence ?? 0;

  // 🔥 RULE UTAMA
  const isUnknown = confidence < 50;

  // 🔒 OVERRIDE TOTAL JIKA UNKNOWN
  const severity = isUnknown ? 'unknown' : result.severity ?? 'hard';
  const diseaseName = isUnknown ? 'Tidak Diketahui' : result.disease;

  const config = severityConfig[severity] ?? severityConfig.unknown;
  const Icon = config.icon;

  const symptoms = result.symptoms || [];
  const treatment = result.treatment || [];

  return (
    <div className="result-card animate-slide-up">
      {/* HEADER */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b">
        <div className={cn('p-3 rounded-2xl', config.bg)}>
          <Icon className={cn('w-8 h-8', config.color)} />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold">{diseaseName}</h3>

          <div className="flex items-center gap-2 mt-1">
            <span
              className={cn(
                'px-2.5 py-0.5 rounded-full text-xs font-semibold',
                config.bg,
                config.color
              )}
            >
              {config.label}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mt-2">
            Tingkat kepercayaan:{' '}
            <span
              className={cn(
                'font-semibold',
                confidence < 50
                  ? 'text-destructive'
                  : confidence < 80
                  ? 'text-warning'
                  : 'text-success'
              )}
            >
              {confidence}%
            </span>
          </p>
        </div>
      </div>

      {/* ALERT UNKNOWN */}
      {isUnknown && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
          <p className="text-sm text-destructive font-medium">
            Akurasi Rendah – Deteksi Tidak Dapat Dipercaya
          </p>
          <p className="text-sm text-destructive/80 mt-1">
            Silakan upload foto daun tanaman yang lebih jelas.
          </p>
        </div>
      )}

      {/* DESCRIPTION */}
{!isUnknown && result.description && (
  <p className="mb-6 text-foreground/80">
    {result.description}
  </p>
)}

{/* GEJALA – TETAP TAMPIL */}
{symptoms.length > 0 && (
  <div className="mb-6">
    <h4 className="font-semibold flex items-center gap-2 mb-2">
      <Bug className="w-5 h-5 text-primary" />
      Gejala yang Terlihat
    </h4>
    <ul className="space-y-2 text-sm text-foreground/70">
      {symptoms.map((s, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full" />
          {s}
        </li>
      ))}
    </ul>
  </div>
)}

    {/* PENANGANAN – TETAP TAMPIL */}
    {treatment.length > 0 && (
      <div>
        <h4 className="font-semibold flex items-center gap-2 mb-2">
          <Droplets className="w-5 h-5 text-accent" />
          Saran Penanganan
        </h4>
        <ul className="space-y-2 text-sm text-foreground/70">
          {treatment.map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-semibold">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    )}

    </div>
  );
};

export default DetectionResult;
