import heroImg from '../assets/hero.png'

export default function Home() {
  return (
    <section className="hero-section">
      <img src={heroImg} alt="" width="170" height="179" />
      <h1>Find your next opportunity</h1>
      <p>Match your student profile to jobs and internships that fit.</p>
    </section>
  )
}
