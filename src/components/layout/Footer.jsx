function Footer() {
  return (
    <footer className="relative pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between text-xs text-on-surface-variant">
          <span>© {new Date().getFullYear()} Sameer Saleem</span>
          <span>Full Stack Developer | Karachi, Sindh</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
