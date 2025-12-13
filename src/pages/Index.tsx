import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ScanLine, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "Deteksi Akurat",
    description: "Teknologi AI canggih untuk mengidentifikasi penyakit tanaman dengan akurasi tinggi",
  },
  {
    icon: Zap,
    title: "Hasil Instan",
    description: "Dapatkan hasil analisis dalam hitungan detik setelah upload gambar",
  },
  {
    icon: Shield,
    title: "Rekomendasi Penanganan",
    description: "Saran perawatan dan pengobatan yang tepat untuk setiap penyakit",
  },
];

const steps = [
  "Upload foto daun tanaman yang terinfeksi",
  "AI akan menganalisis gambar secara otomatis",
  "Lihat hasil deteksi dan rekomendasi penanganan",
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Powered by AI Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Deteksi Penyakit Tanaman dengan{" "}
              <span className="text-primary">Kecerdasan Buatan</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Identifikasi penyakit tanaman Anda secara instan menggunakan teknologi AI. 
              Cukup upload foto dan dapatkan diagnosis serta rekomendasi penanganan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/detection">
                  <ScanLine className="w-5 h-5" />
                  Mulai Deteksi
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/dashboard">
                  Lihat Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih PlantCare AI?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Solusi modern untuk perawatan tanaman Anda dengan teknologi terdepan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cara Kerja
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tiga langkah mudah untuk mendeteksi penyakit tanaman Anda
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-accent/30 border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-foreground">{step}</p>
                <CheckCircle2 className="w-5 h-5 text-primary ml-auto shrink-0" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="gap-2">
              <Link to="/detection">
                Coba Sekarang
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-foreground">PlantCare AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 PlantCare AI. Deteksi penyakit tanaman dengan teknologi AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
