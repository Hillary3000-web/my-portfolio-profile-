export default function Footer() {
  return (
    <footer className="border-t border-rule py-7 px-6 md:px-12 lg:px-16 bg-canvas">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Hillary Chukwuma Prince · Port Harcourt, Nigeria
        </p>
        <div className="font-mono text-xs text-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          Hosted on AWS S3 + CloudFront
        </div>
      </div>
    </footer>
  )
}
