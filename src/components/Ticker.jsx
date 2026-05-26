const skills = [
  'Django', 'NestJS', 'Node.js', 'Flask', 'PostgreSQL', 'Redis',
  'React', 'Supabase', 'Firestore', 'Celery', 'WebSockets',
  'Groq / Llama 3.3', 'OpenCV', 'Tesseract', 'Scikit-learn',
  'AWS IAM', 'S3', 'CloudFront', 'ACM',
]

const Sep = () => <span className="mx-6 text-accent font-bold select-none">·</span>

export default function Ticker() {
  const doubled = [...skills, ...skills]

  return (
    <div className="border-y border-rule py-5 overflow-hidden bg-accent-bg/40 select-none">
      <div className="ticker-track whitespace-nowrap">
        {doubled.map((s, i) => (
          <span key={i} className="font-mono text-sm text-ink inline-flex items-center">
            {s}<Sep />
          </span>
        ))}
      </div>
    </div>
  )
}
