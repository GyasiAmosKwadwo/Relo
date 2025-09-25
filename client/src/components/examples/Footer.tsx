import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Footer Component Demo</h1>
        <p className="text-muted-foreground mt-2">Scroll down to see the footer.</p>
        <div className="h-96 bg-muted rounded-lg mt-4 flex items-center justify-center">
          <p className="text-muted-foreground">Page content here...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}