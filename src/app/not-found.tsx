import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span className="brand-mark">F.</span><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This page went off-script<span className="gradient-text">.</span></h1><p>The page you’re looking for doesn’t exist or may have moved.</p><Link className="button button-primary" href="/">Back to homepage ↗</Link></main>;
}
