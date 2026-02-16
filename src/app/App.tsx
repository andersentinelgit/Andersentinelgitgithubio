export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-background">
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-center mb-4">Navigation</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Contact Us
          </a>
          <a
            href="#support"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Get Support
          </a>
          <a
            href="#tos"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            ToS
          </a>
          <a
            href="#documentation"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Documentation
          </a>
          <a
            href="#community"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Join Community
          </a>
        </div>
      </div>
    </div>
  );
}