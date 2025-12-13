import { Navbar } from "@/components/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 relative">
        {/* Decorative background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative">
          {children}
        </div>
      </main>
    </div>
  );
}
